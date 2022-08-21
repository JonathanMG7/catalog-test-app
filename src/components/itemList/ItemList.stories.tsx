import { ComponentStory, ComponentMeta } from '@storybook/react'
import ItemList from './ItemList';

export default {
  title: 'Components/Item List',
  component: ItemList,
} as ComponentMeta<typeof ItemList>

const Template: ComponentStory<typeof ItemList> = () =>
  <div style={{display: 'flex', maxHeight: '600px', width: '100%', overflow: 'disabled'}}>
    <ItemList />
  </div>

export const Story = Template.bind({})
