import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddNews from '../src/components/addNews/addNews';
import GetNews from './components/getNews/getNews'
import Menu from '../src/components/Menu/Menu'

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Menu />
          </Route>
          <Route exact path="/addNews">
              <AddNews />
          </Route>
          <Route exact path="/getNews">
              <GetNews />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}