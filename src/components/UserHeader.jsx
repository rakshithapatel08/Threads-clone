import { VStack, Flex, Avatar, Box, Text, Link, Menu, MenuButton, Portal, MenuList, MenuItem, useToast } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"

const UserHeader = () => {
    const toast = useToast();

    const copyUrl = ()=>{
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(()=>{
            toast({
                title: 'Profile link copied.',
                description: "You can now view and share this profile.",
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
        })
    }
    return (
        <VStack gap={4} alignItems="start" mt={10}>
            <Flex justifyContent="space-between" width="full">
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">Mark Zuckerberg</Text>
                    <Flex gap={2} alignItems="center">
                        <Text fontSize="sm">Username</Text>
                        <Text fontSize="xs" bg="gray.dark" color="gray.light" p={1} borderRadius="full">threads.net</Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar src="../../public/zuck-avatar.png" name="mark Zuckerberg" size="xl" />
                </Box>
            </Flex>

            <Text>Co-founder and CEO of meta platforms.</Text>

            <Flex justifyContent="space-between" width="full">
                <Flex gap={2} alignItems="center">
                    <Text color="gray.light">3.2K followers</Text>
                    <Box w={1} h={1} borderRadius="50%" bg="gray.light"></Box>
                    <Link color="gray.light">instagram.com</Link>
                </Flex>
                <Flex>
                    <Box className="icon-container">
                        <BsInstagram size={24} cursor="pointer" />
                    </Box>
                    <Box className="icon-container">
                        <Menu>
                            <MenuButton><CgMoreO size={24} cursor="pointer" /></MenuButton>
                            <Portal>
                                <MenuList bg="gray.dark">
                                    <MenuItem bg="gray.dark" onClick={copyUrl}>Copy link</MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>

            <Flex w="full">
                <Flex flex={1} borderBottom="1.5px solid white" justifyContent="center" cursor="pointer" pb={3}>
                    <Text fontWeight="bold">Threads</Text>
                </Flex>
                <Flex flex={1} borderBottom="1px solid gray" justifyContent="center" cursor="pointer" pb={3} color="gray.light">
                    <Text fontWeight="bold">Replies</Text>
                </Flex>
            </Flex>

        </VStack>
    )
}

export default UserHeader