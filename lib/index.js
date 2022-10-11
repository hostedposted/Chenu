import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { Fragment, render } from "preact";
import HackMenu from "./components/HackMenu.js";
import hacks from "./hack/hack.js";
import { createGlobalStyle } from "styled-components";
export { withCategory } from "./hack/hack.js";
export * from "./utils/swal.js";
const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
`;
export const create = (element = document.body) => {
    document.querySelectorAll("#cheat-menu, #menu-toggler").forEach(e => e.remove());
    const menuContainer = document.createElement("div");
    render(_jsxs(Fragment, { children: [_jsx(GlobalStyle, {}), _jsx(HackMenu, { title: CHEATMENUCONFIG.title, hacks: hacks })] }), menuContainer);
    element.append(...menuContainer.childNodes);
};
