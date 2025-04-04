import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  args: {
    mode: "single",
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    className: "w-full max-w-sm",
  },
};
