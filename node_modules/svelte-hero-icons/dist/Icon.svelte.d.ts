/** @typedef {typeof __propDef.props}  IconProps */
/** @typedef {typeof __propDef.events}  IconEvents */
/** @typedef {typeof __propDef.slots}  IconSlots */
export default class Icon extends SvelteComponentTyped<{
    [x: string]: any;
    src: any;
    solid?: boolean;
    mini?: boolean;
    micro?: boolean;
    size?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        src: any;
        solid?: boolean;
        mini?: boolean;
        micro?: boolean;
        size?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
