import { Icon, Text, Link } from "@chakra-ui/react";
import { ComponentType } from "react";
import { IconContext } from "react-icons";

type NavLinkProps = {
icon: ComponentType<IconContext>;
  title: string;
}

export function NavLink({icon, title}: NavLinkProps) {
  return (
    <Link 
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
    </Link>
  )
}