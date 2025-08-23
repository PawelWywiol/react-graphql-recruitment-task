import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import type { ActionsBarItem } from '@/components/actions-bar/actions-bar.types';
import { ActionsBar } from '@/components/actions-bar/actions-bar';

describe('ActionsBar', () => {
  const mockIcon = <svg data-testid="test-icon" />;

  const createMockItems = (overrides: Partial<ActionsBarItem>[] = []): ActionsBarItem[] => [
    {
      icon: mockIcon,
      label: 'Home',
      active: true,
      onClick: vi.fn(),
      ...overrides[0],
    },
    {
      icon: mockIcon,
      label: 'Profile',
      active: false,
      onClick: vi.fn(),
      ...overrides[1],
    },
  ];

  it('should render all action items', () => {
    const items = createMockItems();

    render(<ActionsBar items={items} />);

    expect(screen.getByLabelText('Home')).toBeInTheDocument();
    expect(screen.getByLabelText('Profile')).toBeInTheDocument();
  });

  it('should render icons for each item', () => {
    const items = createMockItems();

    render(<ActionsBar items={items} />);

    const icons = screen.getAllByTestId('test-icon');
    expect(icons).toHaveLength(2);
  });

  it('should apply active styling to active items', () => {
    const items = createMockItems();

    render(<ActionsBar items={items} />);

    const homeButton = screen.getByLabelText('Home');
    const profileButton = screen.getByLabelText('Profile');

    expect(homeButton).not.toHaveClass('text-gray-300');
    expect(profileButton).toHaveClass('text-gray-300');
  });

  it('should call onClick when item is clicked', async () => {
    const user = userEvent.setup();
    const items = createMockItems();

    render(<ActionsBar items={items} />);

    const homeButton = screen.getByLabelText('Home');
    await user.click(homeButton);

    expect(items[0].onClick).toHaveBeenCalledTimes(1);
  });

  it('should handle items without onClick', async () => {
    const user = userEvent.setup();
    const items = createMockItems([{ onClick: undefined }]);

    render(<ActionsBar items={items} />);

    const homeButton = screen.getByLabelText('Home');
    await user.click(homeButton);

    expect(() => user.click(homeButton)).not.toThrow();
  });

  it('should render with correct semantic structure', () => {
    const items = createMockItems();

    render(<ActionsBar items={items} />);

    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    const buttons = screen.getAllByRole('button');

    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
    expect(buttons).toHaveLength(2);
  });

  it('should render with fixed positioning classes', () => {
    const items = createMockItems();

    render(<ActionsBar items={items} />);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('fixed', 'bottom-0', 'left-0', 'right-0', 'bg-background');
  });

  it('should render empty list when no items provided', () => {
    render(<ActionsBar items={[]} />);

    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('list');

    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
