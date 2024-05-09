import { createContext } from "react";

export interface Person {
    name: string | undefined;
    age: number | undefined;
}

export const PersonListContext = createContext(undefined)