'use client';
import { FC } from 'react';
import ContentBox from './ContentBox-component';

const InstituteContent: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <ContentBox title="IIIT Dharwad">
        <p>
          IIIT Dharwad is an Institute of National Importance by an act of
          Parliament (23 of 2017) set up in PPP mode between the Ministry of
          Education, Government of India, Government of Karnataka, and KEONICS.
          The Institute's Former Chairperson Smt. Sudha Murty, Board, and Senate
          constitute highly eminent leaders from administration, academia, and
          industry. They are instrumental in steering the institute in the right
          direction. IIIT Dharwad is a self-sustaining PPP Institute where all
          running expenses including salaries are met by the tuition and other
          fees paid by students.
        </p>
      </ContentBox>

      <ContentBox title="Faculty">
        <p>
          Faculty at IIIT Dharwad are highly qualified with PhDs and Postdocs
          from institutes of repute in India and abroad and have the right blend
          of teaching, research, and industrial experience. With energy and
          intent, they are working to set high standards in both
          teaching/learning and R&D.
        </p>
      </ContentBox>

      <ContentBox title="Research and Innovation">
        <p>
          IIIT Dharwad is innovating in all its aspects: teaching, curriculum,
          campus design and R&D. Faculty at IIIT-Dharwad have a wide range of
          research expertise and experience covering many areas of Information
          Technology including: Data analytics, machine learning, and social
          network analysis, Computer networks and security, Knowledge
          management, information retrieval, ontology and semantic web
          technologies, Digital signal processing and speech technologies,
          Embedded systems, sensors, MEMS, nano technology and VLSI, Robotics,
          unmanned vehicles, control and communication technologies, Power
          electronics and alternative energy systems, Quantum physics, Social
          sciences, including women studies and communication, Algorithms,
          Computational Geometry, Blockchain Technology, Cloud Computing,
          Computer Design, Cyber Security, Big Data Analytics, Computer Vision,
          IoT & Automation.
        </p>
      </ContentBox>

      <ContentBox title="Curriculum at IIIT Dharwad">
        <p>
          Teaching-Learning: Being a technical institute of national importance,
          a special emphasis is given to practice-based teaching and learning
          process. The curriculum at IIIT Dharwad is evolving and dynamic to
          ensure that the courses taught are current and relevant. The Institute
          has not hesitated to break out of outdated conventions and has
          introduced an IT-focused curriculum from the first semester (e.g., no
          chemistry) with elective subjects offered in areas such as data
          science, AI, machine learning, IoT, cloud computing and Blockchain to
          name a few. Ample opportunities are provided to learn these
          cutting-edge areas practically through mini and major projects and
          events like hackathons.
        </p>
      </ContentBox>
    </div>
  );
};

export default InstituteContent;
