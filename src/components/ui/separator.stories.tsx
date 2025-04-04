import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Defines the separator's orientation.",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is only for visual decoration.",
    },
  },
  parameters: {
    layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div style={{ width: "400px", padding: "20px", textAlign: "center",  }}>
      <div>Above the Separator</div>
      <Separator {...args} style={{ width: "100%", height: "2px" }} />
      <div>Below the Separator</div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", height: "200px",  padding: "10px" }}>
      <div style={{ padding: "10px" }}>Left</div>
      <Separator {...args} style={{ height: "100px", width: "2px" }} />
      <div style={{ padding: "10px" }}>Right</div>
    </div>
  ),
};
