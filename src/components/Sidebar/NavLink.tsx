import Link from 'next/link'
import { ComponentType } from "react";
import { Icon, Text, Link as ChakraLink } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { ActiveLink } from 'components/ActiveLink';

type NavLinkProps = {
  icon: ComponentType<IconContext>;
  title: string;
  href: string;
}

export function NavLink({icon, title, href}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink 
        display="flex" 
        alignItems="center"
      >
        <Icon as={icon} fontSize="20"/>
        <Text 
          ml="4" 
          fontWeight="medium"
        >
          {title}
        </Text>
      </ChakraLink> 
    </ActiveLink>
  )
}