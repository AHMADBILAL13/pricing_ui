import { Box , Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function header() {
  return (
    <Box as='section' textAlign={{base:"left", md:'left',lg:"center"}} bg= "#6B46C1" color="#F7FAFC" pt="90px" pb ="198px" px="32px">
      <Heading fontWeight={"800"} fontSize={"48px"} fontFamily="inter" fontStyle="normal" >Simple pricing for your business</Heading>
      <Text fontWeight="500" fontSize="24px" fontFamily="inter" fontStyle="normal" pt="16px" color="#F7FAFC">Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}


