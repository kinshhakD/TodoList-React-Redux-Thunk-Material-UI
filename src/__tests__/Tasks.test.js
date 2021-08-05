import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Tasks from '../components/Tasks/Tasks';
import { renderWithRedux } from '../renderWithRedux';
import store from '../redux/index';

describe('test <Tasks>', () => {
  it('test render list', () => {
    const { debug, getByTestId, getByText } = render(<Provider store={store}><Tasks /></Provider>);

    expect(getByText(/Изучать JavaScript/i)).toBeInTheDocument();
  });
});
