import { StoryObj } from "@storybook/react"

import Button from "./index"

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: "filled",
    children: "Button",
  },
}

export const Link: Story = {
  args: {
    variant: "outline",
    children: "Link Button",
    href: "https://google.com",
  },
}
