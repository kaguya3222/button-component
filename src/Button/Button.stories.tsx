import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => {
  return <Button>Default</Button>;
};

export const Outline: ComponentStory<typeof Button> = () => {
  return <Button variant="outline">Outline</Button>;
};

export const Text: ComponentStory<typeof Button> = () => {
  return <Button variant="text">Text</Button>;
};

export const DisabledShadow: ComponentStory<typeof Button> = () => {
  return <Button disableShadow={true}>Disabled shadow</Button>;
};

export const Disabled: ComponentStory<typeof Button> = () => {
  return (
    <div>
      <Button disabled={true}>Disabled</Button>
      <Button disabled={true} variant="text">
        Disabled
      </Button>
    </div>
  );
};

export const Icons: ComponentStory<typeof Button> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Button startIcon={<span className="material-icons">face</span>}>
        With start icon
      </Button>
      <Button
        variant="text"
        endIcon={<span className="material-icons">face</span>}
      >
        With end icon
      </Button>
    </div>
  );
};

export const Size: ComponentStory<typeof Button> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
};

export const Colors: ComponentStory<typeof Button> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
};
