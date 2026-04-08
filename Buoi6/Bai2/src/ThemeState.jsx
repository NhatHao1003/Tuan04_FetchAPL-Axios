import { atom } from "recoil";

export const ThemeState = atom({
    key : "theme",
    default : localStorage.getItem("Theme")
})