import { get } from '@/sanity/lib/client';
import { queryFaculty } from '@/sanity/lib/queries';
import { QueryFacultyResult } from '@/sanity/types';
import FacultySearchPage from './faculty';

export default async function FacultyPage() {
  const data = await get<QueryFacultyResult>(queryFaculty);

  data.sort((a, b) =>
    (a?.content?.head?.name || '').localeCompare(b?.content?.head?.name || '')
  );

  return <FacultySearchPage facultyData={data} />;
}
