/* Copyright 2022 SIB Visions GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import React, { FC, useState, createContext, useMemo, useEffect, useContext, ReactNode } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import { variableContext } from "../../VariableProvider";
import getSettingsFromCSSVar from "./GetSettingsFromCSSVar";

// Interface for the topbar-context
export interface TopBarContextType {
    show: Function
    hide: Function
}

/** A topbar context, so other components which use this context can call the show and hide functions */
export const TopBarContext = createContext<TopBarContextType>({
    show: () => {},
    hide: () => {}
});

/**
 * Shows the topbar and after the promise is fulfilled, the topbar disappears
 * @param promise - the promise which is being sent
 * @param topbar - the topbar to display
 * @returns 
 */
export function showTopBar(promise: Promise<any>, topbar: TopBarContextType) {
    topbar.show();
    return promise.finally(() => topbar.hide());
};

interface TopBarProps {
    children: ReactNode;
}

// Shows a topbar at the top of the browser when a promise is being processed.
const TopBar:FC<TopBarProps> = ({children}) => {
    /** The context to gain access to the variables, defaultValues and more. */
    const context = useContext(variableContext);

    /** True, if the topbar is currently visible */
    const [show, setShow] = useState(false);

    /** A flag to know if the topbar design was changed by the designer */
    const [designerTopbarChanged, setDesignerTopbarChanged] = useState<boolean>(false);

    // "Subscribes" to topbar color change.
    useEffect(() => {
        context.updateTopbarColors = () => setDesignerTopbarChanged(prevState => !prevState);

        return () => {
            context.updateTopbarColors = () => {}
        }
    }, [])

    /** Loads the topbar css settings */
    const topbarSettings = useMemo(() => {
        return getSettingsFromCSSVar({
            barColors: {
                cssVar: '--topbar-colors',
                transform: 'csv'
            },
            shadowBlur: {
                cssVar: '--topbar-shadow-blur',
                transform: 'float'
            },
            barThickness: {
                cssVar: '--topbar-thickness',
                transform: 'float'
            },
            shadowColor: '--topbar-shadow-color'
        })
    }, [designerTopbarChanged])

    /** Sets the topbar config */
    useEffect(() => {
        TopBarProgress.config({
            barColors: Object.fromEntries((topbarSettings.barColors as string[]).map((v, idx, a) => [idx / (a.length - 1), v])),
            shadowBlur: topbarSettings.shadowBlur,
            barThickness: topbarSettings.barThickness,
            shadowColor: topbarSettings.shadowColor
        });
    }, [topbarSettings])

    return <TopBarContext.Provider value={{
        show: () => setShow(true),
        hide: () => setShow(false)
    }} >
        {children}
        {show ? <TopBarProgress /> : null }
    </TopBarContext.Provider>
}

export default TopBar;