import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
color: ${({lightTopLine}) =>(lightTopLine ? "#a9b3c1" : "#4B59F7")};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`

export const Heading = styled.h1`
color: ${({lightText}) =>(lightText? "#f7f8fa" : "#1c2237")};
font-size: 48px;
line-height: 1.1;
margin-bottom: 24px;
`

export const Subtitle = styled.p`
color: ${({lightTextDesc}) =>(lightTextDesc? "#a9b3c1" : "#1c2237")};
font-size: 18px;
line-height: 24px;
margin-bottom: 35px;
max-width: 440px;
`