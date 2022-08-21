import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavBarn from './NavBar';

export default {
  title: 'Components/Navigation Bar',
  component: NavBarn,
} as ComponentMeta<typeof NavBarn>

const Template: ComponentStory<typeof NavBarn> = () => <NavBarn />

export const Story = Template.bind({})