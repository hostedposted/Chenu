import { ComponentChildren, Fragment, FunctionalComponent } from "preact"
import { useState } from "preact/hooks"
import { CategoryData } from "src/hack/category.js"
import { StoredHackData } from "src/hack/hack.js"
import styled from "styled-components"
import HackComponent from "./HackComponent.js"
import MenuToggler from "./MenuToggler.js"
import ToggleComponent from "./ToggleComponent.js"

interface HackMenuProps {
    hacks?: CategoryData[]
    title: string
    extraHeading?: ComponentChildren
}

const MainDiv = styled.div`
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
    top: ${props => props.visible as boolean ? "0px" : "-40vh"};
    z-index: 1049;
`

const Title = styled.h1`
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    color: #000;
`

const CategoryTitle = styled.h2`
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
`

const HackCollection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: start;
        flex-wrap: flex;
    }
`

const HackMenu: FunctionalComponent<HackMenuProps> = ({ hacks = [], title, extraHeading }) => {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <Fragment>
            <MenuToggler toggled={visible} onToggle={() => setVisible(!visible)} />
            <MainDiv visible={visible} id="cheat-menu">
                <Title>{title}</Title>
                {extraHeading}
                {hacks.map(({ categoryTitle, hacks, shouldShow }) => (
                    ((shouldShow?.()) ?? true)
                        ? (
                            <Fragment key={categoryTitle}>
                                <CategoryTitle>{categoryTitle}</CategoryTitle>
                                <HackCollection>
                                    {hacks.map(hack => (
                                        hack.type === "hack"
                                            ? <HackComponent name={hack.name} description={(hack as StoredHackData<"hack">).description} handler={(hack as StoredHackData<"hack">).handler} />
                                            : <ToggleComponent name={hack.name} handler={(hack as StoredHackData<"toggle">).handler} />
                                    ))}
                                </HackCollection>
                            </Fragment>
                        )
                        : null
                ))}
            </MainDiv>
        </Fragment>
    )
}
export default HackMenu
