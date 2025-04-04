import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import React from "react";

const meta = {
    title: "Components/RadioGroup",
    component: RadioGroup,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} as Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <RadioGroup>
            <RadioGroupItem value="option1" />
            <RadioGroupItem value="option2" />
            <RadioGroupItem value="option3" />
        </RadioGroup>
    ),
};
