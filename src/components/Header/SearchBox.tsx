import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export function SearchBox() {
  return (
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
  );
}