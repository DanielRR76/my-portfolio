type PageHeadingProps = {
  title: string
}

export function PageHeading({ title }: PageHeadingProps) {
  return (
    <div className="mb-7">
      <h1 className="m-0 text-[clamp(1.65rem,2.4vw,2.05rem)] font-semibold tracking-[-0.055em] text-primary">
        {title}
      </h1>
      <span className="mt-4 block h-1 w-10 rounded-full bg-accent" />
    </div>
  )
}
