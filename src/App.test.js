import React from 'react';
import { App } from './App';
import ConnectedProductList from './components/ProductList/ProductList';
import { shallow } from 'enzyme';

describe('App component testing', () => {
  const mockProps = {
    location: {
      search: ''
    }
  };
  const wrapper = shallow(<App {...mockProps} />);

  it('App renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('App does`t render ProductList if not correct route', () => {
    // first we find Route with path = '/' and compare to component
    // if you will set component in this way - component={ProductList}
    // test will be - expect(wrapper.find('Route[exact=true][path="/"]').first().prop('component')).toBe(ConnectedProductList);
    // but you use arrow functions so we have to invoke it and compare to ConnectedProductList with queryParams
    expect(
      wrapper
        .find('Route[exact=true][path="/"]')
        .first()
        .prop('component')()
    ).toEqual(<ConnectedProductList queryParams={{}} />);
  });
});
