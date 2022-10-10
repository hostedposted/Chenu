import type { FunctionalComponent } from "preact";
interface MenuTogglerProps {
    toggled: boolean;
    onToggle: () => void;
}
declare const MenuToggler: FunctionalComponent<MenuTogglerProps>;
export default MenuToggler;
