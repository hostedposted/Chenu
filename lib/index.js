import { jsx as _jsx } from "preact/jsx-runtime";
import { render } from "preact";
import HackMenu from "./components/HackMenu.js";
import hacks from "./hack/hack.js";
export { withCategory } from "./hack/hack.js";
export * from "./utils/swal.js";
export const create = (element = document.body) => {
    document.querySelectorAll("#cheat-menu, #menu-toggler").forEach(e => e.remove());
    const menuContainer = document.createElement("div");
    render(_jsx(HackMenu, { title: CHEATMENUCONFIG.title, hacks: hacks }), menuContainer);
    element.append(...menuContainer.childNodes);
};
