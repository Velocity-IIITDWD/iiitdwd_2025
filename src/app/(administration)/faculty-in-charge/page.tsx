import { AdminFacultyProfileGrid } from '@/components/admin-faculty-profile';
import fic from '@/data/fic';

export default function Dean() {
  return <AdminFacultyProfileGrid list={fic} />;
}
