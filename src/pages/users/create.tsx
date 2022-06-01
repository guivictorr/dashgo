import { Box, Button, Divider, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "components/Form/Input";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import Link from "next/link";

type CreateUserFormData = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
}

export default function CreateUser() {
  const schema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().required('Senha obrigatória').min(6, 'Senha deve ter no mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Senhas não conferem'),
  })

  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(schema)
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = (values) => {
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar/>

        <Box 
          onSubmit={handleSubmit(handleCreateUser)} 
          as="form" 
          flex="1" 
          borderRadius={8} 
          bg="gray.800" 
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid 
              minChildWidth="240px" 
              spacing={["6", "8"]}
              w="100%"
            >
              <Input error={formState.errors.name} label="Nome Completo" {...register('name')} />
              <Input error={formState.errors.email} label="E-mail" {...register('email')}/>
            </SimpleGrid>
            <SimpleGrid 
              minChildWidth="240px" 
              spacing={["6", "8"]}
              w="100%"
            >
              <Input 
                error={formState.errors.password} 
                type="password" 
                label="Senha" 
                {...register('password')}
              />
              <Input 
                error={formState.errors.password_confirmation}
                label="Confirmação da senha" 
                type="password" 
                {...register('password_confirmation')} 
              />
            </SimpleGrid>
          </VStack>

          <Flex
            mt="8"
            justify="flex-end"
            gap="4"
          >
            <Link href="/users" passHref>
              <Button as="a" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button colorScheme="pink" type="submit">
              Salvar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}