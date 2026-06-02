import React, {
  useEffect,
} from 'react';

import Routes
from './navigation/routes';

import {
  initDatabase,
} from './database/database';

export default function App() {

  useEffect(() => {

    initDatabase();

  }, []);

  return <Routes />;
}
