import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";

const meta: Meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  render: () => <Toggle>Toggle Me</Toggle>,
};
