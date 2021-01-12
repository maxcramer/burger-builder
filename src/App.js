import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <p>App.Js burger Builder imported below</p>
        <BurgerBuilder />
      </Layout>

    </div>
  );
}

export default App;
