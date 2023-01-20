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

/**
 * Dynamically adds CSS-Stylesheets to the head at runtime
 * @param path - the path to the stylesheet
 * @param type - the type of stylesheet that is added
 * @param appReadyCallback - a callback to set the appready-state
 */
export function addCSSDynamically(path:string, type:"applicationCSS"|"schemeCSS"|"themeCSS"|"factoryCSS", appReadyCallback:() => void) {
    let before = undefined
    for (let link of document.head.getElementsByTagName('link')) {
        if (link.href.includes("application.css")) {
            before = link;
        }
    }

    for (let link of document.head.getElementsByTagName('link')) {
        if (link.href.includes("application.css") && type === "applicationCSS") {
            document.head.removeChild(link);
        }
        else if (link.href.includes("color-schemes") && type === "schemeCSS") {
            document.head.removeChild(link);
        }
        else if (link.href.includes("themes") && type === "themeCSS") {
            document.head.removeChild(link);
        }
    }
    
    const link:HTMLLinkElement = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = path;

    if (before && type !== "applicationCSS") {
        document.head.insertBefore(link, before);
    }
    else {
        document.head.appendChild(link);
    }

    var img = document.createElement('img');
    document.body.appendChild(img);

    img.onerror = img.onload = function() {
        img.onerror = img.onload = null;
        document.body.removeChild(img);
        appReadyCallback()
    };

    img.src = path
}