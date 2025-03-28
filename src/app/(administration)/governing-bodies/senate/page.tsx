import { DynamicProfileSections } from '@/components/committee';
import { get } from '@/sanity/lib/client';
import { GetAllSenate } from '@/sanity/lib/queries';
import { GetAllSenateResult } from '@/sanity/types';

export default async function Page() {
  const data = await get<GetAllSenateResult>(GetAllSenate);

  return (
    <main className="px-6 md:px-20">
      <DynamicProfileSections sections={data} />
    </main>
  );
}
