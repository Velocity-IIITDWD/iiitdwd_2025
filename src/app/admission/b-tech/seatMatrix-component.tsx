// src/components/SeatMatrix.tsx
export default function SeatMatrix() {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg max-w-[100%] max-h-[550px] mx-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-500 text-white">
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              Institute Code
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              Institute Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              Program Code
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              Program Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              Seat Pool (State Quota)
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              Seat Pool (Gender-Neutral)
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              OPEN
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              OPEN-PwD
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              GEN-EWS
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              GEN-EWS-PwD
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              SC
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              SC-PwD
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              ST
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              ST-PwD
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              OBC-NCL
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              OBC-NCL-PwD
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              Total (includes Female Supernumerary)
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              Program-Total Seat Capacity
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              Female Supernumerary
            </th>
          </tr>
        </thead>
        <tbody>
          {/* B.Tech in Computer Science and Engineering - Gender Neutral */}
          <tr className="bg-white even:bg-gray-50">
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              316
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={6}
            >
              Indian Institute of Information Technology (IIITDWD)
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              4110
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              B.Tech. in Computer Science and Engineering (4 Years)
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              All India
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              Gender-Neutral
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              62
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              4
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              16
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              24
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              2
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              12
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              42
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              2
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              165
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              198
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              33
            </td>
          </tr>
          {/* B.Tech in Computer Science and Engineering - Female Only */}
          <tr className="bg-white even:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              Female-only (supernumerary)
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              14
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              3
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              5
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              2
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              9
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              33
            </td>
          </tr>

          {/* B.Tech in Electronics and Communication Engineering - Gender Neutral */}
          <tr className="bg-white even:bg-gray-50">
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              316
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              4114
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              B.Tech. in Electronics and Communication Engineering (4 Years)
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              All India
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              Gender-Neutral
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              32
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              2
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              8
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              12
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              6
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              22
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              85
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              102
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              17
            </td>
          </tr>
          {/* B.Tech in Electronics and Communication Engineering - Female Only */}
          <tr className="bg-white even:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              Female-only (supernumerary)
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              6
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              2
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              3
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              5
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              17
            </td>
          </tr>

          {/* B.Tech in Data Science and Artificial Intelligence - Gender Neutral */}
          <tr className="bg-white even:bg-gray-50">
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              316
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              4181
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              B.Tech. in Data Science and Artificial Intelligence (4 Years)
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              All India
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              Gender-Neutral
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              32
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              2
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              8
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              12
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              6
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              22
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              85
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              102
            </td>
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200"
              rowSpan={2}
            >
              17
            </td>
          </tr>
          {/* B.Tech in Data Science and Artificial Intelligence - Female Only */}
          <tr className="bg-white even:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              Female-only (supernumerary)
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              6
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              2
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              3
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              5
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              0
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-200">
              17
            </td>
          </tr>

          {/* Total row */}
          <tr className="bg-slate-500 text-white font-semibold">
            <td
              className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600"
              colSpan={6}
            >
              Total
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              152
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              8
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              39
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              2
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              59
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              4
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              28
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              1
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              105
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              4
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              402
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              402
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hover:bg-slate-600">
              67
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
