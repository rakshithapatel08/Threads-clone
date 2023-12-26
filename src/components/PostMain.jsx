import { Flex, Image, Text, Box, Avatar, Divider, Button } from "@chakra-ui/react"
import Actions from "./Actions"
import { BsThreeDots } from "react-icons/bs"
import Comments from "./Comments"


const PostMain = () => {
    return (
        <Flex flexDirection="column" gap={4}>
            <Flex justifyContent="space-between">
                <Flex alignItems="center" gap={1}>
                    <Avatar src="../../public/zuck-avatar.png" pr={2} name="mark Zuckerberg" />
                    <Text>username</Text>
                    <Image src="../../public/verified.png" alt="verifies-img" w={4} h={4} borderRadius="50%"></Image>
                </Flex>
                <Flex gap={3} alignItems="center">
                    <Text color="gray.light" fontSize="sm">1d</Text>
                    <BsThreeDots />
                </Flex>
            </Flex>
            <Text mb={1} color="whiteAlpha.700">lets talk about threads.</Text>
            <Image src="../../public/post1.png" alt="post-img" borderRadius={8}></Image>
            <Actions />
            <Flex gap={2} alignItems="center" mt={1}>
                <Text color="gray.light" fontSize={14}>32 Replies</Text>
                <Box w={1} h={1} borderRadius="50%" bg="gray.light" fontSize={14}></Box>
                <Text color="gray.light" fontSize={14}>40 likes</Text>
            </Flex>
            <Divider mt={4} />
            <Flex justifyContent="space-between" alignItems="center">
                <Flex gap={1}>
                    <Text>👋🏻</Text>
                    <Text color="gray.light">Get the app to like, reply and post.</Text>
                </Flex>
                <Button>Get</Button>
            </Flex>
            <Divider />
            <Comments />
            <Comments />
            <Comments />
        </Flex>
    )
}

export default PostMain