import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@jonas-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: '21 de Outubro - Indisponível',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },

  parameters: {
    layout: 'centered',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
