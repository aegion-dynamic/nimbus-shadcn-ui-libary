import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta = {
    title: "Components/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        className: { control: "text" },
        disabled: { control: "boolean" },
    },
} as Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};