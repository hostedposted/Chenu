import styled from "styled-components"
import type { FunctionalComponent } from "preact"
import { BsArrowUp, BsArrowDown } from "react-icons/bs/index.esm.js"

interface MenuTogglerProps {
    toggled: boolean
    onToggle: () => void
}

const Button = styled.button`
    position: fixed;
    z-index: 1050;
    background-color: #e5e7ebe5;
    border: none;
    top: 0;
    width: 30px;
    height: 30px;
    padding: 0;
`

const MenuToggler: FunctionalComponent<MenuTogglerProps> = ({ toggled, onToggle }) => {
    const Icon = toggled ? BsArrowUp : BsArrowDown

    return (
        <Button onClick={onToggle} id="menu-toggler">
            <Icon size="30px" color="black" />
        </Button>
    )
}
export default MenuToggler
