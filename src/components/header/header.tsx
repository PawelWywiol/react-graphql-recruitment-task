import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ArrowLeft } from '../icons/arrow-left';
import { HeaderKeys } from '../icons/header-keys';

export const Header = ({
  title,
  backLink = '/',
}: {
  title: string;
  backLink?: string | undefined;
}) => (
  <header
    className={cn(
      'relative w-full',
      'bg-gradient-to-b from-accent-from to-accent-to',
      'rounded-b-2xl',
      'shadow-header',
    )}
  >
    <HeaderKeys className="absolute right-0 top-1/2 transform -translate-y-1/2" />
    <nav className="section-container relative min-h-72 px-4 py-18 flex flex-row gap-6">
      <Link href={backLink}>
        <ArrowLeft />
      </Link>
      <h1>{title}</h1>
    </nav>
  </header>
);
