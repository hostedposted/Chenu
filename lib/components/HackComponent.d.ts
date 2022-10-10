import type { FunctionalComponent } from "preact";
import { Handler } from "src/hack/hack.js";
interface HackComponentProps {
    name: string;
    description: string;
    handler: Handler<"hack">;
}
declare const HackComponent: FunctionalComponent<HackComponentProps>;
export default HackComponent;
