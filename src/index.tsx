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

import React from 'react';
import ReactDOM from "react-dom/client";
import './index.scss';
import './designerindex.scss'

import ReactUIDesigner from './ReactUIDesigner';

/** Rendering the application */
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
export default root.render(
  // <React.StrictMode>
  <ReactUIDesigner 
    isCorporation={false} 
    changeImages={() => {}}
    isLogin={false} 
    logoLogin={'./assets/basti/logo_login.png'} 
    logoBig={'./assets/basti/logo_big.png'}
    logoSmall={'./assets/basti/logo_small.png'}
    designerSubscription={undefined}
    appName="demo"
    setShowDesigner={() => {}}
    changeTheme={() => {}}
    uploadCallback={() => {}}
    transferType="all"
    translation={new Map<string, string>()} />,
  // </React.StrictMode>,
)