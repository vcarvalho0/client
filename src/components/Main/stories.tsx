import type { Meta, StoryObj } from '@storybook/react'
import Main from '.'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'Description Default'
  }
}

export default meta

type Story = StoryObj<typeof Main>

export const Basic: Story = {
  render: ({ ...args }) => <Main {...args} />
}
Basic.args = {
  title: 'Title Basic',
  description: 'Description Basic'
}

export const Default: Story = {
  render: ({ ...args }) => <Main {...args} />
}
