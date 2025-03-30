'use client';
import ClubCard from './clubCard';

export default function ClubsSection() {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ClubCard
            title="Technical Clubs"
            description="Find resources and support to help you navigate your technical journey."
            imgSrc="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
            btnText="Visit Technical Clubs"
          />
          <ClubCard
            title="Cultural Clubs"
            description="Form friendships, show talent, network, and build leadership skills."
            imgSrc="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
            btnText="Visit Cultural Clubs"
          />
          <ClubCard
            title="Non-Tech Clubs"
            description="Show your athletic skills and participate in extracurricular activities."
            imgSrc="https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg"
            btnText="Visit Non Technical Clubs"
          />
        </div>
      </div>
    </div>
  );
}
