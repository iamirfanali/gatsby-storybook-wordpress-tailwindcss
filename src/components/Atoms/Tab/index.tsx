import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { FC } from "react"

export interface TabProps {
  label: string
  active: boolean
  onClick: () => void
  leftIcon?: IGatsbyImageData
  rightIcon?: React.ReactNode
  className?: string
}

const Tab: FC<TabProps> = ({
  label,
  active,
  onClick,
  leftIcon,
  rightIcon,
  className,
}) => (
  <button
    className={`p-8 bg-transparent text-white font-bold uppercase flex items-center justify-between sm:justify-normal hover:bg-zinc-800 hover:bg-opacity-45 
    ${className} ${active ? "bg-zinc-800 bg-opacity-45" : ""} `}
    onClick={onClick}
  >
    {leftIcon && (
      <span className="mr-8">
        <GatsbyImage
          className="w-auto"
          image={leftIcon}
          alt={`${label} Icon`}
        />
      </span>
    )}
    <span>{label}</span>
    {rightIcon && (
      <span
        className={`ml-8 p-2 rounded-full border-2 border-neutral-100 block sm:hidden ${
          active ? "bg-neutral-100 bg-opacity-25" : ""
        }`}
      >
        {rightIcon}
      </span>
    )}
  </button>
)

export default Tab
