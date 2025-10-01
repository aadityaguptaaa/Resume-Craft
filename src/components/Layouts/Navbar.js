import { IconButton } from '@chakra-ui/button';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Stack
            p={5}
            bg={'gray.50'}
            as='header'
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                <Heading
                    as='h3'
                    ml={{ base: 0, sm: 8 }}
                    size='lg'
                    fontWeight={'thin'}
                    color='purple.500'
                    style={{ fontFamily: "Pacifico" }}
                >
                    ResumeCraft
                </Heading>
                <Spacer />
                <HStack
                    spacing={10}
                    mr={{ base: 0, sm: 8 }}
                    as='nav'
                    style={{ fontFamily: 'Poppins' }}
                >
                    <Text as={Link} to="/" fontSize='lg'>
                        Home
                    </Text>
                    <Button
                        as={Link}
                        to="/contact"
                        colorScheme={'purple'}
                        fontWeight={'medium'}
                    >
                        Contact
                    </Button>
                </HStack>
            </Flex>
        </Stack>
    )
}

export default Navbar;
