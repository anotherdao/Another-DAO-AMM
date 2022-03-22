import React from "react";
import { PanelProps, PushedProps } from "./types";
import { MenuEntry } from ".";
interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
    homeLink: MenuEntry | undefined;
}
declare const Panel: React.FC<Props>;
export default Panel;
