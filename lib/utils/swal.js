var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import _Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export * from "sweetalert2";
export const Swal = withReactContent(_Swal);
export class ArgumentFailureError extends Error {
    constructor() {
        super(...arguments);
        this.name = "ArgumentFailureError";
    }
}
export function swalInput({ value, input = "text", title, placeholder, validator = () => null, swalOptions = {} }) {
    return __awaiter(this, void 0, void 0, function* () {
        const inputResponse = yield Swal.fire(Object.assign({ title: title !== null && title !== void 0 ? title : "Enter a value", html: value, input: input !== null && input !== void 0 ? input : "text", inputPlaceholder: placeholder !== null && placeholder !== void 0 ? placeholder : "Enter a value", inputValidator: (value) => (value.trim() === "" ? "Please enter a value." : validator(value)), showCancelButton: true }, swalOptions));
        if (inputResponse.dismiss != null)
            throw new ArgumentFailureError();
        return inputResponse.value;
    });
}
export var InputTypes;
(function (InputTypes) {
    function string(value, defaultValue) {
        return __awaiter(this, void 0, void 0, function* () {
            return String(yield swalInput({ value, swalOptions: { inputValue: defaultValue } }));
        });
    }
    InputTypes.string = string;
    function integer(value, min = 0, max = Infinity, defaultValue) {
        return __awaiter(this, void 0, void 0, function* () {
            return parseInt(yield swalInput({ value, input: "number", validator: value => ((value.trim() !== "") ? (parseInt(value, 10) >= min && parseInt(value, 10) <= max ? null : `Please enter a value between ${min} and ${max}.`) : "Please enter a value."), swalOptions: { inputValue: defaultValue } }), 10);
        });
    }
    InputTypes.integer = integer;
    function float(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return parseFloat(yield swalInput({ value, input: "text", validator: value => isNaN(parseFloat(value)) ? "Please enter a decimal." : null }));
        });
    }
    InputTypes.float = float;
    function select(value, options, defaultValue) {
        return __awaiter(this, void 0, void 0, function* () {
            return parseInt(yield swalInput({ value, title: "Select a value", input: "select", placeholder: "Select...", validator: value => (value !== "") ? "" : "Please select which you'd like to obtain.", swalOptions: { confirmButtonText: "Select", inputOptions: options, inputValue: defaultValue } }), 10);
        });
    }
    InputTypes.select = select;
})(InputTypes || (InputTypes = {}));
export const success = (value) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Swal.fire({
        title: "Success!",
        text: value,
        icon: "success",
        timer: 2000,
        toast: true,
        position: "bottom"
    });
});
export const error = (error) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Swal.fire({
        title: "An Error Occurred!",
        text: error,
        icon: "error",
        timer: 2000,
        toast: true,
        position: "bottom"
    });
});
export const confirm = (value) => __awaiter(void 0, void 0, void 0, function* () {
    return !(yield Swal.fire({
        title: "Are you sure?",
        text: value,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel"
    })).isDismissed;
});
