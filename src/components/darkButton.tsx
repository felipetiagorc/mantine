import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export default function DarkButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <ActionIcon
      variant='outline'
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title='Mudar esquema de cores'
    >
      {dark ? <BsSun /> : <BsMoonStars />}
    </ActionIcon>
  );
}
