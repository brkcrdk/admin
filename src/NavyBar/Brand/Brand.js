import React from "react";
import { Container, SHeader, SIcon } from "./BrandStyle";

export default function Brand() {
  return (
    <Container to={"/"}>
      <SHeader as="h2">Golden</SHeader>
      <SIcon name="gem outline" size="big" />
      <SHeader as="h2">Baby</SHeader>
    </Container>
  );
}
