import { Box, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Logo() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/users')
  }
  return(
    <Box  
    w='150px' 
    borderRadius={8}
    _hover={{
      bg:'gray.900'
    }}
    >
    <Link
      onClick={handleClick}
      style={{
        textDecoration:'none'
      }}
      >
      <Text 
        fontSize={['2xl','3xl']}
        fontWeight='bold' 
        letterSpacing='tight'
        w='64'
        marginX='5px'
      >
        Rocket 🚀
      </Text>
    </Link>
  </Box>
  );
}