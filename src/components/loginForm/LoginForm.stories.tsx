import { ComponentStory, ComponentMeta } from '@storybook/react'
import LoginForm from './LoginForm';

export default {
  title: 'Components/Login Form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />

export const Story = Template.bind({})


