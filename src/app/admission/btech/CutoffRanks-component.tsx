import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { cutoffData } from './cutoffData';

export default function CutoffRanks() {
  return (
    <div className="overflow-hidden py-5 rounded-lg max-w-full flex-1 w-full max-h-[550px] mx-auto">
      <h3 className="text-body font-semibold text-main mb-4 flex items-center text-center text-xl">
        JEE CRL CUTOFF RANKS FOR 2024-25
      </h3>

      <div className="mb-2">
        <Table className="w-full border-collapse">
          <TableHeader className="bg-main">
            <TableRow>
              <TableHead className="text-center border">Sl. No.</TableHead>
              <TableHead className="text-center border">Inst Code</TableHead>
              <TableHead className="text-center border">Program Code</TableHead>
              <TableHead className="text-center border">Program Name</TableHead>
              <TableHead className="text-center border">
                General - (OP)
              </TableHead>
              <TableHead className="text-center border">
                General - (CL)
              </TableHead>
              <TableHead className="text-center border">OBC-NCL (OP)</TableHead>
              <TableHead className="text-center border">OBC-NCL (CL)</TableHead>
              <TableHead className="text-center border">SC- (OP)</TableHead>
              <TableHead className="text-center border">SC - (CL)</TableHead>
              <TableHead className="text-center border">ST - (OP)</TableHead>
              <TableHead className="text-center border">ST - (CL)</TableHead>
              <TableHead className="text-center border">Gen-EWS (OP)</TableHead>
              <TableHead className="text-center border">Gen-EWS (CL)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cutoffData.map((cutoff, index) => (
              <TableRow key={index} className="bg-white even:bg-secondary/10">
                <TableCell className="text-center border">
                  {index + 1}
                </TableCell>
                <TableCell className="text-center border">316</TableCell>
                <TableCell className="text-center border">
                  {cutoff.programCode}
                </TableCell>
                <TableCell className="text-center border font-medium">
                  {cutoff.course}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.general.op}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.general.cl}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.obcNcl.op}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.obcNcl.cl}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.sc.op}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.sc.cl}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.st.op}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.st.cl}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.genEws.op}
                </TableCell>
                <TableCell className="text-center border">
                  {cutoff.genEws.cl}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="text-sm">
        <p className="text-center text-gray-500">
          Note: Scroll to the right to view the entire table.
        </p>
      </div>

      <div className="text-sm mt-2 mb-2">
        <p>The above-mentioned ranks are CRL (Common Rank List)</p>
      </div>
    </div>
  );
}
