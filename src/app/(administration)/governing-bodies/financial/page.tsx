import { DynamicProfileSections } from '@/components/committee';
import financeCommittee from '@/data/finance-committee';

export default async function Page() {
  return (
    <main className="container px-4 md:px-8 mx-auto">
      <DynamicProfileSections sections={financeCommittee} />
    </main>
  );
}
