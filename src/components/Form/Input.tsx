import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps  } from "@chakra-ui/react";

type InputProps = {
  label?: string;
  name: string;
} & ChakraInputProps;

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput 
        name={name} 
        id={name} 
        focusBorderColor="pink.500" 
        bgColor="gray.900" 
        variant="filled" 
        _hover={{
          bgColor: 'gray.900'
        }} 
        size="lg" 
        {...rest}
      />
    </FormControl>
  )
}