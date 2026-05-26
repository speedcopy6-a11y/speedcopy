import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import Nav from "../../components/nav"
import Footer from "../../components/footer"

import Bizhubc4051i from "../../images/bizhub-c4050i.png"

const Hero = styled.div`
  margin: 120px 15em;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SubHead = styled.span`
  color: #545454;
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`
const Heading = styled.span`
  color: #3e7094;
  font-size: 64px;
  font-weight: 800;
`

const KseroContent = styled.section`
  padding: 0 15em;
  @media only screen and (min-width: 1921px) {
    max-width: 1905px;
    margin: 0 auto;
    padding: 0;
  }
  @media only screen and (max-width: 1440px) {
    padding: 0px 4em;
  }
  @media only screen and (max-width: 768px) {
    padding: 0px 2em;
  }
`
const KseroBox = styled.div`
  display: flex;
  background-color: #eff8ff;
  border-radius: 30px;
  width: 100%;
  padding: 50px 20px;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const IMGWrapper = styled.div`
  width: 30%;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const TextWrapper = styled.div`
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
  }
`
const Title = styled.p`
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 15px;
`
const Desc = styled.div`
  font-weight: 300;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`
const StyledUl = styled.ul`
  list-style-type: disc;
  padding-left: 30px;
`

const CzarnoBialePage = () => (
  <Layout>
    <Helmet>
      <title>
        Kserokopiarki czarno-białe - Wynajem i dzierżawa Piotrków | SpeedCopy
      </title>
      <meta
        name="description"
        content="Kserokopiarki do druku czarno białego z możliwością wynajmu lub dzierżawy na terenie Piotrkowa Trybunalskiego, Łodzi i okolic. Niskie ceny i darmowy serwis."
      />
    </Helmet>
    <Nav />
    <Hero>
      <H1>
        <SubHead>Kserokopiarki</SubHead>
        <Heading>Czarno-Białe</Heading>
      </H1>
    </Hero>
    <KseroContent>
      <KseroBox>
        <IMGWrapper>
          <img
            src={Bizhubc4051i}
            alt="Wynajem kserokopiarek Piotrków Bizhub c3110"
          />
        </IMGWrapper>
        <TextWrapper>
          <Title>Bizhub c4050i</Title>
          <Desc>
            <StyledUl>
              <li>Prędkość A4: 33 stron na minutę</li>
              <li>Formaty papieru: A6 - A4 i niestandardowe formaty</li>
              <li>
                Duża elastyczność do codziennych zadań z funkcją drukowania,
                skanowania, kopiowania i faksowania w jednym urządzeniu
              </li>
              <li>
                Oszczędność czasu dzięki standardowemu trybowi duplex przy 100%
                wydajności
              </li>
              <li>
                Oszczędność miejsca dzięki niewielkiej, kompaktowej i lekkiej
                konstrukcji
              </li>
            </StyledUl>
          </Desc>
        </TextWrapper>
      </KseroBox>
    </KseroContent>
    <Footer />
  </Layout>
)

export default CzarnoBialePage
