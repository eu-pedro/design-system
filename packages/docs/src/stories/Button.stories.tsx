import { Button } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default { 
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {
  args: {
    children: 'Enviar'
  }
}

export const Secondary: StoryObj = {}