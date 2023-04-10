import { Meta, StoryObj } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Main from '.'

type Story = StoryObj<typeof Element>

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = {
  render: () => <Main />
}
