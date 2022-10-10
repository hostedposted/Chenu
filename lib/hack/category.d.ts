import { StoredHackData } from "./hack.js";
export interface CategoryData {
    categoryTitle: string;
    hacks: StoredHackData[];
    shouldShow?: () => boolean;
}
