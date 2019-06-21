import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = styled.section`
  background: #9CE5F4;
`

const CTA = styled(Link)`
  color: #333333;
  border-bottom: 2px solid #333333;

  :hover {
    text-decoration: none;
    opacity: 0.8;
  }

  ::after {
    content: "\00A0 \2192";
  }
`

const WelcomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: calc(50vh - 41px) calc(50vh - 41px);
  grid-gap: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
`

const WelcomeImage = styled(Img)`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`

const WelcomeContent = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`


const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(relativePath: { eq: "images/absurd-lightbulb.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
        }
      }
    }
    `)
    return (
            <Section>
              <WelcomeContainer>
                <WelcomeImage fluid={data.welcomeImage.childImageSharp.fluid} alt="Arrangement of lightbulbs" imgStyle={{ width: 'auto', height: 'auto' }} />
                <WelcomeContent>
                  <h2>Amazing websites.<br />Done right the first time.</h2>
                  <p><CTA to="/contact">Talk to me</CTA></p>
                </WelcomeContent>
            </WelcomeContainer>
        </Section>
    )
}

export default siteSection