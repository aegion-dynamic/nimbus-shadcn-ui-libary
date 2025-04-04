import { Meta, StoryObj } from "@storybook/react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableRow, 
  TableHead, 
  TableCell, 
  TableCaption 
} from "./table";

const meta: Meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  
};

export default meta;

type Story = StoryObj<typeof Table>;

export const primary: Story = {
  render: () => (
    <Table>
      <TableCaption>Example Table Caption</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>City</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>28</TableCell>
          <TableCell>New York</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>34</TableCell>
          <TableCell>Los Angeles</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total: 2 entries</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
