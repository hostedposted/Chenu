
import type { SweetAlertInput, SweetAlertOptions, SweetAlertResult } from "sweetalert2"
import _Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export * from "sweetalert2"
export const Swal = withReactContent(_Swal)

export class ArgumentFailureError extends Error {
    override name = "ArgumentFailureError"
}

export interface SwalInput {
    value: string
    input?: SweetAlertInput
    title?: string
    placeholder?: string
    validator?: (value: string) => string | null | undefined
    swalOptions?: SweetAlertOptions
}

export async function swalInput ({ value, input = "text", title, placeholder, validator = () => null, swalOptions = {} }: SwalInput): Promise<any> {
    const inputResponse = await Swal.fire({
        title: title ?? "Enter a value",
        html: value,
        input: input ?? "text",
        inputPlaceholder: placeholder ?? "Enter a value",
        inputValidator: (value: string) => (value.trim() === "" ? "Please enter a value." : validator(value)),
        showCancelButton: true,
        ...swalOptions
    })
    if (inputResponse.dismiss != null) throw new ArgumentFailureError()
    return inputResponse.value
}

export namespace InputTypes {
    export async function string (value: string, defaultValue?: string): Promise<string> {
        return String(await swalInput({ value, swalOptions: { inputValue: defaultValue } }))
    }

    export async function integer (value: string, min = 0, max = Infinity, defaultValue?: number): Promise<number> {
        return parseInt(await swalInput({ value, input: "number", validator: value => ((value.trim() !== "") ? (parseInt(value, 10) >= min && parseInt(value, 10) <= max ? null : `Please enter a value between ${min} and ${max}.`) : "Please enter a value."), swalOptions: { inputValue: defaultValue } }), 10)
    }

    export async function float (value: string): Promise<number> {
        return parseFloat(await swalInput({ value, input: "text", validator: value => isNaN(parseFloat(value)) ? "Please enter a decimal." : null }))
    }

    export async function select (value: string, options: string[], defaultValue?: number): Promise<number> {
        return parseInt(await swalInput({ value, title: "Select a value", input: "select", placeholder: "Select...", validator: value => (value !== "") ? "" : "Please select which you'd like to obtain.", swalOptions: { confirmButtonText: "Select", inputOptions: options, inputValue: defaultValue } }), 10)
    }
}

export const success = async (value: string): Promise<SweetAlertResult> =>
    await Swal.fire({
        title: "Success!",
        text: value,
        icon: "success",
        timer: 2000,
        toast: true,
        position: "bottom"
    })

export const error = async (error: string): Promise<SweetAlertResult> =>
    await Swal.fire({
        title: "An Error Occurred!",
        text: error,
        icon: "error",
        timer: 2000,
        toast: true,
        position: "bottom"
    })

export const confirm = async (value: string): Promise<boolean> =>
    !(await Swal.fire({
        title: "Are you sure?",
        text: value,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel"
    })).isDismissed
