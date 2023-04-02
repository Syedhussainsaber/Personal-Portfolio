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

  right: 0;
  padding: 10px;
  padding-bottom: 35px;
  @media (max-width: 640px) {
    width: 100%;
    top: 1440px;
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
            <Card>
              <h3>Modern NFT Marketplace</h3>
              <p>
                This is Decentralised marketplace, where anyone can list, sell,
                buy or can update their NFTs
              </p>
            </Card>
            <Card>
              <h3>Modern NFT Marketplace</h3>
              <p>
                This is Decentralised marketplace, where anyone can list, sell,
                buy or can update their NFTs
              </p>
            </Card>
            <Card>
              <h3>Modern NFT Marketplace</h3>
              <p>
                This is Decentralised marketplace, where anyone can list, sell,
                buy or can update their NFTs
              </p>
            </Card>
            <Card>
              <h3>Modern NFT Marketplace</h3>
              <p>
                This is Decentralised marketplace, where anyone can list, sell,
                buy or can update their NFTs
              </p>
            </Card>
            <Card>
              <h3>Modern NFT Marketplace</h3>
              <p>
                This is Decentralised marketplace, where anyone can list, sell,
                buy or can update their NFTs
              </p>
            </Card>

            <Card>
              <h3>Modern NFT Marketplace</h3>
              <p>
                This is Decentralised marketplace, where anyone can list, sell,
                buy or can update their NFTs
              </p>
            </Card>
          </Flexrow>
        </Flexcol>
      </PortfolioSec>
    </>
  )
}

export default Portfolio
