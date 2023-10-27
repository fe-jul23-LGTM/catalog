import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { AppRoutes } from '~routers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
