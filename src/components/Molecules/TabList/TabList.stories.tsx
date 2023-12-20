import { StoryObj } from "@storybook/react"
import React from "react"

import { CarIcon } from "@icons/components"

import TabList from "./index"

export default {
  title: "Molecules/TabList",
  component: TabList,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
}

type Story = StoryObj<typeof TabList>

export const Default: Story = {
  decorators: [
    Story => (
      <div className="flex w-full justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    tabs: [
      {
        label: "Tab 1",
        leftIcon: <CarIcon width={62} height={25} />,
      },
      {
        label: "Tab 2",
        leftIcon: <CarIcon width={62} height={25} />,
      },
      {
        label: "Tab 3",
        leftIcon: <CarIcon width={62} height={25} />,
      },
    ],
    activeTab: 1,
  },
}
