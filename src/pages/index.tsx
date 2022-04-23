import { Button, Flex, FormLabel, Input, Stack } from "@chakra-ui/react";


export default function Home() {
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
        <Stack spacing='4'>

          <Input 
            name='email' 
            type='email' 
            focusBorderColor="pink.500"
            bgColor='gray.900'
            variant='filled'
            placeholder='E-mail'
            _hover={{
              bgColor:'gray.900'
            }}
            size='lg'
          />


          <Input 
            name='password' 
            type='password' 
            focusBorderColor="pink.500"
            bgColor='gray.900'
            placeholder="Password"
            variant='filled'
            _hover={{
              bgColor:'gray.900'
            }}
            size='lg'
          />
        </Stack>

        <Button type='submit' mt='6' colorScheme='pink' size='lg'> Enter </Button>
      </Flex>
   </Flex>
  )
}
