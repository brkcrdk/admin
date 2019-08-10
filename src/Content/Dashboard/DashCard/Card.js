import React from "react";
import colours from "../../../colour";
import { Card, CardHeader } from "semantic-ui-react";

import { SCard, SIcon, SDescription } from "./CardStyle";

export default function DashCard(props) {
  return (
    <div>
      <SCard link color={props.cardColor}>
        <Card.Content textAlign="left">
          <CardHeader style={{ color: `${colours.mainBlue}` }}>
            {props.title}
          </CardHeader>
          <SIcon name={props.icon} />
          <SDescription>{props.amount}</SDescription>
        </Card.Content>
      </SCard>
    </div>
  );
}
