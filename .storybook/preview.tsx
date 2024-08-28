import React from "react";
import type { Preview } from "@storybook/react";

import { ThemeContainer } from "../src/components/ThemeContainer/ThemeContainer";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <ThemeContainer>
        <Story />
      </ThemeContainer>
    )
  ]
};

export default preview;
