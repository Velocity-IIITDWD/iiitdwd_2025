'use client';
import {
  bTechAdmissionLinks,
  eligibilityCriteria,
  programsOffered,
  quickLinks
} from './admissionLinkData';
import AdmissionLinks from './AdmissionLinks';
import InstituteContent from './InstituteContent-component';
import QueriesBox from './QueriesBox-component';
import SeatMatrix from './seatMatrix-component';

export default function Page() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-10">
      <div className="relative flex justify-center mb-8 scale-70">
        <div className="bg-[#bb4d00] text-white py-4 px-8 font-bold text-xl inline-block skew-x-[-10deg] origin-top-left transform flex justify-center items-center">
          <span className="skew-x-[10deg] inline-block ">SEAT MATRIX</span>
        </div>
      </div>

      <SeatMatrix />

      <div className="py-8"></div>

      <AdmissionLinks
        heading="B.Tech Admission 2024"
        links={bTechAdmissionLinks}
      />

      <div className="py-8"></div>

      <AdmissionLinks heading="Quick Links" links={quickLinks} />

      <div className="py-8"></div>

      <AdmissionLinks
        heading="Eligibility Criteria"
        links={eligibilityCriteria}
      />

      <div className="py-8"></div>

      <AdmissionLinks heading="Programs Offered" links={programsOffered} />

      <div className="py-8"></div>

      <InstituteContent />
      <QueriesBox />
    </section>
  );
}
