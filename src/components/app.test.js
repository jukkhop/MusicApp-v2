import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import { makeStore } from '../store/store.js'
import App from './app.js'

let store = makeStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App store={store} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
})

const wrapper = shallow(<App store={store} />);

describe('(Component) App', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  })
})