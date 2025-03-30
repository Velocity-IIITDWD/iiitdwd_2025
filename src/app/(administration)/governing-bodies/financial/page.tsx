import { DynamicProfileSections } from '@/components/committee';
import financeCommittee from '@/data/finance-committee';

export default async function Page() {
  return (
    <main className="px-6 md:px-20">
      <DynamicProfileSections sections={financeCommittee} />
    </main>
  );
}
