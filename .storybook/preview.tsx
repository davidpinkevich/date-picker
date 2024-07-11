import React from "react";
import type { Preview } from "@storybook/react";

import { ThemeContainer } from "../src/components/ThemeContainer/ThemeContainer";
import { ContextContainer } from "../src/components/ContextContainer/ContextContainer";

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
      <ContextContainer>
        <ThemeContainer>
          <Story />
        </ThemeContainer>
      </ContextContainer>
    )
  ]
};

export default preview;
