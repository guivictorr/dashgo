import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { cloneElement, ReactElement } from "react"

type ActiveLinkProps = {
  children: ReactElement
  exact?: boolean
} & LinkProps

export function ActiveLink({children, exact = false, ...rest}: ActiveLinkProps) {
  let isActive = false
  const { asPath } = useRouter()

  if (exact && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (
    !exact && (asPath.startsWith(String(rest.href)) 
    || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  )
}