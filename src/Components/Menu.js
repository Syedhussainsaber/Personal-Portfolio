import React from 'react'
import styled from 'styled-components'
import { AiFillHome } from 'react-icons/ai'
import { IoIosContact } from 'react-icons/io'
import { FaSuitcase } from 'react-icons/fa'
import { FaWpforms } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-scroll'
const Menu = ({ showMenuBtn }) => {
  const Header = styled.header`
    width: 200px;
    z-index: 20;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-attachment: fixed;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgb(2, 0, 36);
    padding: 10px 0px 0px 0px;

    .menu {
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100vh;
      justify-content: center;
      align-items: center;
      margin-top: 14%;
    }
    .profile {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    .profile img {
      width: 60%;
      margin: 10px 0px 0px 0px;
      border: solid 2px #fce22a;
      border-radius: 100px;
      cursor: pointer;
    }
    @media (max-width: 1100px) {
      .profile {
        width: 90%;
      }
    }
    @media (max-width: 896px) {
      width: 30%;
    }
    @media (max-width: 350px) {
      width: 200px;

      top: 0px;
      left: 0px;
      .menu {
        width: 180px;
        margin: 0px 5%;
      }
      .profile img {
        width: 100px;

        margin: 40px auto 0px auto;
      }
    }

    @media (max-width: 640px) {
      z-index: 10;
      width: 50%;
      display: ${showMenuBtn ? 'none' : 'flex'};

      .menu {
        width: 100%;
        height:100%;
        padding-top: 20px;
        // justify-content: center;
        align-items: center;
      }
    }
  `
  const List = styled.ul`
    color: #fce22a;
    list-style: none;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 640px) {
      width: 100%;
    }
  `
  const Li = styled.li`
    color: #fce22a;
    font-family: 'Times Roman';
    font-weight: bold;
    margin: 5px 0px;
    padding: 20px 0px;
    font-size: 1.8em;
    cursor: pointer;
  `
  // const Image = styled.img`
  //   width: 100%;
  //   height: 200px;
  // `

  const [showHome, setShowHome] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showResume, setShowResume] = useState(false)
  const [showContact, setShowContact] = useState(false)
  console.log(showMenuBtn ? showMenuBtn : false)
  return (
    <Header>
      <nav className="menu">
        {/* <Image> */}
        <div className="profile">
          <img src="./my.png" alt="Profile" />
        </div>
        <List>
          <Li
            onMouseEnter={() => setShowHome(true)}
            onMouseLeave={() => setShowHome(false)}
          >
            {showHome ? (
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            ) : (
              <AiFillHome />
            )}
          </Li>
          <Li
            onMouseEnter={() => setShowAbout(true)}
            onMouseLeave={() => setShowAbout(false)}
          >
            {showAbout ? (
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
            ) : (
              <IoIosContact />
            )}
          </Li>
          <Li
            onMouseEnter={() => setShowPortfolio(true)}
            onMouseLeave={() => setShowPortfolio(false)}
          >
            {showPortfolio ? (
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Portfolio
              </Link>
            ) : (
              <FaSuitcase />
            )}
          </Li>
          <Li
            onMouseEnter={() => setShowResume(true)}
            onMouseLeave={() => setShowResume(false)}
          >
            {showResume ? (
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Resume
              </Link>
            ) : (
              <FaWpforms />
            )}
          </Li>
          <Li
            onMouseEnter={() => setShowContact(true)}
            onMouseLeave={() => setShowContact(false)}
          >
            {showContact ? (
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            ) : (
              <AiFillMessage />
            )}
          </Li>
        </List>
      </nav>
    </Header>
  )
}

export default Menu
