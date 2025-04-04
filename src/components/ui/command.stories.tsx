import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "./command";

const meta: Meta = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Command>;

// Primary Story: Basic Command Dialog
export const Primary: Story = {
  render: () => (
    <CommandDialog open>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>Item 1</CommandItem>
          <CommandItem>Item 2</CommandItem>
          <CommandItem>Item 3</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
};
