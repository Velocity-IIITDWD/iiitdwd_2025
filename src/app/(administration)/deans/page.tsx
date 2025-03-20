import { AdminFacultyProfileGrid } from '@/components/admin-faculty-profile';
import deans from '@/data/deans';

export default function Dean() {
  return <AdminFacultyProfileGrid list={deans} />;
}
