import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavItem from './NavItem';

export default {
  title: 'Components/Navigation Item',
  component: NavItem,
} as ComponentMeta<typeof NavItem>

const Template: ComponentStory<typeof NavItem> = (args) =>
  <div style={{ display: 'flex', maxHeight: '600px', width: '100%', overflow: 'disabled' }}>
    <NavItem {...args} />
  </div>

export const Story = Template.bind({})

Story.args = {
  icon: (props) => <span className={props.className} >H</span>,
  isActive: false,
  name: 'Home'
}