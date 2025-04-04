import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "@/components/ui/scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
},
  args: {
    className: "h-60 w-80 border border-gray-200",
  },
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Primary: Story = {
  render: (args) => (
    <ScrollArea {...args}>
      <div className="p-4 space-y-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <p key={index} >
            Item {index + 1}
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
  
};
