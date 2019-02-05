import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';
import List from './List';

describe('<App />', () => {
    it('renders without crashing', () =>{
        const div= document.createElement('div');
        
        ReactDOM.render(<Card />, div)
        ReactDOM.unmountComponentAtNode(div);

    });
    it('renders without crashing', () => {
        const tree= renderer
        .create(<Card />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })

})