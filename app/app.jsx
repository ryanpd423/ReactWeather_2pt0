var React = require('react');
var ReactDOM = require('react-dom');
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Main = require('Main');

// import { Main } from 'react'; as of 3-1-2020 unable to get the ES6 syntax to work

/*
 Only thing required by a React Component is
 a render method.
*/

/*
There are 2 types of data in a component, there are
"Props" and there are "State".

Props get passed into a component as you initialize it

State is internally maintained and updated by the Component

A Component shouldn't update its own Props but it can
update its own State

If you're confused whether some data in your component should
be a Prop or a State then just ask yourself if your 
Component will be updating the value of that data as part of a 
Component re-render and if so then that data should be a State
*/

/*
GOAL => Have one component that nests two child components
so that we can maintain the Single Responsibility Principle

Smaller testable components lead to better apps that
have more functionality but w/o complex inflexible code
*/

/*
- Types of Components:

1) Presentational Components:
  - the Child components
  - renders something to the screen. ex: Hello Ryan!
  - or responds to user input in an input field ex: Button click triggers function
  - KEY is that they DO NOT maintain STATE
  - they simply render stuff to browser OR
  - call functions when a user interacts

2) Container Components:
  - the Parent Components
  - Render Children
  - Maintain STATE
  - automatically re-renders its children when its state
  changes and its children rely on it
  - REACT automatically re-renders components that rely
  on a changed state (this is kind of an illusion and due
    mostly in part to how the components are inter-connected, but
    it gives the appearance of this automatic awareness)
*/

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}></Route>
  </Router>,
  document.getElementById('app')
);
