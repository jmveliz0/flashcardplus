import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => (
  <Button onClick={() => console.log("I am working")}>Default style</Button>
);
