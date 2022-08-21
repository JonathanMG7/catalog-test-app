import FavButton from './FavButton';
import { FavButtonProps } from './FavButton.types';

export default {
  title: 'Favorite Button',
  component: FavButton,
};

const Template = (args: FavButtonProps) => <FavButton {...args} />

export const Story = Template.bind({
  onClick: (id: string) => console.log(`${id} added/removed to favorites`),
  isFav: false,
  id: '123'
})

