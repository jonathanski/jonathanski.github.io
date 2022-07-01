import React, { ReactNode } from 'react';
import {
  Box
} from '@chakra-ui/react';

export default function MainBody( { children }, { children: ReactNode } ) {
  return (
    <Box
      marginLeft="10px"
      marginRight="10px"
      >
      <Box
        maxWidth = "5xl"
        margin="auto"
        //bg = 'gray.50'
        //padding="20px"
        marginTop= "10px"
        >

        {children}

      </Box>
    </Box>
  );
}
