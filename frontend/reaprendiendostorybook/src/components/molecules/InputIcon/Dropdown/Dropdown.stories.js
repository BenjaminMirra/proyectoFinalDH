import React from "react";
import { Dropdown } from "./Dropdown";

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Dropdown {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    options: [
    { content: "San Carlos Bariloche", icon: "location", size: "md" },
    { content: "Buenos Aires", icon: "location", size: "md" },
    { content: "Mendoza", icon: "location", size: "md" },
    { content: "Córdoba", icon: "location", size: "md" },
    ],
};


