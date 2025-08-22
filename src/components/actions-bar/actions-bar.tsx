import { cn } from '@/lib/utils';

import type { ActionsBarItem } from './actions-bar.types';

import { Button } from '../ui/button';

export const ActionsBar = ({ items }: { items: ActionsBarItem[] }) => (
  <nav className="absolute bottom-0 left-0 right-0">
    <ul className="relative flex flex-row justify-between px-6 container-content">
      {items.map(({ icon, label, active, onClick }) => (
        <li key={label}>
          <Button
            className={cn('[&_svg]:!size-7 py-4 h-auto', !active && 'text-gray-300')}
            onClick={() => onClick?.()}
            aria-label={label}
            variant="ghost"
          >
            {icon}
          </Button>
        </li>
      ))}
    </ul>
  </nav>
);
