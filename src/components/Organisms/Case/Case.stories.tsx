import { StoryObj } from "@storybook/react"
import React from "react"

import { CarIcon } from "@icons/components"

import TabList from "./index"

export default {
  title: "Organisms/Case",
  component: TabList,
  parameters: {
    layout: "centered",
  },
}

type Story = StoryObj<typeof TabList>

export const Default: Story = {
  decorators: [
    Story => (
      <div className="w-full sm:w-[1200px] justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "CASES",
    subTitle: {
      label: "THAT WE HANDLE",
      icon: <CarIcon color="black" width={62} height={25} />,
    },
    tabs: [
      {
        label: "Tab 1",
        icon: <CarIcon width={62} height={25} />,
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://picsum.photos/1500",
        summary:
          "Our Philadelphia auto accident attorney team is prepared to do whatever it takes to help you get fair compensation after an auto accident. Being in a car accident is an unexpected event that can throw your life into disarray especially if you are suffering from an injury due to another person’s mistake. When you’re hurt in a car accident, you need an aggressive legal team that tediously pours over the details until you get the compensation that you need and deserve.",
        cta: [
          {
            variant: "outline",
            href: "https://google.com",
            label: "Learn More",
          },
          {
            variant: "filled",
            href: "https://google.com",
            label: "Free Evaluation",
          },
        ],
      },
      {
        label: "Tab 2",
        icon: <CarIcon width={62} height={25} />,
        subTitle: "Auf dem letzten Hause eines kleinen Dörfchens",
        image: "https://picsum.photos/800",
        summary:
          "Our Philadelphia auto accident attorney team is prepared to do whatever it takes to help you get fair compensation after an auto accident. Being in a car accident is an unexpected event that can throw your life into disarray especially if you are suffering from an injury due to another person’s mistake. When you’re hurt in a car accident, you need an aggressive legal team that tediously pours over the details until you get the compensation that you need and deserve.",
        cta: [
          {
            variant: "outline",
            href: "https://google.com",
            label: "Learn More",
          },
          {
            variant: "filled",
            href: "https://google.com",
            label: "Free Evaluation",
          },
        ],
      },
      {
        label: "Tab 3",
        icon: <CarIcon width={62} height={25} />,
        subTitle: "Auf dem letzten Hause eines kleinen Dörfchens",
        image: "https://picsum.photos/2500",
        summary:
          "Our Philadelphia auto accident attorney team is prepared to do whatever it takes to help you get fair compensation after an auto accident. Being in a car accident is an unexpected event that can throw your life into disarray especially if you are suffering from an injury due to another person’s mistake. When you’re hurt in a car accident, you need an aggressive legal team that tediously pours over the details until you get the compensation that you need and deserve.",
        cta: [
          {
            variant: "outline",
            href: "https://google.com",
            label: "Learn More",
          },
          {
            variant: "filled",
            href: "https://google.com",
            label: "Free Evaluation",
          },
        ],
      },
      {
        label: "Tab 4",
        icon: <CarIcon width={62} height={25} />,
        subTitle: "Auf dem letzten Hause eines kleinen Dörfchens",
        image: "https://picsum.photos/700",
        summary:
          "Integer commodo ante eu tempor tincidunt. Aenean feugiat imperdiet felis, id vehicula magna condimentum at. Morbi mattis lectus tortor, et rhoncus dolor pretium vel. Fusce eget ipsum blandit, luctus tellus vitae, imperdiet nisi. Morbi tincidunt euismod quam non feugiat. Sed ultrices est eget placerat placerat. Nulla dictum nisi ac aliquam consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dignissim tristique tempor. Quisque varius condimentum congue. Donec diam ipsum, suscipit eget aliquet dapibus, iaculis vel leo. Proin non egestas dui. Nam at lobortis magna, eget ultrices mi. Nunc est massa, sagittis sit amet tortor a, ultricies malesuada nibh.",
        cta: [
          {
            variant: "outline",
            href: "https://google.com",
            label: "Learn More",
          },
          {
            variant: "filled",
            href: "https://google.com",
            label: "Free Evaluation",
          },
        ],
      },
      {
        label: "Tab 5",
        icon: <CarIcon width={62} height={25} />,
        subTitle: "Auf dem letzten Hause eines kleinen Dörfchens",
        image: "https://picsum.photos/800",
        summary:
          "Nunc posuere nulla et porta pulvinar. Nullam congue mollis justo, eget viverra odio condimentum in. Ut rutrum ipsum felis, eu consequat dolor efficitur quis. Nulla pharetra dapibus diam, et cursus leo suscipit et. Mauris at fringilla erat, a rhoncus arcu. Pellentesque ullamcorper ipsum ac lacus malesuada, id euismod elit tristique. In blandit vel lectus id varius. Sed hendrerit pharetra fringilla. Nulla consequat, felis at eleifend maximus, felis elit mollis purus, a aliquet sapien sem nec nisi. Nulla luctus id augue sed bibendum. Suspendisse potenti. Suspendisse potenti. Vestibulum libero orci, mattis et metus eu, consectetur rhoncus ante.",
        cta: [
          {
            variant: "outline",
            href: "https://google.com",
            label: "Learn More",
          },
          {
            variant: "filled",
            href: "https://google.com",
            label: "Free Evaluation",
          },
        ],
      },
    ],
  },
}
