import React from "react";

import { Container, SImage, StyledSpan } from "./AvatarStyle";
export default function Avatar() {
  return (
    <Container>
      <SImage
        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Pale"
        avatar
        centered
      />
      <StyledSpan>Username</StyledSpan>
    </Container>
  );
}
