import { Flex,Image, useColorMode } from "@chakra-ui/react"


const Header = () => {
    const {colorMode, toggleColorMode}= useColorMode();
  return (
    <Flex justifyContent="center" mt={6}>
        <Image 
        src={colorMode==="dark"?"../../public/light-logo.svg" : "../../public/dark-logo.svg"}
        alt="logo"
        w={6} 
        onClick={toggleColorMode}
      />
    </Flex>
  )
}

export default Header