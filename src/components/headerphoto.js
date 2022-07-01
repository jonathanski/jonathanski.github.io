import React, { ReactNode } from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import defaultPhoto from "../images/cover_rock.jpeg"

export default function HeaderPhoto( { children, titleText, photo, imageAddress }, { children: ReactNode } ) {
  return (
    <Flex
      w={'full'}
      h={'50vh'}
      backgroundImage=
        { `url(${photo!="" && photo != null ? photo : defaultPhoto})` }


    //  { imageName != "" ? imageName :  `url(${defaultBackground})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            {titleText}
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
