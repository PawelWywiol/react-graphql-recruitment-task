import type { ActionsBarItem } from '@/components/actions-bar/actions-bar.types';
import { CarIcon } from '@/components/icons/car-icon';
import { MapIcon } from '@/components/icons/map-icon';
import { NoteIcon } from '@/components/icons/note-icon';
import { TargetIcon } from '@/components/icons/target-icon';
import { WalletIcon } from '@/components/icons/wallet-icon';

export const actionsBarItems: ActionsBarItem[] = [
  {
    icon: <MapIcon />,
    label: 'Map',
    active: false,
    onClick: () => console.log('Map clicked'),
  },
  {
    icon: <TargetIcon />,
    label: 'Target',
    active: false,
    onClick: () => console.log('Target clicked'),
  },
  {
    icon: <CarIcon />,
    label: 'Car',
    active: false,
    onClick: () => console.log('Car clicked'),
  },
  {
    icon: <WalletIcon />,
    label: 'Wallet',
    active: false,
    onClick: () => console.log('Wallet clicked'),
  },
  {
    icon: <NoteIcon />,
    label: 'Note',
    active: true,
    onClick: () => console.log('Note clicked'),
  },
];
