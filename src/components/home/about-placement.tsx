import BarGraph from '../BarGraph';
import SectionHeading from '../section-heading';

export default function AboutPlacements() {
  const barGraphData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Average CTC',
        data: [6, 7, 7.3, 8, 11.52, 9.54],
        backgroundColor: [
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA'
        ],
        borderColor: [
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA'
        ],
        borderWidth: 1
      },
      {
        label: 'Highest CTC',
        data: [10, 11, 25, 25, 35, 46],
        backgroundColor: [
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)'
        ],
        borderColor: [
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <section className="grid grid-cols-1 gap-16 md:grid-cols-2">
      <div className="">
        <SectionHeading title="Why IIIT Dharwad" />

        <ul className="space-y-3 list-disc pl-10 text-justify">
          <li>
            IIIT Dharwad is an Institute of National Importance set up in 2015
            in Public-Private-Partnership mode between the Ministry of
            Education, Government of India, Government of Karnataka and industry
            partner Keonics under an Act of Parliament (23 of 2017). The primary
            objective of setting up IIIT-Dharwad is to address the skill gap in
            high-end information technology and thereby enable India to retain
            its global leadership role in IT and allied areas.
          </li>
          <li>
            Towards this end, IIIT-Dharwad offers BTech degree programmes in
            Computer Science and Engineering, Electronics and Communication
            Engineering, and Data Science and Artificial Intelligence. As an
            Institute of National Importance, IIIT-Dharwad focuses on applying
            IT to solve problems of social relevance to India - the kind of
            solutions that do not usually result from the commercial forces of
            market dynamics or the priorities of the Western world outside of
            India.
          </li>
          <li>
            At the same time, IIIT-Dharwad also adopts a semi-modern theme in
            its campus design and approach to solving IT problems. The logo of
            IIIT-Dharwad also embraces a semi-modern theme and brings out an
            effective mental image of information technology. It is simple,
            elegant, catchy, stylish and colourful yet stately. It enables
            interpretation with ease in terms of the Vision and Mission
            Statements of the Institute, the various programmes offered by the
            Institute and the different areas of IT namely computer science,
            electronics and communication engineering, software, artificial
            intelligence, computer and social networks, robotics and
            cyber-physical systems, data sciences, and the like.
          </li>
          <li>
            As a young institute, IIIT Dharwad has a unique opportunity to make
            a difference not only to the Indian IT industry and the academic
            research community, but also to the people of the entire region of
            North Karnataka. The twin cities of Hubballi and Dharwad are already
            a recognized center for educational institutes of repute including
            engineering, medical, law and other colleges, universities and an
            Indian Institute of Technology.
          </li>
          <li>
            With this environment and rapidly improving connectivity to the IT
            capital Bengaluru, IIIT Dharwad is strategically positioned to
            develop into one of the best institutes of national importance.
          </li>
        </ul>
      </div>

      <div className="">
        <SectionHeading title="Placements" />

        <div className="text-[clamp(0.8rem,5vw,1.3rem)] text-[#013365] font-medium my-4">
          Goals
        </div>
        <ul className="space-y-2 list-disc pl-10 text-justify">
          <li>To organize placement drives at IIIT Dharwad</li>
          <li>
            To provide training and assistance to students for better placement
            and internship opportunities
          </li>
          <li>To hone soft skills and interview techniques</li>
          <li>
            To organize workshops and invited talks to make students industry
            ready
          </li>
          <li>To assist students with their plans for higher studies</li>
          <li>
            To provide information about entrance examinations and other
            opportunities for higher studies
          </li>
        </ul>

        <div className="text-[clamp(0.8rem,5vw,1.3rem)] text-[#013365] font-medium my-4">
          Offered Placement CTC
          <div className=" bar">
            <BarGraph
              labels={barGraphData.labels}
              datasets={barGraphData.datasets}
            />
          </div>
        </div>

        <SectionHeading title="MOU's" />

        <div>
          IIIT Dharwad has signed MOU with various organizations for incubation
          centers, T&P activities, Coding Clubs and Research Collaborations.
        </div>
      </div>
    </section>
  );
}
