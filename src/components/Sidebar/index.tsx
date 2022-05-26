import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box
      as="aside"
      w="64"
      mr="8"
    >
      <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
          <NavLink title="Dashboard" icon={RiDashboardLine}/>
        </NavSection>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Automação
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link 
              display="flex" 
              alignItems="center"
            >
              <Icon as={RiInputMethodLine} fontSize="20"/>
              <Text 
                ml="4" 
                fontWeight="medium"
              >
                Formulários
              </Text>
            </Link>
            <Link 
              display="flex" 
              alignItems="center"
            >
              <Icon as={RiGitMergeLine} fontSize="20"/>
              <Text 
                ml="4" 
                fontWeight="medium"
              >
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}