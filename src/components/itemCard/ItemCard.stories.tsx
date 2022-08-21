import { ComponentStory, ComponentMeta } from '@storybook/react'
import ItemCard from './ItemCard';
import { ItemCardProps } from './ItemCard.types';

export default {
  title: 'Components/Item Card',
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>

const Template: ComponentStory<typeof ItemCard> = (args: ItemCardProps) => <div style={{width: '200px', height: '200px'}}>
  <ItemCard {...args} />
</div>

export const Story = Template.bind({})

Story.args = {
  onClick: (id: string) => console.log(`${id} Item to redirect`),
  name: 'pikachu'
}

