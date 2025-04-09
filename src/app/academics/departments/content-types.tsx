'use client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BTechCSEProgram } from '@/data/academics/cse-data';
export default function ContentTypes({
  currentDept
}: {
  currentDept: BTechCSEProgram;
}) {
  if (
    !currentDept ||
    !currentDept.disciplineCoreCourses ||
    !currentDept.engineeringCoreCourses ||
    !currentDept.mathsAndStatsCourses ||
    !currentDept.disciplineElectiveCourses
  ) {
    return null;
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="disciplineCore" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4 h-fit gap-2">
          <TabsTrigger value="disciplineCore">Discipline Core</TabsTrigger>
          <TabsTrigger value="disciplineElective">
            Discipline Elective
          </TabsTrigger>
          <TabsTrigger value="engineeringCore">Engineering Core</TabsTrigger>
          <TabsTrigger value="mathsStats">Mathematics & Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="disciplineCore">
          <Card>
            {/* <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800">
                Discipline Core Courses
              </CardTitle>
            </CardHeader> */}
            <CardContent>
              <Table>
                <TableCaption>
                  Core courses required for the discipline
                </TableCaption>
                <TableHeader>
                  <TableRow className="bg-secondary/70 hover:bg-secondary/80 transition-colors">
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead className="w-[150px]">Credits</TableHead>
                    <TableHead className="w-[150px]">Semester</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentDept?.disciplineCoreCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>{course.id}</TableCell>
                      <TableCell className="font-medium">
                        {course.name}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-main/15 text-main"
                        >
                          {course.credits} credits
                        </Badge>
                      </TableCell>
                      <TableCell>Semester {course.semester}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="disciplineElective">
          <Card>
            {/* <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-800">
                Discipline Elective Courses
              </CardTitle>
            </CardHeader> */}
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>
                    Elective courses available for the discipline
                  </TableCaption>
                  <TableHeader>
                    <TableRow className="bg-secondary/70 hover:bg-secondary/80 transition-colors">
                      <TableHead className="w-[50px]">ID</TableHead>
                      <TableHead>Course Name</TableHead>
                      <TableHead className="w-[150px] text-center">
                        Credits
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentDept.disciplineElectiveCourses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>{course.id}</TableCell>
                        <TableCell className="font-medium">
                          {course.name}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-main/15 text-main"
                          >
                            {course.credits} credits
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engineeringCore">
          <Card>
            {/* <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800">
                Engineering Core Courses
              </CardTitle>
            </CardHeader> */}
            <CardContent>
              <Table>
                <TableCaption>
                  Core engineering courses required for the program
                </TableCaption>
                <TableHeader>
                  <TableRow className="bg-secondary/70 hover:bg-secondary/80 transition-colors">
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead className="w-[150px]">Credits</TableHead>
                    <TableHead className="w-[150px]">Semester</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentDept.engineeringCoreCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>{course.id}</TableCell>
                      <TableCell className="font-medium">
                        {course.name}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-main/15 text-main"
                        >
                          {course.credits} credits
                        </Badge>
                      </TableCell>
                      <TableCell>Semester {course.semester}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mathsStats">
          <Card>
            {/* <CardHeader className="bg-amber-50">
              <CardTitle className="text-amber-800">
                Mathematics & Statistics Courses
              </CardTitle>
            </CardHeader> */}
            <CardContent>
              <Table>
                <TableCaption>
                  Mathematics and Statistics courses required for the program
                </TableCaption>
                <TableHeader>
                  <TableRow className="bg-secondary/70 hover:bg-secondary/80 transition-colors">
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead className="w-[150px]">Credits</TableHead>
                    <TableHead className="w-[150px]">Semester</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentDept.mathsAndStatsCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>{course.id}</TableCell>
                      <TableCell className="font-medium">
                        {course.name}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-main/15 text-main"
                        >
                          {course.credits} credits
                        </Badge>
                      </TableCell>
                      <TableCell>Semester {course.semester}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
