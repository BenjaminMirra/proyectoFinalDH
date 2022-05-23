import React from "react";
import { Login } from "./Login";

export default {
    title: "Pages/Login",
    component: Login,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Login {...args} />;

// 👇 Each story then reuses that template
export const LoginPage = Template.bind({});
LoginPage.args = {
    firstname: undefined,
    lastname: undefined,
};
