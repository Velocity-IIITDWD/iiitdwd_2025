import { get } from '@/sanity/lib/client';
import { GetAllFaculties } from '@/sanity/lib/queries';
import { GetAllFacultiesResult } from '@/sanity/types';

export default async function Home() {
  // example usage
  const data = await get<GetAllFacultiesResult>(GetAllFaculties);
  console.log(data);

  return <div>hi</div>;
}
