import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import checkicon from "./icons/checkicon";

export default function Pricing() {
  return (
    <Box
      maxW="994px"
      mx={{ base: "20px", md: "20px", lg: "auto" }}
      mt="-150px"
      bg="white"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box bg="#E5E5E5" p="60px" textAlign="center">
          <Text
            fontSize="24px"
            fontWeight={800}
            fontFamily="inter"
            fontStyle="normal"
            textAlign="center"
          >
            Premium PRO
          </Text>
          <Heading
            fontSize="60px"
            fontWeight={800}
            fontFamily="inter"
            fontStyle="normal"
            textAlign="center"
            mt="16px"
          >
            $329
          </Heading>
          <Text
            fontSize="18px"
            fontWeight={500}
            fontFamily="inter"
            fontStyle="normal"
            textAlign="center"
            mt="8px"
          >
            billed just once
          </Text>
          <Button
            colorScheme="purple"
            size="lg"
            w={{ base: "50%", md: "40%", lg: "282px" }}
            mt={{ base: "24px", md: "24px", lg: "0" }}
            border-radius="8px"
          >
            Get Started
          </Button>
        </Box>
        <Box
          p="48px"
          fontSize="18px"
          fontWeight={400}
          fontFamily="Inter"
          fontStyle="normal"
        >
          <Text
            textAlign="left"
            width={{ base: "100%", md: "100%", lg: "500px" }}
            pb="30px"
          >
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb="24px" spacing="20px">
            <Icon as={checkicon} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb="24px" spacing="20px">
            <Icon as={checkicon} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb="24px" spacing="20px">
            <Icon as={checkicon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb="24px" spacing="20px">
            <Icon as={checkicon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
