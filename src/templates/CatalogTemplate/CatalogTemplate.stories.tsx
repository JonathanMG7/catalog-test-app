import { ComponentStory, ComponentMeta } from '@storybook/react'
import CatalogTemplate from './CatalogTemplate';

export default {
  title: 'Templates/Catalog',
  component: CatalogTemplate,
} as ComponentMeta<typeof CatalogTemplate>

const Template: ComponentStory<typeof CatalogTemplate> = () =>
  <div style={{ display: 'flex', height: '100vh', width: '100%', overflow: 'disabled' }}>
    <CatalogTemplate />
  </div>

export const Story = Template.bind({})
