import type { FunctionalComponent } from "preact"
import { Handler } from "src/hack/hack.js"
import { error as alertError } from "src/utils/swal.js"
import { ArgumentFailureError } from "../utils/swal.js"
import styled from "styled-components"

interface HackComponentProps {
    name: string
    description: string
    handler: Handler<"hack">
}

const HackComponentOuterDiv = styled.div`
    --shadow-colored: 0 20px 25px -5px var(--shadow-color), 0 8px 10px -6px var(--shadow-color);
    --ring-offset-shadow: 0 0 rgba(0,0,0,0);
    --ring-shadow: 0 0 rgba(0,0,0,0);
    text-transform: capitalize;
    border-radius: 4px;
    padding: 6px 16px;
    text-align: center;
    border: none;
    margin-right: 12px;
    margin-top: 8px;
    font-size: 16px;
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
`

const HackComponentInnerButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: white;
`

const HackComponent: FunctionalComponent<HackComponentProps> = ({ name, description, handler }) => {
    const onClick = async (): Promise<void> => {
        try {
            await handler()
        } catch (error) {
            if (error instanceof ArgumentFailureError) return
            void alertError("An error occurred while running the hack. Try refreshing the page, and using the hack again.")
        }
    }

    return (
        <HackComponentOuterDiv>
            <HackComponentInnerButton onClick={onClick} title={description}>
                {name}
            </HackComponentInnerButton>
        </HackComponentOuterDiv>
    )
}
export default HackComponent
