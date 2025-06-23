import { DynamicProfileSections } from '@/components/committee';
import { groupAndOrderItems } from '@/lib/utils';
import { get } from '@/sanity/lib/client';
import { GetAllStaff } from '@/sanity/lib/queries';
import { GetAllStaffResult } from '@/sanity/types';

export default async function Page() {
  const response = await get<GetAllStaffResult>(GetAllStaff);
  response.forEach((section) => {
    section.title = 'Staff';
  });

  // custom staff grouping
  const staffGroups = [
    {
      name: 'Leadership',
      items: ['Dr. K. Gopinath', 'Prof. Vasudev Parvati']
    }
  ];

  response.forEach((section) => {
    if (section.profiles) {
      section.profiles = groupAndOrderItems(
        section.profiles,
        staffGroups,
        (profile) => profile.title ?? undefined
      );
    }
  });

  return (
    <main className="w-[87.5vw] max-w-[1680px] mx-auto">
      <DynamicProfileSections sections={response} />
    </main>
  );
}
