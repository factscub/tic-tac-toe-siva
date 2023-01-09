import { NewGamePageButtonText } from "./NewGamePageButtonText";
import { NewGamePageCaption } from "./NewGamePageCaption";
import { NewGamePageFormData } from "./NewGamePageFormData";
import { NewGamePageHeadingText } from "./NewGamePageHeadingText";

export const newGameProps = {
    HeadingText: NewGamePageHeadingText,
    formDetails: NewGamePageFormData,
    previousUrl: '/home',
    formCaption: NewGamePageCaption,
    btnText: NewGamePageButtonText,
    type: 'NewGame',
    gotoUrl: '/gameBoard',
    url: ''
}