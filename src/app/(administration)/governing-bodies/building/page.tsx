import { DynamicProfileSections } from '@/components/committee';
import buildingCommittee from '@/data/building-committee';

export default async function Page() {
  return (
    <main className="px-4 md:px-8 container mx-auto">
      <DynamicProfileSections sections={buildingCommittee} />
    </main>
  );
}
