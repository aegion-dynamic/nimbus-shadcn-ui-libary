import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./navigation-menu";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};

export default meta;

export const Primary: StoryObj<typeof NavigationMenu> = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Submenu 1</NavigationMenuLink>
            <NavigationMenuLink href="#">Submenu 2</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Submenu A</NavigationMenuLink>
            <NavigationMenuLink href="#">Submenu B</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
