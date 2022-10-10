import { render } from "preact"
import HackMenu from "./components/HackMenu.js"
import hacks from "./hack/hack.js"
export { withCategory } from "./hack/hack.js"
export * from "./utils/swal.js"

export const create = (element: HTMLElement = document.body): void => {
    document.querySelectorAll("#cheat-menu, #menu-toggler").forEach(e => e.remove())
    const menuContainer = document.createElement("div")
    render(<HackMenu title={CHEATMENUCONFIG.title} hacks={hacks}/>, menuContainer)
    element.append(...menuContainer.childNodes)
}
