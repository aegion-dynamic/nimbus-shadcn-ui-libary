import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import React from "react";
import { Button } from "@/components/ui/button";

const meta = {
    title: "Components/Popover",
    component: Popover,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} as Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
                <p>This is a popover content.</p>
            </PopoverContent>
        </Popover>
    ),
};
