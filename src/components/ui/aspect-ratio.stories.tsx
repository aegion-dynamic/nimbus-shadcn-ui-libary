import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Primary: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://via.placeholder.com/300"
          alt="Placeholder"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AspectRatio>
    </div>
  ),
};
