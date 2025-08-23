import type { ApolloClient, ApolloError } from '@apollo/client';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { LoginForm } from '@/components/login-form/login-form';
import { LOGGED_IN_ROUTE_PATH } from '@/config/route';
import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from '@/config/storage';
import { useLoginUserMutation } from '@/graphql/types/generated';

const UNKNOWN_ERROR_MESSAGE = 'An unknown error occurred. Please try again.';

const MOCK_AUTH_TOKEN = 'mock-auth-token';
const MOCK_EMAIL_ADDRESS = 'test@example.com';
const MOCK_PASSWORD = 'password123';

const mockPush = vi.fn();
const mockReplace = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockReplace,
  }),
}));

const mockLoginUserMutation = vi.fn();

vi.mock('@/graphql/types/generated', () => ({
  useLoginUserMutation: vi.fn(),
}));

const mockLocalStorage = {
  setItem: vi.fn(),
  getItem: vi.fn(),
  removeItem: vi.fn(),
};

Object.defineProperty(globalThis, 'localStorage', {
  value: mockLocalStorage,
  writable: true,
});

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocalStorage.setItem.mockClear();
    vi.mocked(useLoginUserMutation).mockReturnValue([
      mockLoginUserMutation,
      {
        loading: false,
        error: undefined,
        called: false,
        client: {} as ApolloClient<object>,
        reset: vi.fn(),
      },
    ]);
  });

  it('should render login form with email and password fields', () => {
    render(<LoginForm />);

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should show loading state when form is being submitted', () => {
    vi.mocked(useLoginUserMutation).mockReturnValue([
      mockLoginUserMutation,
      {
        loading: true,
        error: undefined,
        called: true,
        client: {} as ApolloClient<object>,
        reset: vi.fn(),
      },
    ]);

    render(<LoginForm />);

    const submitButton = screen.getByRole('button');
    expect(submitButton).toHaveTextContent('Logging in...');
    expect(submitButton).toBeDisabled();
  });

  it('should display GraphQL error when mutation fails', () => {
    const mockError = {
      message: 'Invalid credentials',
    } as ApolloError;
    vi.mocked(useLoginUserMutation).mockReturnValue([
      mockLoginUserMutation,
      {
        loading: false,
        error: mockError,
        called: false,
        client: {} as ApolloClient<object>,
        reset: vi.fn(),
      },
    ]);

    render(<LoginForm />);

    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });

  it('should handle successful login and redirect', async () => {
    const user = userEvent.setup();
    mockLoginUserMutation.mockResolvedValue({
      data: {
        loginUser: {
          token: MOCK_AUTH_TOKEN,
        },
      },
    });

    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.type(emailInput, MOCK_EMAIL_ADDRESS);
    await user.type(passwordInput, MOCK_PASSWORD);
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockLoginUserMutation).toHaveBeenCalledWith({
        variables: {
          email: MOCK_EMAIL_ADDRESS,
          password: MOCK_PASSWORD,
        },
      });
    });

    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      AUTH_TOKEN_LOCAL_STORAGE_KEY,
      MOCK_AUTH_TOKEN,
    );
    expect(mockReplace).toHaveBeenCalledWith(LOGGED_IN_ROUTE_PATH);
  });

  it('should handle login failure and show unknown error', async () => {
    const user = userEvent.setup();
    mockLoginUserMutation.mockRejectedValue(new Error('Network error'));

    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.type(emailInput, MOCK_EMAIL_ADDRESS);
    await user.type(passwordInput, MOCK_PASSWORD);
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(UNKNOWN_ERROR_MESSAGE)).toBeInTheDocument();
    });
  });

  it('should reset unknown error when new submission starts', async () => {
    const user = userEvent.setup();
    mockLoginUserMutation.mockRejectedValueOnce(new Error('Network error'));

    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.type(emailInput, MOCK_EMAIL_ADDRESS);
    await user.type(passwordInput, MOCK_PASSWORD);
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(UNKNOWN_ERROR_MESSAGE)).toBeInTheDocument();
    });

    mockLoginUserMutation.mockResolvedValue({
      data: {
        loginUser: {
          token: MOCK_AUTH_TOKEN,
        },
      },
    });

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(UNKNOWN_ERROR_MESSAGE)).not.toBeInTheDocument();
    });
  });

  it('should handle login response without token', async () => {
    const user = userEvent.setup();
    mockLoginUserMutation.mockResolvedValue({
      data: {
        loginUser: null,
      },
    });

    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.type(emailInput, MOCK_EMAIL_ADDRESS);
    await user.type(passwordInput, MOCK_PASSWORD);
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockLoginUserMutation).toHaveBeenCalled();
    });

    expect(mockLocalStorage.setItem).not.toHaveBeenCalled();
    expect(mockReplace).not.toHaveBeenCalled();
  });

  it('should not store token or redirect when localStorage is not available', async () => {
    const user = userEvent.setup();
    const originalGlobalThis = globalThis;

    Object.defineProperty(globalThis, 'localStorage', {
      value: undefined,
      writable: true,
    });

    mockLoginUserMutation.mockResolvedValue({
      data: {
        loginUser: {
          token: MOCK_AUTH_TOKEN,
        },
      },
    });

    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.type(emailInput, MOCK_EMAIL_ADDRESS);
    await user.type(passwordInput, MOCK_PASSWORD);
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockLoginUserMutation).toHaveBeenCalled();
    });

    expect(mockReplace).toHaveBeenCalledWith(LOGGED_IN_ROUTE_PATH);

    Object.defineProperty(globalThis, 'localStorage', {
      value: originalGlobalThis.localStorage,
      writable: true,
    });
  });
});
