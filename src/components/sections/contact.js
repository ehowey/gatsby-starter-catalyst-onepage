import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = styled.section`
  margin: 4rem 0;
  padding: 2rem 0;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  grid-row-gap: 3rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ContactHeader = styled.h1`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  color: #f2f3f4;
  font-size: 4rem;
  text-transform: uppercase;
  margin-top: -2.5rem;
  margin-left: -1.2rem;
`

const ContactContent = styled.div`
grid-column: 2 / 3;
grid-row: 1 / 2;
align-self: center;
justify-self: center;
`

const ContactFish = styled(Img)`
height: 100px;
grid-column: 1 / 2;
grid-row: 1 / 2;
align-self: center;
`
const ContactEars = styled(Img)`
height: 300px;
grid-column: 3 / 4;
grid-row: 1 / 2;
`

const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      contactImage1: file(relativePath: { eq: "images/absurd-fish.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
      contactImage2: file(relativePath: { eq: "images/absurd-ears.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
    }
    `)
    return (
        <Section id="contact">
            <ContactContainer>
                <ContactHeader>Talk To Me</ContactHeader>
                <ContactContent>
                <h3>Always</h3>
                <a href="mailto:eric@erichowey.dev">eric@erichowey.dev</a>
                <h3>Sometimes</h3>
                <a href="https://github.com/ehowey">Github</a>
                <h3>Rarely</h3>
                <a href="https://twitter.com/erichoweydev">Twitter</a>
                </ContactContent>
                <ContactFish fluid={data.contactImage1.childImageSharp.fluid} alt="Talking Fish" imgStyle={{ objectFit: 'contain' }}/>
                <ContactEars fluid={data.contactImage2.childImageSharp.fluid} alt="All Ears" imgStyle={{ objectFit: 'contain' }}/>
            </ContactContainer>
        </Section>
    )
}

export default siteSection