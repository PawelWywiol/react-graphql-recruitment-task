import type { ReactNode } from 'react';

export interface ActionsBarItem {
  icon: ReactNode;
  label: string;
  active?: boolean | undefined;
  onClick?: (() => void) | undefined;
}
