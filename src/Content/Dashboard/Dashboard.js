import React from "react";
import DashCard from "./DashCard/Card";
import { CardGroup } from "semantic-ui-react";
import { SHeader, SGrid } from "./DashStyle";

export default function Dashboard() {
  return (
    <>
      <SHeader>Dashboard</SHeader>
      <SGrid>
        <CardGroup doubling centered itemsPerRow={2}>
          <DashCard
            title="Total Visitor"
            amount="1000"
            cardColor="red"
            icon="eye"
          />
          <DashCard
            title="Product Sold"
            amount="2000"
            cardColor="blue"
            icon="cart arrow down"
          />
          <DashCard
            title="Order Received"
            amount="3000"
            cardColor="yellow"
            icon="truck"
          />
          <DashCard
            title="Total Revenue"
            amount="4000"
            cardColor="green"
            icon="dollar"
          />
        </CardGroup>
      </SGrid>
    </>
  );
}
