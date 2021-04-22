import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './views/layout/Layout';

import StartScreen from './views/pages/StartScreen.jsx';

import BookListScreen from './views/pages/book/BookListScreen';
import BookAddScreen from './views/pages/book/BookAddScreen';

import AuthorListScreen from './views/pages/author/AuthorListScreen';
import AuthorAddScreen from './views/pages/author/AuthorAddScreen';

import PublisherListScreen from './views/pages/publisher/PublisherListScreen';
import PublisherAddScreen from './views/pages/publisher/PublisherAddScreen';


const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={StartScreen} />

            <Route path="/authors" exact component={AuthorListScreen} />
            <Route path="/authors/add" exact component={AuthorAddScreen} />

            <Route path="/publishers" exact component={PublisherListScreen} />
            <Route path="/publishers/add" exact component={PublisherAddScreen} />

            <Route path="/books" exact component={BookListScreen} />
            <Route path="/books/add" exact component={BookAddScreen} />

            </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
