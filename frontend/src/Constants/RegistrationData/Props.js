import { ButtonTypes } from "../ButtonTypes";
import { RegisterHeadingText } from "./RegisterHeadingText";
import { RegistrationCaption } from "./RegistrationCaption";
import { RegistrationFormData } from "./RegistrationFormData";

export const registerProps = {
    HeadingText: RegisterHeadingText,
    formDetails: RegistrationFormData,
    previousUrl: '/',
    formCaption: RegistrationCaption,
    type: ButtonTypes[1].type,
    btnText: ButtonTypes[1].type,
    gotoUrl: '/login',
    url: 'register'
}