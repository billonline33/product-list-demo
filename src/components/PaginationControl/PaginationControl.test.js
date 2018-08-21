import React from 'react';
import PaginationControl from './PaginationControl';
import { shallow } from 'enzyme';

describe('PaginationControl component', () => {
  const mockProps = {
    pageNumber: 1,
    pageSize: 8,
    totalProducts: 16,
    maxPageNumbersToShow: 4
  };

  let wrapper = shallow(<PaginationControl {...mockProps} />);

  it('PaginationControl renders without crashing', () => {
    expect(shallow(<PaginationControl {...mockProps} />)).toMatchSnapshot();
  });

  it('PaginationControl first link has class listing_navigation__disabled if pageNumber = 1', () => {
    expect(wrapper.props().children[0].props.className).toEqual(
      'listing_navigation__disabled'
    );
  });

  const mockProps2 = {
    pageNumber: 8,
    pageSize: 8,
    totalProducts: 64,
    maxPageNumbersToShow: 4
  };

  const wrapper2 = shallow(<PaginationControl {...mockProps2} />);
  it('PaginationControl last link has class listing_navigation__disabled if pageNumber = lastPage', () => {
    expect(wrapper2.props().children[0].props.className).toEqual('');
    expect(wrapper2.props().children[2].props.className).toEqual(
      'listing_navigation__disabled'
    );
  });
});
