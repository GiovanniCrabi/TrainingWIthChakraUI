import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {RiNotification3Line, RiSearch2Line, RiUserAddLine} from 'react-icons/ri'


export function Header() {
  return(
    <Flex 
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      px='6'
      align='center'
      bg='gray.800'
    >
        <Text 
          fontSize='3xl' 
          fontWeight='bold' 
          letterSpacing='tight'
          w='64'
        >
          DashGo
          <Text as='span' color='pink.500'>.</Text>
        </Text>

        <Flex
          as='label'
          flex='1'
          py='2'
          px='8'
          ml='6'
          maxW= {400}
          alignSelf='center'
          color='gray.200'
          position='relative'
          bg='gray.700'
          borderRadius='full'
        >
          <Input 
           color='gray.50'
           variant='unstyled' 
           px='3'
           mr='3'
           placeholder="Platform search "
           _placeholder={{ color: 'gray.400' }}
          />

         <Icon 
            as={RiSearch2Line}
            cursor='pointer'
            fontSize='20'
         />
        </Flex>

        <Flex
          align='center'
          ml='auto'
        >
          <HStack 
            spacing='8' 
            cursor='pointer'
            mx='8'
            pr='8'
            py='1'
            color='gray.300'
            borderRightWidth={1}
            borderColor='gray.700'
            > 
            <Icon as={RiNotification3Line} fontSize='20'/>
            <Icon as={RiUserAddLine} fontSize='20'/>
          </HStack>

          <Flex align='center'>
            <Box mr='2' textAlign='right'>
              <Text>
                Giovanni Crabi
                </Text>
              <Text color='gray.300' fontSize='sm'> 
                giovanni_crabi@hotmail.com
              </Text>
            </Box>

            <Avatar size='md' src="https://github.com/GiovanniCrabi"/>
          </Flex>
        </Flex>
    </Flex>
  );
}