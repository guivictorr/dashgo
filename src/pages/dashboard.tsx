import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri'

export default function Dashboard() {
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
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span"  ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"  
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input 
          variant="unstyled" 
          color="gray.50" 
          placeholder="Buscar na plataforma" 
          _placeholder={{
            color: "gray.400",
          }}
          px="4"
          mr="4"
        />
        <Icon as={RiSearchLine} fontSize="20"/>
      </Flex>
    </Flex>
  )
}