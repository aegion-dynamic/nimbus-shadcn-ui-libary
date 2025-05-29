# Nimbus Shadcn UI Component Library

This is the official UI component library for Nimbus applications, built using Shadcn UI, React, TypeScript, and Vite. It provides a standardized set of base components to ensure consistency across all Nimbus applications.

## Overview

This library serves as the foundation for all frontend development in Nimbus projects. It contains pre-configured, customizable components based on Shadcn UI with Nimbus-specific styling and functionality.

## Installation

Add the library to your Nimbus project:
 
```bash
# Install from npm
npm install nimbus-shadcn
# or
yarn add nimbus-shadcn
# or
pnpm add nimbus-shadcn

# Install from GitHub
npm install github:yourusername/nimbus-shadcn-ui-libary
```

## Usage

### Using Components
Import and use components directly:

```tsx
import { Button, Input, Card } from "nimbus-shadcn";

function MyComponent() {
  return (
    <Card>
      <h2>Login Form</h2>
      <Input placeholder="Username" />
      <Button>Submit</Button>
    </Card>
  );
}
```

### Styling 

The component library automatically injects its styles when imported. All CSS is prefixed with `nimbus-shadcn` to avoid conflicts with other libraries.

### Customizing Components

You can customize the appearance of components by passing className props:

```tsx
<Button className="my-custom-button">
  Custom Button
</Button>
```

## Component Documentation

The library includes the following components:

- Button
- Input
- Card
- Dialog
- Dropdown
- ... and many more

Each component accepts standard React props plus component-specific props for customization.

## Troubleshooting

If you're having trouble finding components after installation, try the following:

1. Make sure you're importing directly from the package root:
   ```tsx
   import { Button } from 'nimbus-shadcn';
   ```

2. Check that the package is correctly installed in your node_modules:
   ```bash
   npm ls nimbus-shadcn
   ```

3. Clear your node_modules cache and reinstall:
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

```tsx
import { Button, Card } from "@nimbus/shadcn-ui"

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

## Creating Custom Components

When building Nimbus applications, you should create wrapper components around these base components to add specific business logic or styling:

1. Create a new component file in your project:

```tsx
// components/CustomButton.tsx
import { Button } from "@nimbus/shadcn-ui"
import type { ButtonProps } from "@nimbus/shadcn-ui"

interface CustomButtonProps extends ButtonProps {
  customProp?: string
}

export function CustomButton({ customProp, ...props }: CustomButtonProps) {
  return (
    <Button 
      className="custom-styles" 
      {...props}
    />
  )
}
```

2. Use your custom component:

```tsx
import { CustomButton } from "./components/CustomButton"

function App() {
  return <CustomButton customProp="value">Click me</CustomButton>
}
```

## Best Practices

1. **Never modify library components directly** - Always create wrapper components
2. **Maintain consistency** - Follow Nimbus design guidelines when extending components
3. **Type safety** - Utilize provided TypeScript types and interfaces
4. **Documentation** - Document any custom components built on top of base components

## Contributing

To contribute to this library:

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm dev`
4. Make your changes
5. Submit a pull request

## Support

For issues and feature requests, please use the internal Nimbus issue tracker.

## License

Internal use only - Nimbus Organization