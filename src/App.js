import React, { Component } from 'react';
import Header from './common/header';
import Detail from './pages/detail/loadable';
import Home from './pages/home';
import store from './store/index';
import Login from './pages/login';
import Write from './pages/write';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'; 

// 这里表示在BrowserRouter中的内容 就是要设定路由了 exact表示一定和path一样才会能跳转 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter> 
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
