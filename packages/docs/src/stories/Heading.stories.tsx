import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@jonas-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: '2xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },

  argTypes: {
    size: {
      options: ['xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],

      control: {
        type: 'inline-radio',
      },
    },
  },
}
