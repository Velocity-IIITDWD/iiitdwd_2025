import { DynamicProfileSections } from '@/components/committee';
import { get } from '@/sanity/lib/client';
import { GetResearch } from '@/sanity/lib/queries';
import { GetResearchResult } from '@/sanity/types';
import IndustryProjects from './industry-projects';
import SponsoredProjects from './sponsored-projects';

export default async function Page() {
  const response = await get<GetResearchResult>(GetResearch);

  return (
    <main className="w-[87.5vw] max-w-[1680px] mx-auto space-y-10 py-10">
      <SponsoredProjects />
      <IndustryProjects />
      <DynamicProfileSections sections={response} />
    </main>
  );
}
