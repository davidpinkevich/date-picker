import { Calendar } from "./Calendar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "Components/Calendar"
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
