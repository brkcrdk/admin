import React from "react";

import { Card, CardHeader } from "semantic-ui-react";

import { SCard, SIcon, SDescription } from "./CardStyle";

export default function DashCard(props) {
  return (
    <div>
      <SCard link color={props.cardColor}>
        <Card.Content textAlign="left">
          <CardHeader style={{ color: "#66b0ed" }}>{props.title}</CardHeader>
          <SIcon name={props.icon} />
          <SDescription>{props.amount}</SDescription>
        </Card.Content>
      </SCard>
    </div>
  );
}
