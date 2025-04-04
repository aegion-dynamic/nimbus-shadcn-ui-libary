import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip";
import { Button } from "@/components/ui/button";

const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} as Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button>Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>Tooltip text appears here</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};
