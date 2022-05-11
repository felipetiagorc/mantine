import {
  AppShell,
  Aside,
  Burger,
  Button,
  Footer,
  Header,
  MediaQuery,
  Navbar,
  ScrollArea,
  Text,
  useMantineTheme
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import React, { useState } from 'react';
import DarkButton from './darkButton';

export default function Layout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      fixed
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 200, lg: 200 }}
        >
          {/* Navbar  */}

          <Navbar.Section mt='xs'>
            <Text>TopNav</Text>
          </Navbar.Section>

          <Navbar.Section grow component={ScrollArea} mt='lg' mx='-xs' px='xs'>
            <Button component={NextLink} href='/presos'>
              Presos
            </Button>

            <Button component={NextLink} href='/presos'>
              Advogados
            </Button>
            <Text>MenuItem</Text>
            <Text>MenuItem</Text>
            <Text>MenuItem</Text>
            <Text>MenuItem</Text>
            <Text>MenuItem</Text>
            <Text>MenuItem</Text>
          </Navbar.Section>

          <Navbar.Section>
            <Text>BotomNav</Text>
          </Navbar.Section>

          {/* Navbar  */}
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
          <Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p='md'>
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p='md'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened(o => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>

            <Text>Application header</Text>
            <DarkButton />
          </div>
        </Header>
      }
    >
      {/* conteudo */}

      <Text>Resize app to see responsive navbar in action</Text>

      {/* conteudo */}
    </AppShell>
  );
}
