import React from 'react'
import {Box, HStack, Icon, Text,Flex } from '@chakra-ui/react'
import icon1 from './icons/icon1'
import icon2 from './icons/icon2'
import icon3 from './icons/icon3'
export default function Features() {
  return (
    <Box maxW="906px" m="auto" pt="60px" pb="32px" textAlign="center" px = "50px">
        <Flex maxW={"600px"} m="auto" direction={{base:"column",md:"column",lg:"row"}} >
        <HStack fontSize="14px" fontWeight={700} fontFamily = "Inter" fontStyle="normal" textAlign={'left'} spacing="20px" mb="20px">
            <Icon as={icon1} / >
                <Text  >30 days money back Guarantee</Text>
        </HStack >
        <HStack fontSize="14px" fontWeight={700} fontFamily = "Inter" fontStyle="normal" textAlign={'left'} spacing="20px" mb="20px">
            <Icon as={icon2} / >
                <Text >No setup fees 100% hassle-free</Text>
        </HStack >
        <HStack fontSize="14px" fontWeight={700} fontFamily = "Inter" fontStyle="normal" textAlign={'left'} spacing="20px" mb="20px">
            <Icon as={icon3} / >
                <Text >No monthly subscription Pay once and for all</Text>
        </HStack>
        
        </Flex>
    </Box>
  )
}
