import * as React from "react"
import Navbar from "../components/navbar"
import HeaderPhoto from "../components/headerphoto"
import MainBody from "../components/mainbody"
import { ChakraProvider, Text, Image, Box, HStack, useBreakpointValue, Link } from '@chakra-ui/react'

import fullLength from "../images/full_length.jpeg"

const linkStyle = {
  color: "green",
  fontWeight: "bold",
}
// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <title>Jonathan Skinnider</title>
      <Navbar />
      <HeaderPhoto
        titleText = "Welcome to the personal website of Jonathan Skinnider"
        />
      <MainBody>



      <Box
        maxWidth="sm"
        float={useBreakpointValue({ base: "", sm: "left" })}
        ml={useBreakpointValue({ base: "auto", sm: "" })}
        mr={useBreakpointValue({ base: "auto", sm: "4" })}

        >
        <Image borderRadius="xl" src={fullLength} alt='Dan Abramov' />
      </Box>

      <Text fontSize="lg" mt={3}>
        Hi there! Welcome to my personal website. To learn more about me and check out digital CV go over to <Link href="/about" style={linkStyle}>About</Link>. To see some of my personal projects, including predicting avalanche danger using machine learning and some fun GIS maps go over to <Link href="/projects" style={linkStyle}>Projects</Link>.
      </Text>


      </MainBody>
    </ChakraProvider>
    )
}

export default IndexPage
