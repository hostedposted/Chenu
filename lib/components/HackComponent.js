var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "preact/jsx-runtime";
import { error as alertError } from "src/utils/swal.js";
import { ArgumentFailureError } from "../utils/swal.js";
import styled from "styled-components";
const HackComponentOuterDiv = styled.div `
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
`;
const HackComponentInnerButton = styled.button `
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: white;
`;
const HackComponent = ({ name, description, handler }) => {
    const onClick = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield handler();
        }
        catch (error) {
            if (error instanceof ArgumentFailureError)
                return;
            void alertError("An error occurred while running the hack. Try refreshing the page, and using the hack again.");
        }
    });
    return (_jsx(HackComponentOuterDiv, { children: _jsx(HackComponentInnerButton, Object.assign({ onClick: onClick, title: description }, { children: name })) }));
};
export default HackComponent;
