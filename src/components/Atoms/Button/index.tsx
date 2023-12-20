import React, { FC } from "react"

export interface ButtonProps {
  variant: "filled" | "outline" | "transparent"
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

const variantStyle = {
  filled: "py-2 md:py-3 px-8 sm:px-10 rounded-full bg-red-600 text-white",
  outline:
    "py-2 md:py-3 px-8 sm:px-10 rounded-full border-2 border-white bg-transparent text-white",
  transparent: "p-0 bg-transparent text-white",
}

const Button: FC<ButtonProps> = ({
  variant = "transparent",
  children,
  onClick,
  href,
  className,
}) => {
  const Element = href ? "a" : "button"

  return (
    <Element
      className={`cursor-pointer focus:outline-none transition duration-300 ${variantStyle[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Element>
  )
}

export default Button
