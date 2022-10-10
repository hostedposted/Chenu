import { CategoryData } from "./category.js";
declare const hacks: CategoryData[];
export declare const withCategory: (category: string, func: (ctx: CategoryContext) => void) => void;
export interface CategoryContext {
    hack: (title: string, description: string, func: Handler<"hack">) => void;
    toggle: (title: string, func: Handler<"toggle">) => void;
    shouldShow: (func: () => boolean) => void;
}
export interface StoredHackData<T = "hack" | "toggle"> {
    type: T;
    handler: Handler<T>;
    name: string;
    description: T extends "hack" ? string : undefined;
}
export declare type Handler<T = "hack" | "toggle"> = T extends "hack" ? () => void | Promise<void> : (toggled: boolean) => void | Promise<void>;
export default hacks;
