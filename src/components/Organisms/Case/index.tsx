import useScreenSize from "@hooks/useScreenSize"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { FC, useState } from "react"

import { TabProps } from "@components/Atoms/Tab"
import TabContent, { TabContentProps } from "@components/Molecules/TabContent"
import TabList from "@components/Molecules/TabList"

export interface Tabs
  extends Pick<TabProps, "label">,
    Pick<
      TabContentProps,
      "label" | "subTitle" | "altText" | "cta" | "image" | "summary"
    > {
  icon: IGatsbyImageData
}

export interface CaseProps {
  tabs: Tabs[]
  title: string
  subTitle: {
    icon: {
      image: IGatsbyImageData
      alt: string
    }
    label?: string
  }
}

const renderOnScreenSize = ["xxs", "xs", "sm", "md"]

const Case: FC<CaseProps> = ({ title, subTitle, tabs }) => {
  const screenSize = useScreenSize()
  const [activeTab, setActiveTab] = useState(0)
  const isSmallScreen = renderOnScreenSize.includes(screenSize)

  const renderTabContent = () => (
    <TabContent
      label={tabs[activeTab].label}
      summary={tabs[activeTab].summary}
      subTitle={tabs[activeTab].subTitle}
      image={tabs[activeTab].image}
      altText={tabs[activeTab].altText}
      cta={tabs[activeTab].cta}
    />
  )

  return (
    <section className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
      <div className="text-center font-bold uppercase mb-14">
        <h2 className="mb-4 text-6xl md:text-8xl 2xl:text-10xl">
          {title ?? ""}
        </h2>
        <div className="flex justify-center items-center gap-5">
          {subTitle.icon && (
            <span className="hidden md:block">
              <GatsbyImage
                image={subTitle.icon.image}
                alt={subTitle.icon.alt}
              />
            </span>
          )}
          <p className="text-xl md:text-2xl 2xl:text-3xl">
            {subTitle.label ?? ""}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="p-0 lg:px-2 lg:py-3 md:col-span-3 lg:col-span-4 bg-solid-slate">
          <TabList
            tabs={tabs.map(tab => ({
              label: tab.label,
              leftIcon: tab.icon,
            }))}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            content={isSmallScreen && renderTabContent()}
          />
        </div>
        {!isSmallScreen && renderTabContent()}
      </div>
    </section>
  )
}

export default Case
