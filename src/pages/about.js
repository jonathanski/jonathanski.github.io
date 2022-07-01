import * as React from "react"
import Navbar from "../components/navbar"
import HeaderPhoto from "../components/headerphoto"
import MainBody from "../components/mainbody"
import ResumeCard from "../Components/resumecard"
import { ChakraProvider,
        List,
        ListItem,
        ListIcon,
        MdCheckCircle,
        Text,
        Heading
        } from '@chakra-ui/react'

import skiphoto from "../images/cover_ski.jpeg"


// markup
const About = () => {
  return (
    <ChakraProvider>
      <title>Jonathan Skinnider</title>
      <Navbar />
      <HeaderPhoto
        titleText = "About & Digital CV"
        photo = {skiphoto}
        />

      <MainBody>

      <Text mt={4} mb={4}>
        I graduated from the University of Victoria in 2020 with a Bachelors of Science in Computer Science and Mathematics. In the final three years of my degree I achieved the highest possible GPA and graduated with distinction. In my free time I enjoy recreating in the outdoors, backcountry skiing in the winter and mountainbiking/hiking in the summer. Professionally I am seeking an opportunity to combine my technical skills with my passion for the outdoors. If you look at my personal projects you can see that I enjoy applying data science and GIS techniques to solve problems relavent to ski touring, avalanche awarness and provincial park usage.
      </Text>

      <Heading as='h2' size='md'>
        Work Experience
      </Heading>

      <ResumeCard
        title = "Marketing Assistant (GIS), BC Agriculture in the Classroom Foundation"
        date = "Spring - Summer 2022 (Contract)"
        infoList = {['Created Farm Explorer BC web map using ArcGIS Online', 'Used Survey123 to collect information and geospatial data', 'Scripted dynamic display formats using Arcade Expressions', 'Scraped information from public websites and automated repetitive tasks using Python']}
      />


      <ResumeCard
        title = "Full Stack Web Developer, 10Adventures.com "
        date = "Spring 2020 - Spring 2021"
        infoList = {['Learned all skills of a full stack web developer while working for adventure travel website','Developed new mapping frontend and backend using Mapbox to display/store route and region information', 'Designed GraphQL API for use in upcoming mobile app', 'Self motivated, created own work plans', 'Excellent communication required working with a fully remote team']}
      />

      <ResumeCard
        title = "Teaching Assistant, University of Victoria"
        date = "Spring 2020"
        infoList = {["Clearly instructed weekly labs for two sections", "Explained complex topics, asked questions to ensure understanding", "Provided one on one support for student during office hours", "Collaborated with colleagues to create lesson plans and answer keys"]}
      />

      <ResumeCard
        title = "Student Researcher, Dr. Peter Dukes (Mathematics, University of Victoria)"
        date = "Summer 2019"
        infoList = {["Attempted to complete known proof by computational finding remaining values", "Funded by NSERC USRA"]}
      />

      <ResumeCard
        title = "Co-op Oracle Developer, BC Pension Corporation"
        date = "Summer 2018"
        infoList = {["Transitioned database backend between software frameworks", "Programmed in Redwood - Java like language - and SQL", "Communicated with other departments requiring database services" ]}
      />








      </MainBody>


    </ChakraProvider>
    )
}

export default About
