import {  Button, Flex, Stack } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';

import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    
    <Flex 
    w='100vw' 
    h='100vh' 
    align='center' 
    justify='center'
  >
         <Flex
           as='form'
           w='100%'
           maxW={360}
           bg='gray.800'
           p='8'
           borderRadius={8}
           flexDir='column'
         >
           
           <Stack spacing='6'>
             <Input name='email' type='email' placeholder="E-mail" />
             <Input name='password' type='password' placeholder="Password"/>
      
           </Stack>
           <Button type='submit' mt='6' colorScheme='pink' size='lg'> Enter </Button>
         </Flex>
   </Flex>
   
  )
}
