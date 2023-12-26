import useScreenSize from "@hooks/useScreenSize"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { FC } from "react"

import Button, { ButtonProps } from "@components/Atoms/Button"
import { TabProps } from "@components/Atoms/Tab"
import { splitParagraph } from "@utils/splitParagraph"

interface CTA extends Pick<ButtonProps, "variant" | "href"> {
  label: string
}

export interface TabContentProps extends Pick<TabProps, "label"> {
  label: string
  summary: string
  subTitle: string
  image: IGatsbyImageData
  altText: string
  cta: CTA[]
}

const renderOnScreenSize = ["xxs", "xs"]

const TabContent: FC<TabContentProps> = ({
  label,
  subTitle,
  summary,
  image,
  altText,
  cta,
}) => {
  const screenSize = useScreenSize()
  const [firstPart, secondPart] = splitParagraph(
    summary,
    35,
    screenSize === "xxs" ? 3.5 : 4
  )
  const isSmallScreen = renderOnScreenSize.includes(screenSize)

  return (
    <div className="col-span-8 bg-solid-zinc pt-9 sm:pt-11 pb-12 sm:pb-14 px-6 sm:px-20 text-center text-white overflow-x-hidden xl:overflow-x-visible">
      <h3 className="mb-5 sm:mb-11 text-3xl-xl md:text-4xl 2xl:text-4xl-xl font-medium">
        {label}
      </h3>
      <p className="mb-11 sm:mb-10 text-xs sm:text-lg 2xl:text-xl font-bold">
        {subTitle}
      </p>
      <div className="flex w-full gap-7 text-left relative">
        <div className="flex flex-col justify-between w-[58%] xs:w-[65%] sm:w-[70%] min-h-full md:min-h-64">
          <p
            className="mb-0 md:mb-6 text-md md:text-base 2xl:text-xl"
            dangerouslySetInnerHTML={{
              __html: !isSmallScreen ? summary : firstPart,
            }}
          />
          <hr className="mt-auto h-1 w-[65%] ml-auto border-t-0 bg-white/[0.22] hidden md:block" />
        </div>
        <div className="w-[55%] xs:w-[40%] md:w-[43%] absolute -right-11 sm:-right-36">
          <GatsbyImage className="rounded-full" image={image} alt={altText} />
        </div>
      </div>
      {isSmallScreen && (
        <div
          className="text-left w-full sm:w-[70%] text-md md:text-base 2xl:text-xl"
          dangerouslySetInnerHTML={{ __html: secondPart }}
        />
      )}
      <div className="flex justify-center mt-10 sm:mt-11 gap-3 text-xs	md:text-base">
        {cta.map((item, index) => (
          <Button key={index} variant={item.variant} href={item.href}>
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default TabContent
