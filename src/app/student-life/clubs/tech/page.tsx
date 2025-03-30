'use client';
import { ClubCard } from '@/components/ui/club-card';

const organizations = [
  {
    name: 'Velocity',
    imageUrl:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/velocity',
    description:
      'Velocity is dedicated to accelerating innovation and empowering young minds to create futuristic solutions. We focus on robotics, automation, and AI.',
    memberCount: 120,
    meetingSchedule: 'Weekly Fridays, 5:00 PM',
    location: 'Engineering Building - Room 204',
    logo: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'Jane Doe', // Example President's name
    vision: 'To be the leading hub for technological innovation on campus.',
    mission:
      'To provide students with the resources, mentorship, and opportunities to create cutting-edge solutions to real-world problems.',
    socials: {
      instagram: 'velocity_insta',
      linkedin: 'velocity-linkedin',
      twitter: 'velocity_tweets'
    }
  },
  {
    name: 'Return 0',
    imageUrl:
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/return-0',
    description:
      'Return 0 is a coding and competitive programming club that helps students enhance their problem-solving skills through contests and hackathons.',
    memberCount: 200,
    meetingSchedule: 'Weekly Tuesdays, 6:00 PM',
    location: 'CS Department - Lab 301',
    logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'John Smith',
    vision:
      'To become the go-to club for students looking to improve their coding skills and succeed in competitive programming.',
    mission:
      'To organize regular coding contests, workshops, and mentorship programs to help students sharpen their problem-solving abilities.',
    socials: {
      instagram: 'return0_ig',
      linkedin: 'return-0-linkedin'
    }
  },
  {
    name: 'BlocSoc',
    imageUrl:
      'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/blocsoc',
    description:
      'BlocSoc is the ultimate social club for blockchain enthusiasts, where we explore the future of decentralized systems and cryptocurrencies.',
    memberCount: 150,
    meetingSchedule: 'Weekly Wednesdays, 4:00 PM',
    location: 'Block Chain Lab - Room 110',
    logo: 'https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'Alice Johnson',
    vision:
      'To foster a vibrant community of blockchain enthusiasts on campus.',
    mission:
      'To provide a platform for learning, discussion, and exploration of decentralized technologies.',
    socials: {
      twitter: 'blocsoc_tweets'
    }
  },
  {
    name: 'GDSC IIIT Dharwad',
    imageUrl:
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/gdsc-iiit-dharwad',
    description:
      'The Google Developer Student Club (GDSC) at IIIT Dharwad provides an excellent platform for students to learn and collaborate on tech projects.',
    memberCount: 250,
    meetingSchedule: 'Bi-weekly Thursdays, 3:00 PM',
    location: 'IIIT Dharwad Campus - Tech Lab 204',
    logo: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'Bob Williams',
    vision: 'To empower students to become proficient in Google technologies.',
    mission:
      'To provide a collaborative learning environment where students can learn, build, and share their knowledge.',
    socials: {
      instagram: 'gdsc_iiitdharwad',
      linkedin: 'gdsc-iiit-dharwad',
      twitter: 'gdsc_dharwad'
    }
  },
  {
    name: 'E cell',
    imageUrl:
      'https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/e-cell',
    description:
      'E-cell fosters the entrepreneurial spirit among students. We offer mentorship, networking, and funding opportunities for aspiring entrepreneurs.',
    memberCount: 100,
    meetingSchedule: 'Weekly Mondays, 5:30 PM',
    location: 'Business Incubator - Room 101',
    logo: 'https://images.pexels.com/photos/7681096/pexels-photo-7681096.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'Emily Davis',
    vision: 'To be the catalyst for entrepreneurial success among students.',
    mission:
      'To provide resources, mentorship, and networking opportunities to aspiring entrepreneurs.',
    socials: {
      instagram: 'ecell_insta',
      linkedin: 'ecell-linkedin'
    }
  },
  {
    name: 'IEEE SB & CS',
    imageUrl:
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/ieee-sb-cs',
    description:
      'IEEE Student Branch & Computer Science is a tech community where we conduct workshops, seminars, and projects related to electrical engineering and computer science.',
    memberCount: 300,
    meetingSchedule: 'Monthly 1st Saturday, 10:00 AM',
    location: 'IEEE Lab - Room 305',
    logo: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'David Brown',
    vision:
      'To advance technological innovation and excellence among students.',
    mission:
      'To provide resources, workshops, and networking opportunities in electrical engineering and computer science.',
    socials: {
      instagram: 'ieee_sb_cs',
      linkedin: 'ieee-sb-cs-linkedin',
      twitter: 'ieee_sb_cs_tweets'
    }
  },
  {
    name: 'Inquizitive',
    imageUrl:
      'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/inquizitive',
    description:
      'Inquizitive is a quiz club dedicated to fostering knowledge and promoting intellectual curiosity through regular quiz competitions and brain-storming sessions.',
    memberCount: 80,
    meetingSchedule: 'Weekly Sundays, 4:30 PM',
    location: 'Quiz Hall - Room 202',
    logo: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'Sarah Green',
    vision:
      'To foster a culture of intellectual curiosity and knowledge sharing on campus.',
    mission:
      'To provide a platform for students to test their knowledge and engage in friendly competition through regular quiz competitions and brain-storming sessions.',
    socials: {
      instagram: 'inquizitive_insta'
    }
  },
  {
    name: 'IRIS',
    imageUrl:
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/iris',
    description:
      'IRIS is an interdisciplinary research club focused on artificial intelligence, machine learning, and cutting-edge tech innovations.',
    memberCount: 180,
    meetingSchedule: 'Weekly Thursdays, 5:00 PM',
    location: 'Innovation Lab - Room 402',
    logo: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'Michael Lee',
    vision:
      'To drive innovation and research excellence in the field of artificial intelligence.',
    mission:
      'To provide students with the resources, mentorship, and collaborative opportunities to conduct cutting-edge research in AI and related fields.',
    socials: {
      instagram: 'iris_ai',
      linkedin: 'iris-ai-linkedin'
    }
  },
  {
    name: 'DSAI Society',
    imageUrl:
      'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/dsai-society',
    description:
      'The DSAI Society aims to advance the field of data science and AI by organizing workshops, seminars, and data-driven projects.',
    memberCount: 220,
    meetingSchedule: 'Bi-weekly Tuesdays, 5:30 PM',
    location: 'Data Science Lab - Room 103',
    logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'Olivia Chen',
    vision:
      'To be the leading community for data science and AI enthusiasts on campus.',
    mission:
      'To provide a platform for students to learn, collaborate, and innovate in the field of data science and artificial intelligence through workshops, seminars, and data-driven projects.',
    socials: {
      linkedin: 'dsai-society-linkedin',
      twitter: 'dsai_tweets'
    }
  },
  {
    name: 'Quantum Computing Club',
    imageUrl:
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/quantum-computing-club',
    description:
      'The Quantum Computing Club brings together students passionate about exploring the quantum computing revolution. We provide resources and discussions about future computing paradigms.',
    memberCount: 70,
    meetingSchedule: 'Monthly 2nd Wednesday, 6:00 PM',
    location: 'Quantum Computing Lab - Room 506',
    logo: 'https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-60582.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'Kevin Rodriguez',
    vision:
      'To explore the potential of quantum computing and prepare students for the future of computing.',
    mission:
      'To provide resources, discussions, and hands-on opportunities for students to learn about quantum computing and its applications.',
    socials: {
      instagram: 'quantum_club',
      twitter: 'quantum_tweets'
    }
  },
  {
    name: 'Techniosys',
    imageUrl:
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/techniosys',
    description:
      'Techniosys is a tech club focused on the latest trends in software development, app building, and providing hands-on workshops for all levels.',
    memberCount: 120,
    meetingSchedule: 'Weekly Fridays, 7:00 PM',
    location: 'Tech Lab - Room 310',
    logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    president: 'Grace Thompson',
    vision:
      'To empower students with the skills and knowledge to succeed in the ever-evolving field of software development.',
    mission:
      'To provide hands-on workshops, seminars, and collaborative projects to help students learn the latest software development trends and build innovative applications.',
    socials: {
      instagram: 'techniosys_insta',
      linkedin: 'techniosys-linkedin',
      twitter: 'techniosys_tweets'
    }
  }
];

export default function ClubsPage() {
  return (
    <main>
      <div className="w-full min-h-screen md:px-4 lg:px-12 xl:px-16 py-8">
        <section className="py-4 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Clubs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore IIIT Dharwad&apos;s vibrant technical clubs where
              innovation meets passion. From coding competitions and robotics
              projects to blockchain exploration and AI research, these clubs
              offer hands-on experience, mentorship, and a community of
              like-minded tech enthusiasts driving tomorrow&apos;s solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizations.map((org) => (
              <ClubCard key={org.name} {...org} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
