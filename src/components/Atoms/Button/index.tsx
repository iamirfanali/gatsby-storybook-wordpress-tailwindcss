import React, { FC } from "react"

export interface ButtonProps {
  variant: "filled" | "outline" | "transparent"
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

const variantStyle = {
  filled:
    "py-2 md:py-3 px-8 sm:px-10 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-200",
  outline:
    "py-2 md:py-3 px-8 sm:px-10 rounded-full border-2 border-white hover:border-red-600 bg-transparent text-white hover:text-red-600 transition-colors duration-200",
  transparent: "p-0 bg-transparent text-white",
}

const Button: FC<ButtonProps> = ({
  variant = "transparent",
  children,
  onClick,
  href,
  className,
}) => {
  const Element = href ? "a" : "button" //@todo: need to add Gatsby Link as well

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
