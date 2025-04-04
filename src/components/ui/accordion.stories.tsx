import { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";



const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Item 1</AccordionTrigger>
        <AccordionContent>
          This is the content for item 1. It is visible when the item is expanded.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Accordion Item 2</AccordionTrigger>
        <AccordionContent>
          This is the content for item 2. Click to expand or collapse.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
