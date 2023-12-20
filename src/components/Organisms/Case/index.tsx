import useScreenSize from "@hooks/useScreenSize"
import React, { FC, useState } from "react"

import Button, { ButtonProps } from "@components/Atoms/Button"
import { TabProps } from "@components/Atoms/Tab"
import TabList from "@components/Molecules/TabList"
import { splitParagraph } from "@utils/splitParagraph"

interface CTA extends Pick<ButtonProps, "variant" | "href"> {
  label: string
}

interface Tabs extends Pick<TabProps, "label"> {
  summary: string
  subTitle: string
  image: string
  icon: string | React.ReactNode
  cta: CTA[]
}

export interface CaseProps {
  tabs: Tabs[]
  title: string
  subTitle: {
    icon: string | React.ReactNode
    label: string
  }
}

const Case: FC<CaseProps> = ({ title, subTitle, tabs }) => {
  const screenSize = useScreenSize()
  const [activeTab, setActiveTab] = useState(0)
  const [firstPart, secondPart] = splitParagraph(tabs[activeTab].summary, 30, 6)

  const isSmallScreen = screenSize === "xs" || screenSize === "sm"

  return (
    <section className="container max-w-7xl mx-auto">
      <div className="text-center font-bold uppercase mb-14">
        <h2
          className="mb-4 text-6xl md:text-8xl"
          dangerouslySetInnerHTML={{ __html: title ?? "" }}
        />
        <div className="flex justify-center items-center gap-2">
          {subTitle.icon ?? ""}
          <p>{subTitle.label ?? ""}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="p-0 sm:px-2 sm:py-3 md:col-span-3 lg:col-span-4 bg-solid-slate">
          <TabList
            tabs={tabs.map(tab => ({
              label: tab.label,
              leftIcon: tab.icon,
            }))}
            activeTab={activeTab}
            onTabClick={setActiveTab}
          />
        </div>
        <div className="col-span-8 bg-zinc-800 pt-9 sm:pt-11 pb-12 sm:pb-14 px-6 sm:px-20 text-center text-white overflow-x-hidden md:overflow-x-visible">
          <h3 className="mb-5 sm:mb-11 text-4xl font-medium">
            {tabs[activeTab].label}
          </h3>
          <p className="mb-11 sm:mb-10 text-lg font-bold">
            {tabs[activeTab].subTitle}
          </p>
          <div className="flex w-full gap-7 text-left relative">
            <div className="flex flex-col justify-between w-[58%] sm:w-[70%] min-h-full sm:min-h-64">
              <p className="mb-0 sm:mb-6">
                {!isSmallScreen ? tabs[activeTab].summary : firstPart}
              </p>
              <hr className="mt-auto h-1 w-[65%] ml-auto border-t-0 bg-white/[0.22] hidden sm:block" />
            </div>
            <div className="w-[55%] sm:w-[50%] absolute -right-11 sm:-right-36">
              <img
                className="rounded-full"
                src={tabs[activeTab].image}
                alt="image"
              />
            </div>
          </div>
          {isSmallScreen && <p className="text-left">{secondPart}</p>}
          <div className="flex justify-center mt-10 sm:mt-11 gap-3 text-xs	md:text-base">
            {tabs[activeTab].cta.map((item, index) => (
              <Button key={index} variant={item.variant} href={item.href}>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Case
