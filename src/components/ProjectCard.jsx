import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  height: 150px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  transition: height 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    height: 300px;
  }
  @media screen and (max-width: 1600px) {
    transition: width 0.3s ease;
    transition: height 0.3s ease;
    width: 250px;
  }
  @media screen and (max-width: 1300px) {
    transition: width 0.3s ease;
    width: 350px;

    &:hover {
      transition: width 0.3s ease;
      height: 150px;
      width: 450px;
    }
  }
  @media screen and (max-width: 950px) {
    transition: width 0.3s ease;
    width: 300px;
    &:hover {
      transition: height 0.3s ease;
      height: 300px;
      width: 300px;
    }
  } 
  @media screen and (max-width: 750px) {
    transition: width 0.3s ease;
    width: 350px;

    &:hover {
      transition: width 0.3s ease;
      height: 150px;
      width: 450px;
    }
  }
  @media screen and (max-width: 650px) {
    transition: width 0.3s ease;
    width: 250px;

    &:hover {
      transition: width 0.3s ease;
      height: 150px;
      width: 400px;
    }
  } 
}
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardDescription = styled.p`
  margin: 0;
`;

const ProjectCard = ({ image, title, description }) => (
  <CardContainer>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </CardContainer>
);

export default ProjectCard;
