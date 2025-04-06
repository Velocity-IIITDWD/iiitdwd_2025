'use client';
import { ClubCard } from '@/components/ui/club-card';

const organizations = [
  {
    name: 'Cricket Club',
    description:
      'Promoting the spirit of cricket through practice, matches, and tournaments.',
    memberCount: 60,
    meetingSchedule: 'Daily, 6:00 AM - 8:00 AM',
    location: 'Cricket Ground',
    logo: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageUrl:
      'https://images.pexels.com/photos/3659993/pexels-photo-3659993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/cricket-club',
    president: 'Rajesh Patel',
    vision:
      'To foster a strong cricketing tradition and achieve excellence in collegiate tournaments.',
    mission:
      'To provide regular training, organize competitive matches, and promote sportsmanship and teamwork among members.',
    socials: {
      instagram: 'cricket_club_insta',
      twitter: 'cricket_club_tweets'
    }
  },
  {
    name: 'Badminton Club',
    description:
      'A fun and competitive environment for badminton enthusiasts of all skill levels.',
    memberCount: 45,
    meetingSchedule: 'Every Mon, Wed, Fri, 7:00 PM - 9:00 PM',
    location: 'Indoor Badminton Courts',
    logo: 'https://images.pexels.com/photos/6203297/pexels-photo-6203297.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageUrl:
      'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/badminton-club',
    president: 'Priya Sharma',
    vision:
      'To be the premier badminton club, fostering skill development and competitive spirit.',
    mission:
      'To organize regular practice sessions, coaching clinics, and tournaments for members to improve their skills and enjoy the sport.',
    socials: {
      instagram: 'badminton_club_ig'
    }
  },
  {
    name: 'Volleyball Club',
    description:
      'Spiking, setting, and serving our way to victory and teamwork.',
    memberCount: 50,
    meetingSchedule: 'Every Tue, Thu, Sat, 6:00 PM - 8:00 PM',
    location: 'Volleyball Court',
    logo: 'https://images.pexels.com/photos/39629/volleyball-ball-sport-game-39629.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageUrl:
      'https://images.pexels.com/photos/12430129/pexels-photo-12430129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/volleyball-club',
    president: 'Vikram Singh',
    vision:
      'To create a competitive and enjoyable volleyball community on campus.',
    mission:
      'To provide a platform for players of all levels to train, compete, and develop their skills in a supportive environment.',
    socials: {
      instagram: 'volleyball_club'
    }
  },
  {
    name: 'Basketball Club',
    description:
      'Dribbling, shooting, and scoring as a team on and off the court.',
    memberCount: 55,
    meetingSchedule: 'Every Tue, Thu, Sat, 8:00 PM - 10:00 PM',
    location: 'Basketball Court',
    logo: 'https://images.pexels.com/photos/1332237/pexels-photo-1332237.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageUrl:
      'https://images.pexels.com/photos/5384434/pexels-photo-5384434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/basketball-club',
    president: 'Anjali Reddy',
    vision:
      'To cultivate a passion for basketball and achieve success in intercollegiate competitions.',
    mission:
      'To provide opportunities for skill development, organize competitive games, and promote teamwork and sportsmanship.',
    socials: {
      instagram: 'basketball_club_ig',
      twitter: 'basketball_club_tweets'
    }
  },
  {
    name: 'Athletics Club',
    description:
      'Running, jumping, and throwing our way to peak physical fitness and personal bests.',
    memberCount: 40,
    meetingSchedule: 'Daily, 5:30 AM - 7:30 AM',
    location: 'Athletics Track',
    logo: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageUrl:
      'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/athletics-club',
    president: 'Arjun Verma',
    vision:
      'To promote physical fitness, encourage competitive athletics, and represent our institution with pride.',
    mission:
      'To offer structured training programs, participate in athletic events, and support members in achieving their personal athletic goals.',
    socials: {
      instagram: 'athletics_club_insta',
      linkedin: 'athletics-club'
    }
  },
  {
    name: 'Counselling Cell',
    description:
      'Providing confidential and supportive counselling services to students.',
    memberCount: 15,
    meetingSchedule: 'Mon-Fri, 9:00 AM - 5:00 PM (Appointment Based)',
    location: 'Counselling Center',
    logo: 'https://images.pexels.com/photos/1181434/pexels-photo-1181434.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageUrl:
      'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/counselling-cell',
    president: 'Dr. Neha Gupta (Lead Counsellor)',
    vision: 'To promote the mental health and well-being of all students.',
    mission:
      'To provide accessible, confidential, and professional counselling services that empower students to overcome challenges and thrive.',
    socials: {
      linkedin: 'university-wellness'
    }
  },
  {
    name: 'Magazine Committee',
    description:
      'Publishing the college magazine, showcasing student writing, art, and photography.',
    memberCount: 25,
    meetingSchedule: 'Weekly Tuesdays, 4:00 PM - 6:00 PM',
    location: 'Student Publications Office',
    logo: 'https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageUrl:
      'https://images.pexels.com/photos/6417923/pexels-photo-6417923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '/organizations/magazine-committee',
    president: 'Sneha Kapoor (Editor-in-Chief)',
    vision:
      'To be the leading voice of the student body, showcasing their talent and perspectives.',
    mission:
      'To produce a high-quality college magazine that reflects the diverse interests and experiences of the student community.',
    socials: {
      instagram: 'magazine_committee_ig',
      twitter: 'magazine_committee'
    }
  }
];

export default function ClubsPage() {
  return (
    <main>
      <div className="w-full min-h-screen py-8">
        <section className="py-4 max-w-[1680px] w-[87.5vw] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-large-title font-bold text-gray-900 mb-4">
              Non Technical Clubs
            </h2>
            <p className="text-title-3 text-gray-600 max-w-2xl mx-auto">
              Discover and join IIIT Dharwad&apos;s diverse community of student
              non-technical organizations. Each group offers unique
              opportunities for leadership, physical fitness, and personal
              growth.
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
