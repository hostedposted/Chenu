import { jsx as _jsx } from "preact/jsx-runtime";
import styled from "styled-components";
import { BsArrowUp, BsArrowDown } from "react-icons/bs/index.esm.js";
const Button = styled.button `
    position: fixed;
    z-index: 10000;
    background-color: #e5e7ebe5;
    border: none;
    top: 0;
    width: 30px;
    height: 30px;
    padding: 0;
`;
const MenuToggler = ({ toggled, onToggle }) => {
    const Icon = toggled ? BsArrowUp : BsArrowDown;
    return (_jsx(Button, Object.assign({ onClick: onToggle, id: "menu-toggler" }, { children: _jsx(Icon, { size: "30px", color: "black" }) })));
};
export default MenuToggler;
