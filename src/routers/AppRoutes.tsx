import { FC } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Layout } from '~components/pages/Layout';
import { Home } from '~components/pages/Home';
import { Cart } from '~components/pages/Cart';
import { Phones } from '~components/pages/Phones';
import { Tablets } from '~components/pages/Tablets';
import { Accessories } from '~components/pages/Accessories';
import { PageNotFound } from '~components/pages/PageNotFound';
import { Favourites } from '~components/pages/Favourites';

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/phones">
            <Route index element={<Phones />} />
            <Route path=":phoneId" element={<h1>phone about</h1>} />
          </Route>
          <Route path="/tablets">
            <Route index element={<Tablets />} />
            <Route path=":tabletId" element={<h1>tablet about</h1>} />
          </Route>
          <Route path="/accessories">
            <Route index element={<Accessories />} />
            <Route path=":accessoryId" element={<h1>accessory about</h1>} />
          </Route>
          <Route
            path="/favourites"
            element={<Favourites/>}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path='*' element={<PageNotFound />}/>
        </Route>
      </Routes>
    </Router>
  );
};
