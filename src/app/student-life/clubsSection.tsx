'use client';
import ClubCard from './clubCard';

export default function ClubsSection() {
  return (
    <div className="bg-secondary text-black py-24">
      <div className="w-[87.5vw] mx-auto max-w-[1680px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ClubCard
            title="Technical Clubs"
            description="Find resources and support to help you navigate your technical journey."
            imgSrc="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
            btnText="Visit Technical Clubs"
            link="/student-life/clubs/tech"
          />
          <ClubCard
            title="Cultural Clubs"
            description="Form friendships, show talent, network, and build leadership skills."
            imgSrc="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
            btnText="Visit Cultural Clubs"
            link="/student-life/clubs/cultual"
          />
          <ClubCard
            title="Non-Tech Clubs"
            description="Show your athletic skills and participate in extracurricular activities."
            imgSrc="https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg"
            btnText="Visit Non Technical Clubs"
            link="/student-life/clubs/non-tech"
          />
        </div>
      </div>
    </div>
  );
}
