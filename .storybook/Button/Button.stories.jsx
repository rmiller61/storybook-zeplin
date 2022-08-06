import React from "react";
import Button from "./Button";

export default {
    title: "Example/Button",
    component: Button,
};

export const ButtonNormal = () => <Button>Button</Button>;
export const ButtonPressed = () => <Button active>Button</Button>;
export const ButtonDisabled = () => <Button disabled>Button</Button>;
export const ButtonMultiple = () => (
    <>
        <ButtonNormal />
        <br />
        <br />
        <ButtonPressed />
        <br />
        <br />
        <ButtonDisabled />
    </>
);

ButtonNormal.parameters = {
    zeplinLink:
        "https://app.zeplin.io/styleguide/62ed7f46039c017488afdcc1/components?coid=62ed57f2d27ae572aa3a5ae9",
};

ButtonPressed.parameters = {
    zeplinLink:
        "https://app.zeplin.io/styleguide/62ed7f46039c017488afdcc1/components?coid=62ed57f2d27ae572aa3a5ae9",
};

ButtonDisabled.parameters = {
    zeplinLink:
        "https://app.zeplin.io/styleguide/62ed7f46039c017488afdcc1/components?coid=62ed57f2d27ae572aa3a5ae9",
};

ButtonMultiple.parameters = {
    zeplinLink: [
        {
            name: "Default",
            link: ButtonNormal.parameters.zeplinLink,
        },
        {
            name: "Pressed",
            link: ButtonPressed.parameters.zeplinLink,
        },
        {
            name: "Disabled",
            link: ButtonDisabled.parameters.zeplinLink,
        },
    ],
};
