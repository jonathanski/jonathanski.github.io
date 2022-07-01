import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Text,
  Divider,
  Stack,
  useBreakpointValue,
  List,
  ListItem,
  ListIcon,
  MdCheckCircle
} from '@chakra-ui/react';

import { CheckCircleIcon } from '@chakra-ui/icons'

const boldWords = ["python", "arcgis", "graphql", "scripted", "java", "sql"]


export default function ResumeCard( { children, title, date, infoList }, { children: ReactNode } ) {

  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      padding="5px"
      height="full"
      shadow='lg'
      mb={5}
      mt={3}
      >

      <Text
        p={4}
        fontSize="lg">
        {title}
      </Text>

      <Divider
        orientation='horizontal'
         />

      <Stack
        direction={useBreakpointValue({ base: "column", md: "row" })}
        h='full'
        p={4}>
        <Text
          width={useBreakpointValue({ base: "", md: "200px" })}>
          {date}
        </Text>
         <List spacing={3}>
          {infoList.map(item =>
            <ListItem>
              <CheckCircleIcon  mr={2} mb={1} color='green.500' />
              {item.split(' ').map(word => {
                  if (boldWords.includes(word.toLowerCase())) {
                    return ( <b> {word + " "} </b> )
                  } else {
                    return (word + " ")
                  }
              }) }
            </ListItem>

          )}
        </List>


        {children}
      </Stack>



    </Box>
  );
}
