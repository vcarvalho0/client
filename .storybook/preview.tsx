import React from 'react'
import GlobalStyle from '../src/styles/global'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <GlobalStyle />
      </>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
