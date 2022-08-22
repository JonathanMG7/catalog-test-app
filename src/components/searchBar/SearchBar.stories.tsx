import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchBar from './SearchBar';
import { SearchBarProps } from './SearchBar.types';

export default {
  title: 'Components/Search Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = (args: SearchBarProps) =>
  <div style={{ display: 'flex', maxHeight: '600px', width: '100%', overflow: 'disabled' }}>
    <SearchBar {...args} />
  </div>

export const Story = Template.bind({})

Story.args = {
  onChange: (keyword: string) => console.log(keyword)
}