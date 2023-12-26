import { Link } from "react-router-dom"
import { Avatar, Flex, Image, Text, Box } from "@chakra-ui/react"
import Actions from "./Actions"
import { BsThreeDots } from "react-icons/bs"

const UserPost = () => {
    return (
        <Link to="/username/posts/id">
            <Flex mt={4} justifyContent="center" borderBottom="1px solid gray">
                <Flex flexDirection="column" alignItems="center" gap={2} w={40}>
                    <Avatar src="../../public/zuck-avatar.png" name="Mark Zukerberg" />
                    <Box bg="gray.light" w={0.001} h="full"></Box>
                    <Flex flexWrap={"wrap"} justifyContent="center" alignItems="center">
                    <Avatar src="https://bit.ly/dan-abramov" size='xs' />
                    <Avatar src="https://bit.ly/kent-c-dodds" size='xs' />
                    <Avatar src="https://bit.ly/prosper-baba" size='xs'/>
                    
                    </Flex>
                </Flex>
                <Flex flexDirection="column" gap={2}>
                    <Flex justifyContent="space-between">
                        <Flex alignItems="center" gap={1}>
                            <Text>username</Text>
                            <Image src="../../public/verified.png" alt="verifies-img" w={4} h={4} borderRadius="50%"></Image>
                        </Flex>
                        <Flex gap={3} alignItems="center">
                            <Text color="gray.light" fontSize="sm">1d</Text>
                            <BsThreeDots/>
                        </Flex>
                    </Flex>
                    <Text mb={1} color="whiteAlpha.700">lets talk about threads.</Text>
                    <Image src="../../public/post1.png" alt="post-img" borderRadius={8}></Image>
                    <Actions/>
                    <Flex gap={2} alignItems="center" mt={1}>
                        <Text color="gray.light" fontSize={14}>32 Replies</Text>
                        <Box w={1} h={1} borderRadius="50%" bg="gray.light" fontSize={14}></Box>
                        <Text color="gray.light" fontSize={14}>40 likes</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    )
}

export default UserPost