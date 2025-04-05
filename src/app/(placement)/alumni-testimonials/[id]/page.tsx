// src/app/(placement)/alumni-testimonials/[id]/page.tsx
import AlumniDetail from '@/app/(placement)/alumni-testimonials/AlumniDetail';
import Data from '@/data/alumni.json';
import { Review } from '@/types/alumni';

export async function generateStaticParams() {
  return Data.map((item: Review) => ({
    id: item._id
  }));
}

// Define the params type as a Promise
type PageParams = Promise<{ id: string }>;

// Make the component async and await the params
export default async function Page(props: { params: PageParams }) {
  const { id } = await props.params;

  const review = Data.find((item: Review) => item._id === id) || null;

  if (!review) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <p className="text-red-500">Review not found</p>
      </div>
    );
  }

  return <AlumniDetail review={review} />;
}
