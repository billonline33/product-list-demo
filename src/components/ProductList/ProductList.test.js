import React from 'react';
import ConnectedProductList, { ProductList } from './ProductList';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

describe('ProductList component', () => {
  const initialStore = {
    productReducer: {
      ProductList: [],
      currentPageProductList: []
    },
    loadProductList: jest.fn(),
    loadCurrentPage: jest.fn()
  };

  const mockStore = configureStore([thunk]);

  it('Connected ProductList render without crashing', () => {
    expect(
      shallow(<ConnectedProductList store={mockStore(initialStore)} />)
    ).toMatchSnapshot();
  });

  const mockProps = {
    productList: [],

    currentProductList: [
      {
        id: 1,
        price: 1,
        image: '',
        name: 'test',
        description: 'test desc'
      }
    ],

    queryParams: {
      page: '1',
      per_page: '8'
    },

    loadProductList: jest.fn().mockImplementation(() => Promise.resolve()),
    loadCurrentPage: jest.fn()
  };

  const initialState = {
    loading: true,
    pageNumber: 1,
    pageSize: 8
  };

  const wrapper = shallow(<ProductList {...mockProps} />);

  const instance = wrapper.instance();

  const mockProps2 = {
    ...mockProps,
    queryParams: {
      page: undefined,
      per_page: undefined
    }
  };

  it('ProductList component renders without creshing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('ProductList component renders without crashing with undefined queryParams', () => {
    expect(shallow(<ProductList {...mockProps2} />)).toMatchSnapshot();
  });

  it('ProductList state equals initial state', () => {
    expect(instance.state).toEqual(initialState);
  });
});
