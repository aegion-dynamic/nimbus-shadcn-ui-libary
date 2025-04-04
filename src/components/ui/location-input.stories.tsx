import type { Meta, StoryObj } from "@storybook/react";
import LocationSelector from "./location-input";

// Define types for country and state
type Country = { id: number; name: string };
type State = { id: number; name: string };

const meta = {
  title: "Components/Location_Selector",
  component: LocationSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta<typeof LocationSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    onCountryChange: (country: Country) => console.log("Selected country:", country),
    onStateChange: (state: State) => console.log("Selected state:", state),
  },
};
