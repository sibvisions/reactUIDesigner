import React from 'react';
import ReactDOM from 'react-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/default.scss';
import './styles/basti.scss';
import './index.scss';
import ReactUIDesigner from './ReactUIDesigner';

export default ReactDOM.render(
  // <React.StrictMode>
  <ReactUIDesigner isCorporation={false} />,
  // </React.StrictMode>,
  document.getElementById('root')
)
