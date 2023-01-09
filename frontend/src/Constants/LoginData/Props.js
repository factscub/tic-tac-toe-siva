import { ButtonTypes } from "../ButtonTypes";
import { LoginCaption } from "./LoginCaption";
import { LoginFormData } from "./LoginFormData";
import { LoginHeadingText } from "./LoginHeadingText";

export const loginProps = {
    HeadingText: LoginHeadingText,
    formDetails: LoginFormData,
    previousUrl: '/',
    formCaption: LoginCaption,
    type: ButtonTypes[0].type,
    btnText: ButtonTypes[0].type,
    gotoUrl: '/home',
    url: 'login',
}