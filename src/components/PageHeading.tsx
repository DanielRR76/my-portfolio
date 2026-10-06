import './PageHeading.css'

type PageHeadingProps = {
  title: string
}

export function PageHeading({ title }: PageHeadingProps) {
  return (
    <div className="page-heading">
      <h1>{title}</h1>
      <span className="heading-mark" />
    </div>
  )
}
