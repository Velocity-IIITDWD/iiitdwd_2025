// /academics/faculty/page.tsx
import { get } from '@/sanity/lib/client';
import { queryFaculty } from '@/sanity/lib/queries';
import { QueryFacultyResult } from '@/sanity/types';
import { Suspense } from 'react';
import FacultySearchPage from './faculty';

export default async function FacultyPage() {
  const data = await get<QueryFacultyResult>(queryFaculty);
  data.sort((a, b) =>
    (a?.content?.head?.name || '').localeCompare(b?.content?.head?.name || '')
  );

  return (
    <Suspense fallback={<div>Loading faculty information...</div>}>
      <FacultySearchPage facultyData={data} />
    </Suspense>
  );
}
