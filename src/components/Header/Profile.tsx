import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }:ProfileProps) {
  return(
    <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Giovanni Crabi</Text>
        <Text 
          color="gray.300"
          fontSize="small"
        >
          crabigiovanni@gmail.com
        </Text>
      </Box>
    )}

    <Avatar mx={['2',"6","8"]} size="md" name="Giovanni Crabi" src="https://avatars.githubusercontent.com/u/81527237?s=40&v=4"/>
  </Flex>
  )
}