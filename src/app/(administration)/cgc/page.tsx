import { DynamicProfileSections } from '@/components/committee';
import cgc from '@/data/cgc';

export default async function Page() {
  return (
    <main className="container px-4 md:px-8 mx-auto">
      <DynamicProfileSections sections={cgc} />
    </main>
  );
}
