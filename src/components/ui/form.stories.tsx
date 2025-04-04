import { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./form";

const meta: Meta = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;

const Template = () => {
  const formMethods = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <FormProvider {...formMethods}>
      <form className="space-y-4">
        <Controller
          name="name"
          control={formMethods.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              {/* Removed asChild to avoid the TS error */}
              <FormControl>
                <input
                  {...field}
                  placeholder="Enter your name"
                  className="border p-2 w-full"
                />
              </FormControl>
              <FormDescription>Full name is required.</FormDescription>
              {fieldState.error && (
                <FormMessage>{fieldState.error.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <Controller
          name="email"
          control={formMethods.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              {/* Removed asChild to avoid the TS error */}
              <FormControl>
                <input
                  {...field}
                  placeholder="Enter your email"
                  className="border p-2 w-full"
                />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              {fieldState.error && (
                <FormMessage>{fieldState.error.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
      </form>
    </FormProvider>
  );
};

export const Primary: StoryObj = {
  render: () => <Template />,
};
