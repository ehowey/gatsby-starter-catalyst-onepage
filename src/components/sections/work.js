import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = styled.section`
  margin: 4rem 0;
  background-color: ${props => props.theme.color.primary};
  padding: 2rem 0;
`;

const WorkContainer = styled.div`
display: flex;
justify-content: space-evenly;
`;

const WorkHeader = styled.h2`
text-align:center;
margin-bottom: 2rem;
`;

const ProjectWrapper = styled.div`
width: 30vw;
max-width: 500px;
background-color: #fff;
box-shadow: 2px 2px 2px 0px rgba(153,153,153,1);
`;

const ProjectImage = styled(Img)`
height: 250px;
`;

const ProjectContent = styled.div`
padding: 1rem;
border-left: 1px solid ${props => props.theme.color.secondary};
border-right: 1px solid ${props => props.theme.color.secondary};
border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const ProjectLink = styled.a`
color: ${props => props.theme.color.textBlack};
font-weight: 700;
text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  &::after {
    content: "\\00A0 \\2192";
  }
`;

const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      projectImage1: file(relativePath: { eq: "images/lwb.png" }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
        }
      }
    }
    `)
    return (
            <Section id="work">
                <WorkHeader>Work</WorkHeader>
                <WorkContainer>
                <ProjectWrapper>
                    <ProjectImage fluid={data.projectImage1.childImageSharp.fluid} alt="Life With Benjamin" />
                    <ProjectContent>
                        <h3>Life With Benjamin</h3>
                        <p><i>www.lifewithbenjamin.com</i></p>
                        <p>Redesign and redevelopment of this website to better reflect the changing directions of his business. Key design challenge was to showcase his photo editing skills while also retaining a strong connection to Instagram.</p>
                        <ProjectLink href="https://www.lifewithbenjamin.com">Check It Out</ProjectLink>
                    </ProjectContent>
                </ProjectWrapper>
                <ProjectWrapper>
                    <ProjectImage fluid={data.projectImage1.childImageSharp.fluid} alt="Life With Benjamin" />
                    <ProjectContent>
                        <h3>Life With Benjamin</h3>
                        <p><i>www.lifewithbenjamin.com</i></p>
                        <p>Redesign and redevelopment of this website to better reflect the changing directions of his business. Key design challenge was to showcase his photo editing skills while also retaining a strong connection to Instagram.</p>
                        <ProjectLink href="https://www.lifewithbenjamin.com">Check It Out</ProjectLink>
                    </ProjectContent>
                </ProjectWrapper>
                <ProjectWrapper>
                    <ProjectImage fluid={data.projectImage1.childImageSharp.fluid} alt="Life With Benjamin" />
                    <ProjectContent>
                        <h3>Life With Benjamin</h3>
                        <p><i>www.lifewithbenjamin.com</i></p>
                        <p>Redesign and redevelopment of this website to better reflect the changing directions of his business. Key design challenge was to showcase his photo editing skills while also retaining a strong connection to Instagram.</p>
                        <ProjectLink href="https://www.lifewithbenjamin.com">Check It Out</ProjectLink>
                    </ProjectContent>
                </ProjectWrapper>
                </WorkContainer>
            </Section>
    )
}

export default siteSection