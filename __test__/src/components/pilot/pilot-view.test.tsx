import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PilotView } from '@/components/pilot/pilot-view';
import {
  type ButtonLabel,
  Language,
  type Pilot,
  Timezone,
  UserRole,
  UserStatus,
} from '@/graphql/types/schema';

describe('PilotView', () => {
  const createMockUser = () => ({
    id: 'u1',
    name: 'John Pilot',
    balance: 5000,
    language: Language.English,
    role: UserRole.Operator,
    status: UserStatus.Active,
    timezone: Timezone.Amsterdam,
  });

  const createMockPilot = (overrides: Partial<Pilot> = {}): Pilot => ({
    id: '1',
    name: 'Test Pilot',
    isActive: true,
    isDefault: false,
    user: createMockUser(),
    buttons: [
      {
        id: 'btn1',
        name: 'Gate A',
        label: 'A' as ButtonLabel,
        pilotId: '1',
        user: createMockUser(),
      },
      {
        id: 'btn2',
        name: 'Gate B',
        label: 'B' as ButtonLabel,
        pilotId: '1',
        user: createMockUser(),
      },
    ],
    ...overrides,
  });

  it('should render pilot name', () => {
    const pilot = createMockPilot();

    render(<PilotView pilot={pilot} />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Test Pilot');
    expect(heading).toHaveClass('text-2xl', 'mb-20', 'text-center');
  });

  it('should render all pilot buttons', () => {
    const pilot = createMockPilot();

    render(<PilotView pilot={pilot} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent('Gate A');
    expect(buttons[1]).toHaveTextContent('Gate B');
  });

  it('should render button name when available, fallback to label', () => {
    const pilot = createMockPilot({
      buttons: [
        {
          id: 'btn1',
          name: 'Custom Name',
          label: 'A' as ButtonLabel,
          pilotId: '1',
          user: createMockUser(),
        },
        {
          id: 'btn2',
          name: null,
          label: 'B' as ButtonLabel,
          pilotId: '1',
          user: createMockUser(),
        },
      ],
    });

    render(<PilotView pilot={pilot} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('Custom Name');
    expect(buttons[1]).toHaveTextContent('B');
  });

  it('should filter out falsy buttons', () => {
    const pilot = createMockPilot({
      buttons: [
        {
          id: 'btn1',
          name: 'Gate A',
          label: 'A' as ButtonLabel,
          pilotId: '1',
          user: createMockUser(),
        },
        null,
        {
          id: 'btn2',
          name: 'Gate B',
          label: 'B' as ButtonLabel,
          pilotId: '1',
          user: createMockUser(),
        },
      ],
    });

    render(<PilotView pilot={pilot} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('should render with correct semantic structure', () => {
    const pilot = createMockPilot();

    render(<PilotView pilot={pilot} />);

    const aside = screen.getByRole('complementary');
    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');

    expect(aside).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
  });

  it('should render instruction text', () => {
    const pilot = createMockPilot();

    render(<PilotView pilot={pilot} />);

    const instruction = screen.getByText('Wybierz bramkę by otworzyć');
    expect(instruction).toBeInTheDocument();
    expect(instruction).toHaveClass('text-center');
  });

  it('should handle pilot with no buttons', () => {
    const pilot = createMockPilot({ buttons: [] });

    render(<PilotView pilot={pilot} />);

    const heading = screen.getByRole('heading');
    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('list');
    const instruction = screen.getByText('Wybierz bramkę by otworzyć');

    expect(heading).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(instruction).toBeInTheDocument();
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('should handle pilot with null buttons', () => {
    const pilot = createMockPilot({ buttons: null });

    render(<PilotView pilot={pilot} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });
});
