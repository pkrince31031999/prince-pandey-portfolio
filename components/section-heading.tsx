export function SectionHeading({
  id,
  index,
  title,
  description,
}: {
  id?: string;
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#a9b6ff]">
        <span>{index}</span>
        <span
          className="h-px w-8 bg-[linear-gradient(90deg,#a9b6ff,transparent)]"
          aria-hidden="true"
        />
      </p>
      <h2
        id={id}
        className="mt-3 text-balance text-3xl font-medium tracking-[-0.03em] text-[#f3efe6] sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-[#d5d0c6]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
