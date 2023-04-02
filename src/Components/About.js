import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const AboutSec = styled.div`
  color: white;
  font-size: 2em;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 800px;
  text-align: center;
  width: 87.5vw;
  right: 0px;

  @media (max-width: 640px) {
    top: 750px;
    width: 100%;
    padding-bottom: 15px;
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const Heading = styled.h2`
  color: gold;
  font-family: serif;
  text-align: center;
`
const AboutPara = styled.div`
  color: white;
  width: 60%;
  padding: 10px;
  font-family: mono;
  p {
    width: 95%;
    margin: 10px;
    text-align: center;
  }
  .fade-in-right {
    opacity: 0;
    transform: translateX(50px);
    animation: fade-in-right 1s ease forwards;
  }

  @keyframes fade-in-right {
    from {
      opacity: 0;
      transform: translateX(0px);
    }
    to {
      opacity: 1;
      transform: translateX(50px);
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 10px;
    p {
      width: 60%;
      line-height: 1.4;
      font-size: 0.9em;
    }
  }
`

const PicStyle = styled.div`
  width: 80%;
  padding: 10px;
  margin: 10px;
  margin-top: 15px;
`
const AboutPic = styled.img`
  width: 400px;
  animation: bounce 4s infinite ease-in-out;
  @keyframes bounce {
    0% {
      transform: translateY(-30px);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(-30px);
    }
  }
  @media (max-width: 640px) {
    width: 80%;
  }
`
const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <AboutSec id="about">
        <Heading>About Me</Heading>
        <Flex>
          <AboutPara>
            <p className={isVisible ? 'fade-in-right' : ''}>
              {' '}
              Hi! I am a Frontend Developer, Blockchain Developer and a
              Freelancer{' '}
            </p>
          </AboutPara>
          <PicStyle>
            <AboutPic src="./about.png" alt="My Pic" />
          </PicStyle>
        </Flex>
      </AboutSec>
    </>
  )
}

export default About
