import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Paginator } from '@/components/paginator/paginator';

describe('Paginator', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render correct number of pagination buttons', () => {
    const totalPages = 3;

    render(<Paginator index={0} total={totalPages} onChange={mockOnChange} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(totalPages);
  });

  it('should highlight the active page', () => {
    render(<Paginator index={1} total={3} onChange={mockOnChange} />);

    const buttons = screen.getAllByRole('button');
    const activeDot = buttons[1].querySelector('span');
    const inactiveDot = buttons[0].querySelector('span');

    expect(activeDot).toHaveClass('bg-primary', 'shadow-dot-selected');
    expect(inactiveDot).not.toHaveClass('bg-primary', 'shadow-dot-selected');
  });

  it('should call onChange when button is clicked', async () => {
    const user = userEvent.setup();
    render(<Paginator index={0} total={3} onChange={mockOnChange} />);

    const buttons = screen.getAllByRole('button');
    await user.click(buttons[2]);

    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it('should handle single page', () => {
    const totalPages = 1;
    render(<Paginator index={0} total={totalPages} onChange={mockOnChange} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);

    const activeDot = buttons[0].querySelector('span');
    expect(activeDot).toHaveClass('bg-primary', 'shadow-dot-selected');
  });

  it('should handle zero total pages', () => {
    render(<Paginator index={0} total={0} onChange={mockOnChange} />);

    const buttons = screen.queryAllByRole('button');
    expect(buttons).toHaveLength(0);
  });

  it('should handle clicking same page', async () => {
    const user = userEvent.setup();
    render(<Paginator index={1} total={3} onChange={mockOnChange} />);

    const buttons = screen.getAllByRole('button');
    await user.click(buttons[1]);

    expect(mockOnChange).toHaveBeenCalledWith(1);
  });

  it('should call onChange with correct index for each button', async () => {
    const user = userEvent.setup();
    render(<Paginator index={0} total={3} onChange={mockOnChange} />);

    const buttons = screen.getAllByRole('button');

    await user.click(buttons[0]);
    expect(mockOnChange).toHaveBeenLastCalledWith(0);

    await user.click(buttons[1]);
    expect(mockOnChange).toHaveBeenLastCalledWith(1);

    await user.click(buttons[2]);
    expect(mockOnChange).toHaveBeenLastCalledWith(2);

    const callCounts = 3;
    expect(mockOnChange).toHaveBeenCalledTimes(callCounts);
  });
});
