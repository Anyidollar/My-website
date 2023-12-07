import React from "react";
import { InfoSec } from "./InfoSection.elements";
import { Container } from "../../globalStyles";
import { InfoRow, InfoColumn, TextWrapper } from "./InfoSection.elements";

const InfoSection = ({ lightBg, imgStart }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>Home page...</TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
