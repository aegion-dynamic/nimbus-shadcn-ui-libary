import { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./toaster";
import { toast } from "sonner";

const meta: Meta = {
  title: "Components/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Primary: Story = {
  render: (args) => (
    <>
      <Toaster {...args} />
      <button
        onClick={() =>
          toast("This is a primary toast message!", {
            action: {
              label: "Undo",
              onClick: () => alert("Undo clicked!"),
            },
            cancel: {
              label: "Dismiss",
              onClick: () => console.log("Toast dismissed!"), // Required `onClick`
            },
          })
        }
      >
        Show Toast 
      </button>
    </>
  ),
};
