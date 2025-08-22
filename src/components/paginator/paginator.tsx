import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

export const Paginator = ({
  index,
  total,
  onChange,
}: {
  index: number;
  total: number;
  onChange: (index: number) => void;
}) => {
  return (
    <div className="flex items-center justify-center gap-3 my-14">
      {Array.from({ length: total }).map((_, i) => (
        <Button
          key={`paginator-button-${+i}`}
          variant="ghost"
          className="h-auto w-auto p-3 rounded-full"
          onClick={() => onChange(i)}
        >
          <span
            key={`paginator-dot-${+i}`}
            className={cn(
              'h-5 w-5 rounded-full transition-all shadow-dot',
              index === i && 'bg-primary shadow-dot-selected',
            )}
          />
        </Button>
      ))}
    </div>
  );
};
