import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { useQuery } from 'react-query';

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination/";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users/')
    const data = await response.json()

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: new Date(user.created_at).toLocaleDateString('pt-br', {
          day: '2-digit',
          month:'long',
          year: 'numeric'
        })
      }
    });
    return users;
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  useEffect(() => {

  }, [])

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
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                New create

              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Error at users's request</Text>
            </Flex>
          ) : (
            <Table colorScheme='whiteAlpha'>
              <Thead>
                <Tr>
                  <Th px='6' color='gray.300' width='8'>
                  </Th>
                  <Th>"Users</Th>
                  {isWideVersion && <Th>Registration data</Th>}
                  <Th width='8'></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(user => {
                  return (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme='pink' />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>{user.name}</Text>
                            <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                          </Box>
                        </Td>
                       {isWideVersion && <Td> {user.created_at} </Td>} 
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          )}

          <Pagination />

        </Box>
      </Flex>
    </Box>
  )
}