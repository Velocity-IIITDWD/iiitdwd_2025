import { DynamicProfileSections } from '@/components/committee';
import financeCommittee from '@/data/finance-committee';

export default async function Page() {
  return (
    <main className="w-[87.5vw] max-w-[1680px] mx-auto">
      <DynamicProfileSections sections={financeCommittee} />
    </main>
  );
}
