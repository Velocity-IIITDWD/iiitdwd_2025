// src/components/SeatMatrix.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export default function SeatMatrix() {
  return (
    <div className="overflow-hidden rounded-lg max-w-full flex-1 w-full max-h-[550px] mx-auto">
      <h3 className="text-body font-semibold text-main mb-4 flex items-center text-center text-xl">
        CSAB Seat Matrix (Academic Year 2025-26)
      </h3>
      <Table className="w-full">
        <TableHeader className="bg-main">
          <TableRow>
            <TableHead className="text-center">Institute Code</TableHead>
            <TableHead className="text-center">Institute Name</TableHead>
            <TableHead className="text-center">Program Code</TableHead>
            <TableHead className="text-center">Program Name</TableHead>
            <TableHead className="text-center">
              Seat Pool (State Quota)
            </TableHead>
            <TableHead className="text-center">
              Seat Pool (Gender-Neutral)
            </TableHead>
            <TableHead className="text-center">OPEN</TableHead>
            <TableHead className="text-center">OPEN-PwD</TableHead>
            <TableHead className="text-center">GEN-EWS</TableHead>
            <TableHead className="text-center">GEN-EWS-PwD</TableHead>
            <TableHead className="text-center">SC</TableHead>
            <TableHead className="text-center">SC-PwD</TableHead>
            <TableHead className="text-center">ST</TableHead>
            <TableHead className="text-center">ST-PwD</TableHead>
            <TableHead className="text-center">OBC-NCL</TableHead>
            <TableHead className="text-center">OBC-NCL-PwD</TableHead>
            <TableHead className="text-center">
              Total (includes Female Supernumerary)
            </TableHead>
            <TableHead className="text-center">
              Program-Total Seat Capacity
            </TableHead>
            <TableHead className="text-center">Female Supernumerary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* B.Tech in Computer Science and Engineering - Gender Neutral */}
          <TableRow className="bg-white even:bg-secondary/10">
            <TableCell className="text-center" rowSpan={2}>
              316
            </TableCell>
            <TableCell className="text-center" rowSpan={6}>
              Indian Institute of Information Technology (IIITDWD)
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              4110
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              B.Tech. in Computer Science and Engineering (4 Years)
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              All India
            </TableCell>
            <TableCell className="text-center">Gender-Neutral</TableCell>
            <TableCell className="text-center">77</TableCell>
            <TableCell className="text-center">4</TableCell>
            <TableCell className="text-center">19</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">29</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">14</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">51</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">200</TableCell>
            <TableCell className="text-center" rowSpan={2}>
              200
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              40
            </TableCell>
          </TableRow>
          {/* B.Tech in Computer Science and Engineering - Female Only */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center">
              Female-only (supernumerary)
            </TableCell>
            <TableCell className="text-center">16</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">4</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">6</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">11</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">40</TableCell>
          </TableRow>

          {/* B.Tech in Electronics and Communication Engineering - Gender Neutral */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center" rowSpan={2}>
              316
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              4114
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              B.Tech. in Electronics and Communication Engineering (4 Years)
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              All India
            </TableCell>
            <TableCell className="text-center">Gender-Neutral</TableCell>
            <TableCell className="text-center">33</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">8</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">12</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">6</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">22</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">85</TableCell>
            <TableCell className="text-center" rowSpan={2}>
              85
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              17
            </TableCell>
          </TableRow>
          {/* B.Tech in Electronics and Communication Engineering - Female Only */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center">
              Female-only (supernumerary)
            </TableCell>
            <TableCell className="text-center">6</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">5</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">17</TableCell>
          </TableRow>

          {/* B.Tech in Data Science and Artificial Intelligence - Gender Neutral */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center" rowSpan={2}>
              316
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              4181
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              B.Tech. in Data Science and Artificial Intelligence (4 Years)
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              All India
            </TableCell>
            <TableCell className="text-center">Gender-Neutral</TableCell>
            <TableCell className="text-center">46</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">11</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">17</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">9</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">31</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">120</TableCell>
            <TableCell className="text-center" rowSpan={2}>
              120
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              24
            </TableCell>
          </TableRow>
          {/* B.Tech in Data Science and Artificial Intelligence - Female Only */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center">
              Female-only (supernumerary)
            </TableCell>
            <TableCell className="text-center">10</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">4</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">6</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">24</TableCell>
          </TableRow>

          {/* Total row */}
          <TableRow className="bg-main hover:bg-main/90 text-white font-semibold">
            <TableCell className="text-center" colSpan={6}>
              Total
            </TableCell>
            <TableCell className="text-center">188</TableCell>
            <TableCell className="text-center">9</TableCell>
            <TableCell className="text-center">46</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">71</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">35</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">126</TableCell>
            <TableCell className="text-center">6</TableCell>
            <TableCell className="text-center">486</TableCell>
            <TableCell className="text-center">405</TableCell>
            <TableCell className="text-center">81</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="text-sm mt-4">
        <p className="text-center text-gray-500">
          Note: Scroll to the right to view the entire table.
        </p>
      </div>
    </div>
  );
}
