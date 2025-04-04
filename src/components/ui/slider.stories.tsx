import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/ui/slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    className: "w-64",
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  render: (args) => <Slider {...args} />,
};
