import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/default-scheme.scss';
import './styles/basti.scss';
import ReactUIDesigner from './ReactUIDesigner';

export default ReactDOM.render(
  // <React.StrictMode>
  <ReactUIDesigner/>,
  // </React.StrictMode>,
  document.getElementById('root')
)
