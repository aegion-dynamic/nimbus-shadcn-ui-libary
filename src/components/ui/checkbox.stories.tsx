import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    "aria-label": "Primary checkbox",
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    checked: true,
  },
};
