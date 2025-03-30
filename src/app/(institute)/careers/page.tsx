// @ts-nocheck
import CareersPage from '@/app/(institute)/careers/careers-page';
import { get } from '@/sanity/lib/client';
import { queryJobs } from '@/sanity/lib/queries';
import { QueryJobsResult } from '@/sanity/types';

export default async function Page() {
  const data = await get<QueryJobsResult>(queryJobs);

  return <CareersPage Fulldata={data} />;
}
