import { StoryObj } from "@storybook/react"
import React from "react"

import TabContent from "./index"

export default {
  title: "Molecules/TabContent",
  component: TabContent,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
}

type Story = StoryObj<typeof TabContent>

export const Default: Story = {
  decorators: [
    Story => (
      <div className="flex w-full justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    label: "CAR ACCIDENTS",
    summary:
      "<p>Our Philadelphia auto accident attorney team is prepared to do whatever it takes to help you get fair compensation after an auto accident. Being in a car accident is an unexpected event that can throw your life into disarray especially if you are suffering from an injury due to another person’s mistake. When you’re hurt in a car accident, you need an aggressive legal team that tediously pours over the details until you get the compensation that you need and deserve.</p>",
    subTitle: "CAR ACCIDENT ATTORNEYS PHILADELPHIA & NEW JERSEY",
    image: undefined,
    altText: "some image",
    cta: [
      {
        href: "/",
        label: "Learn More",
        variant: "outline",
      },
      {
        href: "/",
        label: "Free Evaluation",
        variant: "filled",
      },
    ],
  },
}
