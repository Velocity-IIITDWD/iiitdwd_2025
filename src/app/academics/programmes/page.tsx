import ProgramCards from '@/components/academics-components/programCards';

export default function ProgrammesPage() {
    return (
      <main className="flex flex-col items-center px-4">
        <div className="flex justify-center w-full my-4 sm:my-8 text-center">
          <h1
            className="relative inline-block px-6 sm:px-8 py-2 sm:py-3 text-white text-xl sm:text-3xl font-bold uppercase tracking-wide"
            style={{
              backgroundColor: '#041E3F',
              clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
            }}
          >
            Academic Programs
          </h1>
        </div>
        {/* Reduce width for mobile */}
        <div className="w-[90%] sm:w-full">
          <ProgramCards />
        </div>
      </main>
    );
  }
  
  