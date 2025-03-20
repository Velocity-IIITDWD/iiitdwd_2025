import { DynamicProfileSections } from '@/components/committee';
import { get } from '@/sanity/lib/client';
import { GetBoard } from '@/sanity/lib/queries';
import { GetBoardResult } from '@/sanity/types';

export default async function Page() {
  const data = await get<GetBoardResult>(GetBoard);

  return (
    <main className="p-6 md:px-20">
      <DynamicProfileSections sections={data} />
    </main>
  );
}
