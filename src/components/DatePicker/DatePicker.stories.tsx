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
    typeStart: "Mo",
    min: 2015,
    max: 2041,
    withHolidays: false
  }
};

export const FromSunday: Story = {
  args: {
    typeStart: "Su",
    min: 2010,
    max: 2030,
    withHolidays: true,
    colorHoliday: "apple"
  }
};
