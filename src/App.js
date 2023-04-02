import './App.css'
import styled from 'styled-components'
import { HiMenu } from 'react-icons/hi'

// import { Component } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import Typewriter from 'typewriter-effect'

import Menu from './Components/Menu'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Contact from './Components/Contact'

import React, { useEffect, useState } from 'react'
function App() {
  const [showMenuBtn, setshowMenuBtn] = useState(true)

  const Styled = styled.h1`
    color: gold;
    background-color: rgba(2, 0, 36, 0.8);
    padding: 15px;
    border: 6px solid gold;
    padding: 5px;
    width: 65%;
    line-height: 1.5;
    font-weight: bold;
    font-size: 75px;
    font-family: serif;
    margin-left: 20px;
    @media (max-width: 980px) {
      width: 80%;
    }
    @media (max-width: 895px) {
      font-size: 50px;
    }
    @media (max-width: 640px) {
      font-size: 40px;
      text-align: center;
      margin-left: 0px;
    }
    @media (max-width: 355px) {
      width: 250px;
    }
  `
  const Section = styled.section`
    background-color: rgb(2, 0, 36);
    width: 100vw;
    overflow-x: hidden;
  `
  const Text = styled.h2`
    font-size: 50px;
    text-align: left;
    color: rgb(2, 0, 36);
    font-family: Times Roman;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    margin-top: 50px;
    margin-left: 20px;
    @media (max-width: 895px) {
      font-size: 30px;

      text-align: center;
    }
    @media (max-width: 640px) {
      line-height: 1.5;
      font-size: 30px;
      width: 90%;

      margin-left: 0px;
      margin-top: 0px;

      text-align: center;
      color: rgb(200, 500, 40);
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 12px;
      border: 1px solid white;
    }
  `

  const Bg = styled.div`
    // background-image: url('./bgImg2.jpeg');
    // background-repeat: no-repeat;
    width: 85.9vw;
    height: 100vh;
    position: absolute;

    top: 0px;
    right: 0px;
    @media (max-width: 1100px) {
      width: 80vw;
    }
    @media (max-width: 895px) {
      width: 78vw;
    }
    @media (max-width: 755px) {
      width: 72vw;
    }
    @media (max-width: 640px) {
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `
  const TextBlack = styled.h2`
    // position: absolute;
    font-size: 2em;
    top: 10px;
    left: 40px;
    background-attachment: fixed;
    position: ${showMenuBtn ? 'absolute' : 'fixed'};
    color: ${showMenuBtn ? 'black' : 'white'};
    cursor: pointer;
    display: none;
    z-index: 10;
    @media (max-width: 640px) {
      display: inline;
    }
    @media (max-width: 380px) {
      left: 25px;
    }
  `
  const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Profile = styled.img`
    width: 200px;
    border: solid white 3px;
    border-radius: 100%;
    margin-top: -150px;
  `
  function hideMenuBtn() {
    setshowMenuBtn(false)
  }

  function handleMenuBtn() {
    setshowMenuBtn(true)
  }

  const [innerWidth, setInnerWidth] = useState(0)
  function widthUpdate() {
    console.log(innerWidth.toLocaleString())
    console.log(window.innerWidth)

    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth)
    })
  }
  useEffect(widthUpdate, [])
  return (
    <>
      <Flex id="/">
        <Menu showMenuBtn={showMenuBtn} />
        <Section>
          <div className="App">
            <Bg>
              {showMenuBtn ? (
                <TextBlack onClick={hideMenuBtn} showMenuBtn={showMenuBtn}>
                  <HiMenu />
                </TextBlack>
              ) : (
                <TextBlack onClick={handleMenuBtn} showMenuBtn={showMenuBtn}>
                  <AiFillCloseSquare />
                </TextBlack>
              )}
              {/* {<Profile src="./my.png" alt="Profile" />} */}

              <Styled>Hi 👋🏻 I'm Syed Hussain Saber</Styled>
              <Text>
                <span>I am a</span>
                <Typewriter
                  options={{
                    strings: [
                      'Web Developer',
                      'Blockchain Developer',
                      'Freelancer',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Text>
            </Bg>
          </div>
        </Section>{' '}
      </Flex>

      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  )
}

export default App
