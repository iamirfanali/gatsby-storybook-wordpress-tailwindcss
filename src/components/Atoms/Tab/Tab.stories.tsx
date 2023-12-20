import { StoryObj } from "@storybook/react"
import React from "react"

import { CarIcon } from "@icons/components"

import Tab from "./index"

export default {
  title: "Atoms/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
}

type Story = StoryObj<typeof Tab>

export const Default: Story = {
  decorators: [
    Story => (
      <div className="flex w-full justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    active: true,
    label: "Car Accident",
    leftIcon: <CarIcon width={62} height={25} />,
  },
}
