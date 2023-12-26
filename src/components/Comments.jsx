import { Avatar, Divider, Flex, Text, Box } from "@chakra-ui/react"
import Actions from "./Actions"
import { BsThreeDots } from "react-icons/bs"

const Comments = () => {
  return (
    <Flex flexDirection="column">
      <Flex gap={3}>
        <Flex>
          <Avatar src="https://bit.ly/dan-abramov" size="sm" name="Dan Abramov" />
        </Flex>
        <Flex flexDirection="column" gap={1}>
          <Text>username</Text>
          <Text color="whiteAlpha.700">I love this post.</Text>
          <Actions />
          <Text color="gray.light" fontSize={14}>40 likes</Text>
        </Flex>
        <Flex gap={3} alignItems="flex-start" justifyContent="flex-end" w="full">
          <Text color="gray.light" fontSize="sm">1d</Text>
          <Box mt={1}><BsThreeDots/></Box>
        </Flex>
      </Flex>
      
      
        
      <Divider w="full" mt={3} />
    </Flex>
  )
}

export default Comments