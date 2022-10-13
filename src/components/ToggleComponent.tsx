import type { FunctionalComponent } from "preact"
import { useState } from "preact/hooks"
import { Handler } from "src/hack/hack.js"
import { error as alertError } from "src/utils/swal.js"
import { ArgumentFailureError } from "../utils/swal.js"
import styled from "styled-components"

interface ToggleComponentProps {
    name: string
    handler: Handler<"toggle">
}

const ToggleDivComponent = styled.div`
    --shadow-colored: 0 20px 25px -5px var(--shadow-color), 0 8px 10px -6px var(--shadow-color);
    --ring-offset-shadow: 0 0 rgba(0,0,0,0);
    --ring-shadow: 0 0 rgba(0,0,0,0);
    border-radius: 4px;
    padding: 4px 2px 4px 48px;
    margin-top: 8px;
    margin-right: 12px;
    text-align: center;
    &:nth-child(odd) {
        --shadow-color: #60a5fa;
        background-color: #2563eb;
        box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--shadow-colored);
    }
    &:nth-child(even) {
        --shadow-color: #34d399;
        background-color: #059669;
        box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--shadow-colored);
    }
    &:nth-child(odd) input:checked {
        background-color: #059669;
    }
    &:nth-child(even) input:checked {
        background-color: #2563eb;
    }
`

const ToggleInputComponent = styled.input`
    appearance: none;
    width: 36px;
    margin-left: -40px;
    border-radius: 9999px;
    float: left;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #a1a1aa;
    cursor: pointer;
    margin-top: 1.6px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%223%22 fill=%22%23fff%22/%3E%3C/svg%3E");
    background-position: left center;
    transition: background-position .15s ease-in-out;

    &:focus {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
        outline: 2px solid transparent;
        outline-offset: 2px;
    }

    &:checked {
        background-position: right center;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }
`

const ToggleLabelComponent = styled.label`
    display: inline-block;
    font-weight: 400;
    margin-right: 12px;
    color: white;
    font-size: 16px;
    cursor: pointer;
`

const ToggleComponent: FunctionalComponent<ToggleComponentProps> = ({ name, handler }) => {
    const [toggled, setToggled] = useState<boolean>(false)

    const onChange = async (): Promise<void> => {
        const toggledState = !toggled
        setToggled(toggledState)

        try {
            await handler(toggledState)
        } catch (error) {
            if (error instanceof ArgumentFailureError) return
            void alertError("An error occurred while running the hack. Try refreshing the page, and using the hack again.")
        }
    }

    return (
        <ToggleDivComponent>
            <ToggleInputComponent type="checkbox" role="switch" id={`cheat-menu-toggler-${name}`} checked={toggled} onClick={onChange} />
            <ToggleLabelComponent htmlFor={`cheat-menu-toggler-${name}`}>{name}</ToggleLabelComponent>
        </ToggleDivComponent>
    )
}
export default ToggleComponent
