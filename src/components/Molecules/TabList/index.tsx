import React, { FC, Fragment } from "react"

import Tab, { TabProps } from "@components/Atoms/Tab"
import { MinusIcon, PlusIcon } from "@icons/components"

type TabData = Pick<TabProps, "label" | "leftIcon" | "rightIcon">

interface TabListProps {
  tabs: TabData[]
  activeTab: number
  onTabClick: (index: number) => void
  content: React.ReactNode
}

const TabList: FC<TabListProps> = ({
  tabs,
  activeTab,
  onTabClick,
  content,
}) => {
  return (
    <div className="flex flex-col space-t-2 divide-y divide-white/[.28]">
      {tabs.map((tab, index) => (
        <Fragment key={index}>
          <Tab
            label={tab.label}
            active={activeTab === index}
            onClick={() => onTabClick(index)}
            leftIcon={tab.leftIcon}
            rightIcon={activeTab === index ? <MinusIcon /> : <PlusIcon />}
          />
          {activeTab === index && content}
        </Fragment>
      ))}
    </div>
  )
}

export default TabList
