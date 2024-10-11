import { FC } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";

type RenderFormFieldProps = {
  control: Control<any>;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  description?: string;
};

export const RenderFormField: FC<RenderFormFieldProps> = ({
  control,
  name,
  type,
  label,
  placeholder,
  description,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);
