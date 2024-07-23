import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 90%;

  /* Light Theme Styling */
  @media (prefers-color-scheme: light) {
    border: 1px solid #292929;
    background-color: #bababa;
  }
  
  /* Dark Theme Styling */
  @media (prefers-color-scheme: dark) {
    border: 1px solid #d6d1c6;
    background-color: #24201f;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  flex: 1;
`;

const JobTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  color: #555;
  margin-right: 1rem;
`;

const JobYears = styled.p`
  margin: 0;
  font-style: italic;
  text-align: right;
  margin-left: auto;
`;

const JobDescription = styled.p`
  margin-top: 0.5rem;
`;

const ExperienceCard = ({ company, position, years, description }) => (
  <CardContainer>
    <Header>
      <CompanyName>{company}</CompanyName>
      <JobYears>{years}</JobYears>
    </Header>
    <JobTitle>{position}</JobTitle>
    <JobDescription>{description}</JobDescription>
  </CardContainer>
);

export default ExperienceCard;
