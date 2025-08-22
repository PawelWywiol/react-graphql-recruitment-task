'use client';

import { mockedActionsBarItems } from '@/__mocks__/actionsBar';
import { mockedPilots } from '@/__mocks__/pilots';
import { ActionsBar } from '@/components/actions-bar/actions-bar';
import { Header } from '@/components/header/header';
import { PilotsList } from '@/components/pilot/pilot-list';

export default function Page() {
  return (
    <>
      <Header title="Otwórz bramę" />
      <section className="container-content py-20">
        <PilotsList pilots={mockedPilots} />
        <ActionsBar items={mockedActionsBarItems} />
      </section>
    </>
  );
}
