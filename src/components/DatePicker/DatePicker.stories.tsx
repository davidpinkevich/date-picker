import { type Calendar } from "components/Calendar/Calendar";

import { DatePicker } from "./DatePicker";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Calendar> = {
  component: DatePicker,
  title: "Components/DatePicker"
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const FromMonday: Story = {
  args: {
    typeStart: "Mo"
  }
};

export const FromSunday: Story = {
  args: {
    typeStart: "Su"
  }
};

export const WithHolidays: Story = {
  args: {
    withHolidays: true,
    colorHoliday: "apple"
  }
};

export const WithoutHolidays: Story = {
  args: {
    withHolidays: false
  }
};
