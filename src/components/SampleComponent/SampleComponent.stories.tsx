import React from "react";
import SampleComponent from "./SampleComponent";

export default {
  title: "Components/SampleComponent",
  component: SampleComponent
};

const Template = (args: { text: string }) => <SampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Hello from SampleComponent"
};
