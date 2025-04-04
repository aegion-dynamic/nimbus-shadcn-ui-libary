import type { Meta, StoryObj } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
} from "./context-menu";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Primary: Story = {
  render: () => (
    <div className="p-10">
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="w-64 h-32 bg-gray-200 flex items-center justify-center cursor-pointer">
            Right-click me
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuItem onSelect={() => alert("Edit selected")}>
            Edit
          </ContextMenuItem>
          <ContextMenuItem onSelect={() => alert("Delete selected")}>
            Delete
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem onSelect={() => alert("View details")}>
            View Details
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};
