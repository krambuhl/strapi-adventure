import classnames from 'classnames'
import css from './Heading.module.css'

export default function Heading ({
  tagName,
  variant = Heading.h1,
  className,
  children,
  ...props
}) {
  const Tag = tagName || variant.tagName
  const classList = classnames(
    css.root,
    variant.className,
    className
  )

  return (
    <Tag className={classList} {...props}>{children}</Tag>
  )
}

// variants
Heading.h1 = { tagName: 'h1', className: css.h1 }
Heading.h2 = { tagName: 'h2', className: css.h2 }
Heading.h3 = { tagName: 'h3', className: css.h3 }
