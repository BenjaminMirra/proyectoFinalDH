import React from "react";
import { FooterDesktopTablet } from "./FooterDesktopTablet";
export default {
  title: "Organisms/Footer/FooterDesktopTablet",
  component: FooterDesktopTablet,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FooterDesktopTablet {...args} />;

// 👇 Each story then reuses that template
export const Footer = Template.bind({});
Footer.args = {};
