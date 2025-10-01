import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  useToast,
  Flex,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2htum06", // Your EmailJS Service ID
        "template_wll8y4b", // Your EmailJS Template ID
        form.current,
        "bxRbB6k6kj0VqydAe" // Your EmailJS Public Key
      )
      .then(
        () => {
          toast({
            title: "Message sent 🎉",
            description: "I’ll get back to you as soon as possible.",
            status: "success",
            duration: 4000,
            isClosable: true,
            position: "top",
          });
          form.current.reset();
        },
        (error) => {
          toast({
            title: "Sending failed ❌",
            description: error.text || "Something went wrong, try again later.",
            status: "error",
            duration: 4000,
            isClosable: true,
            position: "top",
          });
        }
      );
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      p={4}
    >
      <Box
        w="full"
        maxW="650px"
        p={10}
        bg="white"
        borderRadius="2xl"
        boxShadow="2xl"
      >
        <Heading
          textAlign="center"
          mb={8}
          color="purple.600"
          fontFamily="Poppins"
        >
          Get in Touch
        </Heading>

        <form ref={form} onSubmit={sendEmail}>
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel fontWeight="medium">Your Name</FormLabel>
              <Input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                focusBorderColor="purple.400"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="medium">Email Address</FormLabel>
              <Input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                focusBorderColor="purple.400"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="medium">Message</FormLabel>
              <Textarea
                name="message"
                placeholder="Write your message..."
                rows={6}
                resize="none"
                focusBorderColor="purple.400"
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="purple"
              size="lg"
              width="full"
              borderRadius="xl"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
