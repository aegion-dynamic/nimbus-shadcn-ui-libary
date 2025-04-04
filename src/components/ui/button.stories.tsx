import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Primary Button",
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"], 
    },
    asChild: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "default",
    size: "default",
  },
};

export const PrimarySmall: Story = {
  args: {
    children: "Small Button",
    variant: "default",
    size: "sm",
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: "Large Button",
    variant: "default",
    size: "lg",
  },
};

export const PrimaryIcon: Story = {
  args: {
    children: "🔔",
    variant: "default",
    size: "icon",
  },
};
