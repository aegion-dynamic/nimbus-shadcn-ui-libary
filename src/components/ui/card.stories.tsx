import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    className: "w-96",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Green Fuels</CardTitle>
        <CardDescription>
          Sustainable energy solutions for a greener future.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Discover eco-friendly fuels and technologies that reduce carbon
          footprint and promote sustainability.
        </p>
      </CardContent>
      <CardFooter>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md">
          Learn More
        </button>
      </CardFooter>
    </Card>
  ),
};
