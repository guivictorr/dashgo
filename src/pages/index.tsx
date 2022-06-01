import { Button, Flex, Stack } from "@chakra-ui/react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "components/Form/Input"

type SignInFormData = {
  email: string;
  password: string;
}

const Home = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().required('Senha obrigatória'),
  })

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(schema)
  });


  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex onSubmit={handleSubmit(handleSignIn)} as="form" w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        <Stack spacing="4">
          <Input type="email" label="E-mail" error={formState.errors.email} {...register('email')} />
          <Input type="password" label="Senha" error={formState.errors.password} {...register('password')} />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
