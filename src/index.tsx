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
import ReactDOM from 'react-dom';
import './index.scss';
import './designerindex.scss'

import ReactUIDesigner from './ReactUIDesigner';

export default ReactDOM.render(
  // <React.StrictMode>
  <ReactUIDesigner 
    isCorporation={false} 
    changeImages={() => {}}
    isLogin={false} 
    logoLogin={process.env.PUBLIC_URL + '/assets/logo_login.png'} 
    logoBig={process.env.PUBLIC_URL + '/assets/logo_big.png'}
    logoSmall={process.env.PUBLIC_URL + '/assets/logo_small.png'}
    designerSubscription={undefined}
    appName="demo"
    setShowDesigner={() => {}}
    changeTheme={() => {}}
    uploadCallback={() => {}}
    transferType="all" />,
  // </React.StrictMode>,
  document.getElementById('root')
)