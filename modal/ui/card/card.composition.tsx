import React from "react";
import { Card } from "./card";

export const BasicCard = ({ closeModal }) => (
  <Card title='Please confirm' text='Is 6 multiplied by 7 equal to 42?'>
    <div>More text!</div>
  </Card>
);
