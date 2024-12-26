import type { Preview } from "@storybook/react";
import { themes, ensure } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: ensure(themes.dark)
    }
  },
};

export default preview;
