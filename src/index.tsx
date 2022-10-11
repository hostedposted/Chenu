import { Fragment, render } from "preact"
import HackMenu from "./components/HackMenu.js"
import hacks from "./hack/hack.js"
import { createGlobalStyle } from "styled-components"
export { withCategory } from "./hack/hack.js"
export * from "./utils/swal.js"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
`

export const create = (element: HTMLElement = document.body): void => {
    document.querySelectorAll("#cheat-menu, #menu-toggler").forEach(e => e.remove())
    const menuContainer = document.createElement("div")
    render(<Fragment>
        { /* @ts-expect-error */ }
        <GlobalStyle />
        <HackMenu title={CHEATMENUCONFIG.title} hacks={hacks}/>
    </Fragment>, menuContainer)
    element.append(...menuContainer.childNodes)
}
