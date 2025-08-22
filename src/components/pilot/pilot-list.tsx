import { useState } from 'react';

import { PilotView } from './pilot-view';

import type { Pilot } from '@/graphql/types/schema';
import { PilotControllerIcon } from '../icons/pilot-controller';
import { Paginator } from '../paginator/paginator';

export const PilotsList = ({ pilots }: { pilots: Pilot[] }) => {
  const [currentPilot, setCurrentPilot] = useState(0);

  return (
    <section className="relative">
      <PilotControllerIcon className="absolute top-0 left-0" />
      <aside className="relative pr-6 pl-40">
        {pilots.map(
          (pilot, index) => index === currentPilot && <PilotView key={pilot.id} pilot={pilot} />,
        )}
      </aside>
      <Paginator index={currentPilot} total={pilots.length} onChange={setCurrentPilot} />
    </section>
  );
};
