import { DynamicProfileSections } from '@/components/committee';
import cgc from '@/data/cgc';

export default async function Page() {
  return (
    <main className="px-4 md:px-8 container mx-auto">
      <DynamicProfileSections sections={cgc} />
    </main>
  );
}
