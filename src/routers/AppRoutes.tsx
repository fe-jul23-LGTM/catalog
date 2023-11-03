import { FC } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Layout } from '~components/pages/Layout';
import { Home } from '~components/pages/Home';
import { Cart } from '~components/pages/Cart';
import { PhoneInfo } from '~components/widgets/PhoneInfo';
import { Tablets } from '~components/pages/Tablets';
import { Accessories } from '~components/pages/Accessories';
import { PageNotFound } from '~components/pages/PageNotFound';
import { Favourites } from '~components/pages/Favourites';
import { Phones } from '~components/pages/Phones';

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/phones">
            <Route index element={<Phones/>} />
            <Route path=":phoneId" element={<PhoneInfo />} />
          </Route>
          <Route path="/tablets">
            <Route index element={<Tablets />} />
            <Route path=":phoneId" element={<PhoneInfo />} />
          </Route>
          <Route path="/accessories">
            <Route index element={<Accessories />} />
            <Route path=":phoneId" element={<PhoneInfo />} />
          </Route>
          <Route
            path="/favourites"
            element={<Favourites/>}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
