import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination/";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  }
)

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <SideBar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'> Users </Heading>

          <Link href='/users/create'>
            <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                cursor='crosshair'
                leftIcon={<Icon as={RiAddLine} fontSize='20'/>}
              >
                New create 

              </Button>
          </Link>
            
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                </Th>
                <Th>"Users</Th>
               { isWideVersion && <Th>Registration data</Th> }
                <Th width='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4','6']}>
                  <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Giovanni</Text>
                    <Text fontSize='sm' color='gray.300'>crabi@gmail.com</Text>
                  </Box>
                </Td>
               { isWideVersion && <Td>24 de Abril de 2022</Td> }
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    cursor='pointer'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                  >
                    { isWideVersion ? 'Edit' : '' }
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={['4', '4','6']}>
                  <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Giovanni</Text>
                    <Text fontSize='sm' color='gray.300'>crabi@gmail.com</Text>
                  </Box>
                </Td>
               { isWideVersion && <Td>24 de Abril de 2022</Td> }
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    cursor='pointer'
                    leftIcon={ <Icon as={RiPencilLine} fontSize='16'/>}
                  >
                    { isWideVersion ? 'Edit' : '' }
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

        <Pagination />

        </Box>
      </Flex>
    </Box>
  )
}