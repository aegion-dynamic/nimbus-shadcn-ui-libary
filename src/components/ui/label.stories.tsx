import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Label Text",
    className: "text-gray-800 dark:text-gray-200",
    htmlFor: "input-id",
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  render: (args) => <Label {...args} />,
};