// Sourced from https://chakra-templates.dev/navigation/navbar

import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['About', 'Projects'];
const colorPallat = "green"
const currentURL = window.location.pathname
console.log(currentURL)


const NavLink = ({ children, href }, { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue(colorPallat+'.200', colorPallat+'.700'),
    }}
    bg = {"/"+href == currentURL ? colorPallat+".200" : ""}
    href={href}>
    {children}
  </Link>
);


const HomeLink = ({ children, href }, { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontSize="lg"
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue(colorPallat+".500"),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box bg={useColorModeValue("gray" + '.100', "gray"+ '.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <HomeLink href={"/"}>
                Jonathan Skinnider
              </HomeLink>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} href={link.toLowerCase()}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>


        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} href={link.toLowerCase()}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>


    </div>
  );
}
