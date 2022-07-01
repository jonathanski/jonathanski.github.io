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



export default function ResumeCard( { children, title, date, infoList }, { children: ReactNode } ) {

  const testList = ['Created Farm Explorer BC web map using ArcGIS Online', 'Used Survey123 to collect information and geospatial data', 'Scripted dynamic display formats using Arcade Expressions', 'Scraped information from public websites and automated repetitive tasks using Python']
  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      padding="5px"
      height="full"
      shadow='lg'
      m={10}
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
        <Text>
          {date}
        </Text>
         <List spacing={3}>
          {testList.map(item =>
            <ListItem>
              <CheckCircleIcon  mr={2} mb={1} color='green.500' />

              {item}
            </ListItem>

          )}
        </List>


        {children}
      </Stack>



    </Box>
  );
}
