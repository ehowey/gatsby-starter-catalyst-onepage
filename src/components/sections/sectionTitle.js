import React from "react";
import styled from "styled-components";

const SectionTitleWrapper = styled.div`
  margin-left: 2rem;
  margin-top: -2rem;
  z-index: 1;
  `

const SectionTitle = styled.h1`
  color: #ccc;
  font-size: 4rem;
  text-transform: uppercase;
`

const siteSectionTitle = (props) => {
    return (
        <SectionTitleWrapper>
            <SectionTitle>{props.title}</SectionTitle>
        </SectionTitleWrapper>
    )
}

export default siteSectionTitle