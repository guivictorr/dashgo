import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useSidebarDrawer } from 'context/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationsNav';
import { Profile } from './Profile';
import { Search } from './Search';

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          mr="2"
          variant="unstyled"
          icon={<Icon as={RiMenuLine} fontSize="24" onClick={onOpen} />}
        ></IconButton>
      )}
      <Logo />

      {isWideVersion && <Search />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={!!isWideVersion} />
      </Flex>
    </Flex>
  );
}
