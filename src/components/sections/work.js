import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = styled.section`
  margin: 4rem 0;
  background-color: ${props => props.theme.color.primary};
  padding: 4.5rem 0 2rem 0;
`;

const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 3rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const WorkHeader = styled.h2`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  color: #b9e7f7;
  font-size: 4rem;
  text-transform: uppercase;
  margin-top: -2.5rem;
  margin-left: -1.2rem;
`;

const WorkContent1 = styled.div`
grid-column: 1 / -1;
grid-row: 1 / 2;
`
const WorkContent2 = styled.div`
grid-column: 1 / -1;
grid-row: 2 / 3;
`
const WorkContent3 = styled.div`
grid-column: 1 / -1;
grid-row: 3 / 4;
`

const WorkImage = styled(Img)`
clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
shape-outside: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
height: 200px;
margin-bottom: 1rem;
`
const WorkText = styled.div`
background-color: #ffffff;
height: 200px;
padding: 1rem;
clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
`
const Tleft = styled.div`
float: left;
clip-path: polygon(15% 0, 100% 85%, 100% 100%, 0 100%, 0 0);
shape-outside: polygon(15% 0, 100% 85%, 100% 100%, 0 100%, 0 0);
height: 200px;
width: 25%;
`

const Tright = styled.div`
float: right;
clip-path: polygon(100% 0, 100% 100%, 85% 100%, 0 15%, 0 0);
shape-outside: polygon(100% 0, 100% 100%, 85% 100%, 0 15%, 0 0);
height: 200px;
width: 25%;
`

const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      projectImage1: file(relativePath: { eq: "images/lwb.png" }) {
        childImageSharp {
          fluid(maxWidth:768) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
      projectImage2: file(relativePath: { eq: "images/brisharpe.png" }) {
        childImageSharp {
          fluid(maxWidth:768) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
      projectImage3: file(relativePath: { eq: "images/gatsby-h.png" }) {
        childImageSharp {
          fluid(maxWidth:768) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
    }
    `)
    return (
            <Section id="work">
                <WorkContainer>
                  <WorkHeader>Work</WorkHeader>
                  <WorkContent1>
                    <WorkImage fluid={data.projectImage1.childImageSharp.fluid} alt="Life With Benjamin"/>
                    <Tleft/>
                    <Tright/>
                    <WorkText>
                    <h3>www.lifewithbenjamin.com</h3>
                    <p>A great description of the site could go here that makes it sound amazing and awesome. Here is some more detail about why it is such a great project.</p>
                    </WorkText>
                  </WorkContent1>
                  <WorkContent2>
                    <WorkImage fluid={data.projectImage2.childImageSharp.fluid} alt="Life With Benjamin"/>
                    <Tleft/>
                    <Tright/>
                    <WorkText>
                    <h3>www.briannasharpe.com</h3>
                    <p>A great description of the site could go here that makes it sound amazing and awesome. Here is some more detail about why it is such a great project.</p>
                    </WorkText>
                  </WorkContent2>
                  <WorkContent3>
                    <WorkImage fluid={data.projectImage3.childImageSharp.fluid} alt="Life With Benjamin"/>
                    <Tleft/>
                    <Tright/>
                    <WorkText>
                    <h3>Gatsby Themes and Starters</h3>
                    <p>A great description of the site could go here that makes it sound amazing and awesome. Here is some more detail about why it is such a great project.</p>
                    </WorkText>
                  </WorkContent3>
                </WorkContainer>
            </Section>
    )
}

export default siteSection