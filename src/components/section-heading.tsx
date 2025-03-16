export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="border-t-[2px] mb-3 ml-[10px] border-t-primary w-full relative">
      <h1 className="uppercase font-semibold z-[1] before:-z-[1] text-white -top-[2px] w-fit before:-left-[5px] before:h-full before:absolute before:top-0 before:bg-primary before:w-[calc(100%+10px)] px-6 py-2 relative before:skew-x-[-15deg]">
        {title}
      </h1>
    </div>
  );
}
