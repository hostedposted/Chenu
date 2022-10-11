import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { Fragment } from "preact";
import { useState } from "preact/hooks";
import styled from "styled-components";
import HackComponent from "./HackComponent.js";
import MenuToggler from "./MenuToggler.js";
import ToggleComponent from "./ToggleComponent.js";
const MainDiv = styled.div `
    padding: 28px;
    position: fixed;
    width: 100%;
    left: 0;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    height: 40vh;
    overflow-y: scroll;
    background-color: #e5e7ebe5;
    top: ${props => props.visible ? "0px" : "-40vh"};
    z-index: 1049;
`;
const Title = styled.h1 `
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    color: #000;
`;
const CategoryTitle = styled.h2 `
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: center;
    color: #000;
    @media (min-width: 768px) {
        text-align: left;
    }
`;
const HackCollection = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: start;
        flex-wrap: flex;
    }
`;
const HackMenu = ({ hacks = [], title, extraHeading }) => {
    const [visible, setVisible] = useState(false);
    return (_jsxs(Fragment, { children: [_jsx(MenuToggler, { toggled: visible, onToggle: () => setVisible(!visible) }), _jsxs(MainDiv, Object.assign({ visible: visible, id: "cheat-menu" }, { children: [_jsx(Title, { children: title }), extraHeading, hacks.map(({ categoryTitle, hacks, shouldShow }) => {
                        var _a;
                        return (((_a = (shouldShow === null || shouldShow === void 0 ? void 0 : shouldShow())) !== null && _a !== void 0 ? _a : true)
                            ? (_jsxs(Fragment, { children: [_jsx(CategoryTitle, { children: categoryTitle }), _jsx(HackCollection, { children: hacks.map(hack => (hack.type === "hack"
                                            ? _jsx(HackComponent, { name: hack.name, description: hack.description, handler: hack.handler })
                                            : _jsx(ToggleComponent, { name: hack.name, handler: hack.handler }))) })] }, categoryTitle))
                            : null);
                    })] }))] }));
};
export default HackMenu;
