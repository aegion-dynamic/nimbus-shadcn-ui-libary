import { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./collapsible";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Primary: Story = {
  render: () => (
    <div className="w-96 p-4 border rounded-lg shadow-md">
      <Collapsible>
        <CollapsibleTrigger asChild>
          {/* ✅ Using 'default' to avoid the TypeScript error */}
          <Button variant="default">Toggle Content</Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <p className="text-sm text-gray-700">
            This is the collapsible content. You can place any content here.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};
