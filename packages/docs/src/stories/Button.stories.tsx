import { Button, ButtonProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar'
  }

} as Meta

export const Primary: StoryObj<ButtonProps> = {

}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  }
}