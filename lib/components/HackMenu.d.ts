import { ComponentChildren, FunctionalComponent } from "preact";
import { CategoryData } from "../hack/category.js";
interface HackMenuProps {
    hacks?: CategoryData[];
    title: string;
    extraHeading?: ComponentChildren;
}
declare const HackMenu: FunctionalComponent<HackMenuProps>;
export default HackMenu;
