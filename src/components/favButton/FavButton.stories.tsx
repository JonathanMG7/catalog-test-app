import { ComponentStory, ComponentMeta } from '@storybook/react'
import FavButton from './FavButton';
import { FavButtonProps } from './FavButton.types';

export default {
  title: 'Components/Favorite Button',
  component: FavButton,
} as ComponentMeta<typeof FavButton>

const Template: ComponentStory<typeof FavButton> = (args: FavButtonProps) => <FavButton {...args} />

export const Story = Template.bind({})

Story.args = {
  onClick: (id: string) => console.log(`${id} added/removed to favorites`),
  isFav: false,
  id: '123'
}

