import React from 'react';
import ProductCard from './ProductCard';
import { shallow } from 'enzyme';

describe('ProductCard component', () => {
  it('ProductCard renders without crashing', () => {
    expect(shallow(<ProductCard />)).toMatchSnapshot();
  });
});
