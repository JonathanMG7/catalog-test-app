import { ComponentStory, ComponentMeta } from '@storybook/react'
import PokemonCard from './PokemonCard';
import { PokemonCardProps } from './PokemonCard.types';

export default {
  title: 'Components/Pokemon Card',
  component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>

const Template: ComponentStory<typeof PokemonCard> = (args: PokemonCardProps) => <PokemonCard {...args} />

export const Story = Template.bind({})

Story.args ={
  name: 'pikachu'
}
