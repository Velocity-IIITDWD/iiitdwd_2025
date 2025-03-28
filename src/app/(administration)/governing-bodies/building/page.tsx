import { DynamicProfileSections } from '@/components/committee';
import buildingCommittee from '@/data/building-committee';

export default async function Page() {
  return (
    <main className="px-6 md:px-20">
      <DynamicProfileSections sections={buildingCommittee} />
    </main>
  );
}
