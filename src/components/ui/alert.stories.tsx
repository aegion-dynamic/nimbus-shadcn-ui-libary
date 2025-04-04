import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertTitle, AlertDescription } from ".//alert"
// import "../app/globals.css";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    variant: "default",
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Primary: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is a primary alert message.</AlertDescription>
      </>
    ),
  },
}
