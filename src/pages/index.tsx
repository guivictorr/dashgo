import { Button, Flex, Stack } from "@chakra-ui/react"
import { Input } from "components/Form/Input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit } = useForm();

  const handleSignIn: SubmitHandler<FieldValues> = (values) => {
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex onSubmit={handleSubmit(handleSignIn)} as="form" w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        <Stack spacing="4">
          <Input type="email" label="E-mail" {...register('email')} />
          <Input type="password" label="Senha" {...register('password')} />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
