import { DynamicProfileSections } from '@/components/committee';
import { get } from '@/sanity/lib/client';
import { GetAllStaff } from '@/sanity/lib/queries';
import { GetAllStaffResult } from '@/sanity/types';

export default async function Page() {
  const response = await get<GetAllStaffResult>(GetAllStaff);
  response.forEach((section) => {
    section.title = 'Staff';
  });
  return (
    <main className="w-[87.5vw] max-w-[1680px] mx-auto">
      <DynamicProfileSections sections={response} />
    </main>
  );
}
