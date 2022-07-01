import * as React from "react"
import Navbar from "../components/navbar"
import HeaderPhoto from "../components/headerphoto"
import MainBody from "../components/mainbody"
import ResumeCard from "../Components/resumecard"
import { ChakraProvider,
        List,
        ListItem,
        ListIcon,
        MdCheckCircle
        } from '@chakra-ui/react'



// markup
const About = () => {
  return (
    <ChakraProvider>
      <title>Jonathan Skinnider</title>
      <Navbar />
      <HeaderPhoto
        titleText = "About & Digital CV"
        />

      <MainBody>

      <ResumeCard
        title = "Marketing Assistant (GIS), BC Agriculture in the Classroom Foundation"
        date = "Spring-Summer 2022 (Contract)"
        infoList = {['Created Farm Explorer BC web map using ArcGIS Online', 'Used Survey123 to collect information and geospatial data', 'Scripted dynamic display formats using Arcade Expressions', 'Scraped information from public websites and automated repetitive tasks using Python']}
      />


      <ResumeCard
        title = "Full Stack Web Developer, 10Adventures.com "
        date = "Spring 2020-Spring 2021"
        infoList = {['Learned all skills of a full stack web developer while working for adventure travel website','Developed new mapping frontend and backend using Mapbox to display/store route and region information', 'Designed GraphQL API for use in upcoming mobile app', 'Self motivated, created own work plans', 'Excellent communication required working with a fully remote team']}
      />








      </MainBody>


    </ChakraProvider>
    )
}

export default About
