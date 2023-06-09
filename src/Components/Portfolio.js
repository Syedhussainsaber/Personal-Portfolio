import React from 'react'
import styled from 'styled-components'

const PortfolioSec = styled.div`
  background-color: rgb(30, 0, 60);
  color: gold;
  width: 87.5%;
  font-family: serif;
  font-size: 1.3em;
  position: absolute;
  top: 1380px;
  overflow-x: hidden;
  right: 0;
  padding: 10px;
  padding-bottom: 35px;
  @media (max-width: 640px) {
    width: 100%;
    top: 1520px;
  }
  @media (min-width: 592px) and (max-width: 640px) {
    top: 1550px;
  }
`
const PortfolioCon = styled.h1`
  width: 100%;
  text-align: center;
`
const Flexcol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  width: 220px;
  height: 250px;
  padding: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  border: 3px solid gold;
  border-radius: 10px;
  margin: 25px;
  cursor: pointer;
  h3 {
    text-align: center;
    margin: -8px 0px 10px 0px;
    line-height: 1.25;
  }
  img {
    width: 200px;
    margin-top: 6px;
    border-radius: 10px;
  }
  &:hover {
    background-color: rgb(30, 10, 100);
  }
`
const Flexrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 640px) {
    align-items: center;
  }
`
const Portfolio = () => {
  return (
    <>
      <PortfolioSec id="portfolio">
        <Flexcol>
          <PortfolioCon>My Portfolio</PortfolioCon>
          <Flexrow>
            <Card
              onClick={() =>
                window !== undefined
                  ? window.open('https://recipe-app--syedhussainsabe.repl.co/')
                  : ''
              }
            >
              <h3>Recipe App</h3>
              <img src="./recipe.jpeg" alt="Recipe App" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open('https://kba.vercel.app')
                  : ''
              }
            >
              <h3>Crypto Token Website</h3>
              <img src="./kba.jpeg" alt="KBA Website" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open(
                      'https://words-guesser-game--syedhussainsabe.repl.co/',
                    )
                  : ''
              }
            >
              <h3>Word Guesser</h3>
              <img src="./wordGuesser.jpeg" alt="Word Guesser" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open('https://quiz-app-1--syedhussainsabe.repl.co/')
                  : ''
              }
            >
              <h3>Quiz App</h3>
              <img src="./quiz.jpeg" alt="Quiz App" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open(
                      'https://calculater-using-htmlcsssjs--syedhussainsabe.repl.co/',
                    )
                  : ''
              }
            >
              <h3>Calculater</h3>
              <img src="./calculator.jpeg" alt="Calculater App" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open(
                      'https://temperature-converter--syedhussainsabe.repl.co/',
                    )
                  : ''
              }
            >
              <h3>Temperature Converter</h3>
              <img src="./temperature.jpeg" alt="Temperature Converter" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open(
                      'https://palindrome-checker--syedhussainsabe.repl.co/',
                    )
                  : ''
              }
            >
              <h3>Palindrome Checker</h3>
              <img src="./palindrome.jpeg" alt="Palindrome Checker" />
            </Card>
          </Flexrow>
        </Flexcol>
      </PortfolioSec>
    </>
  )
}

export default Portfolio
