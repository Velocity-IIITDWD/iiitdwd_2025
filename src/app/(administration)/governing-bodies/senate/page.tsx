import { DynamicProfileSections } from '@/components/committee';
import { get } from '@/sanity/lib/client';
import { GetAllSenate } from '@/sanity/lib/queries';
import { GetAllSenateResult } from '@/sanity/types';

export default async function Page() {
  const data = await get<GetAllSenateResult>(GetAllSenate);

  return (
    <main className="w-[87.5vw] max-w-[1680px] mx-auto">
      <DynamicProfileSections sections={data} />
    </main>
  );
}
