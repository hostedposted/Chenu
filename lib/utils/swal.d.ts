import type { SweetAlertInput, SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import _Swal from "sweetalert2";
export * from "sweetalert2";
export declare const Swal: typeof _Swal & import("sweetalert2-react-content").ReactSweetAlert;
export declare class ArgumentFailureError extends Error {
    name: string;
}
export interface SwalInput {
    value: string;
    input?: SweetAlertInput;
    title?: string;
    placeholder?: string;
    validator?: (value: string) => string | null | undefined;
    swalOptions?: SweetAlertOptions;
}
export declare function swalInput({ value, input, title, placeholder, validator, swalOptions }: SwalInput): Promise<any>;
export declare namespace InputTypes {
    function string(value: string, defaultValue?: string): Promise<string>;
    function integer(value: string, min?: number, max?: number, defaultValue?: number): Promise<number>;
    function float(value: string): Promise<number>;
    function select(value: string, options: string[], defaultValue?: number): Promise<number>;
}
export declare const success: (value: string) => Promise<SweetAlertResult>;
export declare const error: (error: string) => Promise<SweetAlertResult>;
export declare const confirm: (value: string) => Promise<boolean>;
