import React from 'react';

//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
//make the List component available
import List from './List';
import renderer from 'react-test-renderer';
import './Card';


describe('<App />', () =>{

it('renders without crashing', () => {
    const div =document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders without crashing', () =>{
    const tree= renderer
    .create(<List />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

});