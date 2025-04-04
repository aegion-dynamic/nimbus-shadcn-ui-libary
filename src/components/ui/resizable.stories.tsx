import { Meta, StoryObj } from "@storybook/react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./resizable";

const meta: Meta = {
  title: "Components/ResizablePanel",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Direction of the resizable panels",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

export const Primary: Story = {
  render: () => (
    <div style={{ height: "300px", width: "100%", border: "1px solid #ddd" }}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={40}>Left Panel</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>Right Panel</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
