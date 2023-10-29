import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '~context/Theme';

import { AppRoutes } from '~routers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </StrictMode>,
);
