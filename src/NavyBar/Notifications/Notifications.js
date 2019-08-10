import React from "react";
import { Container, SButton, SLabel } from "./NotificationsStyle";
import { Icon } from "semantic-ui-react";
export default function Notifications() {
  const bildirim = 0;
  return (
    <Container>
      <SButton icon>
        <Icon name="bell outline" size="large">
          <SLabel circular color="pink" toggle={bildirim} />
        </Icon>
      </SButton>
      <SButton icon>
        <Icon name="mail outline" size="large">
          <SLabel circular color="pink" toggle={bildirim} />
        </Icon>
      </SButton>
    </Container>
  );
}
