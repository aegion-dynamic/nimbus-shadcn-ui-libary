import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { 
  Select, 
  SelectTrigger, 
  SelectContent, 
  SelectItem, 
  SelectGroup, 
  SelectValue, 
  SelectLabel 
} from "./select";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
  },
} as Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    children: (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Options</SelectLabel>
            <SelectItem value="primary1">Option 1</SelectItem>
            <SelectItem value="primary2">Option 2</SelectItem>
            <SelectItem value="primary3">Option 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),
  },
};
