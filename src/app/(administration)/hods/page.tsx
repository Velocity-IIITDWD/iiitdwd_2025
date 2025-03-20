import { AdminFacultyProfileGrid } from '@/components/admin-faculty-profile';
import hods from '@/data/hods';

export default function Page() {
  return <AdminFacultyProfileGrid list={hods} highlightPosition={false} />;
}
