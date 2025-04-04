import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  args: {
    orientation: "horizontal",
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  render: (args) => (
    <div className="relative w-full max-w-lg">
      <Carousel {...args}>
        <CarouselContent>
          <CarouselItem className="bg-green-500 h-48 flex items-center justify-center text-white">
            Slide 1
          </CarouselItem>
          <CarouselItem className="bg-blue-500 h-48 flex items-center justify-center text-white">
            Slide 2
          </CarouselItem>
          <CarouselItem className="bg-red-500 h-48 flex items-center justify-center text-white">
            Slide 3
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
