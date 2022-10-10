import type { FunctionalComponent } from "preact";
import { Handler } from "src/hack/hack.js";
interface ToggleComponentProps {
    name: string;
    handler: Handler<"toggle">;
}
declare const ToggleComponent: FunctionalComponent<ToggleComponentProps>;
export default ToggleComponent;
