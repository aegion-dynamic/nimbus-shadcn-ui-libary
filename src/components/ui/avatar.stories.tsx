import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://via.placeholder.com/150" alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage src="" alt="No Image" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
    </div>
  ),
};
