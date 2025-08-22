import type { Pilot } from '@/graphql/types/schema';
import { Button } from '../ui/button';

export const PilotView = ({ pilot }: { pilot: Pilot }) => (
  <aside>
    <h2 className="text-2xl mb-20 text-center">{pilot.name}</h2>
    <nav className="relative">
      <ul className="flex flex-col gap-5 my-9">
        {pilot.buttons?.filter(Boolean).map(
          (button) =>
            button && (
              <li key={button.id}>
                <Button className="w-full" variant={'outline'}>
                  <span className="overflow-ellipsis overflow-hidden">
                    {button.name ?? button.label}
                  </span>
                </Button>
              </li>
            ),
        )}
      </ul>
    </nav>
    <p className="text-center">Wybierz bramkę by otworzyć</p>
  </aside>
);
