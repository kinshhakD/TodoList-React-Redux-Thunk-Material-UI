import React from 'react';
import '@testing-library/jest-dom';
import { render } from 'react-dom/cjs/react-dom.development';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from '../renderWithRedux';
import FormTask from '../components/FormTask/FormTask';

describe('FormTask test', () => {
  it('value input', () => {
    const { getByLabelText, debug } = renderWithRedux(<FormTask />);

    const fn = jest.fn();

    const input = getByLabelText('Task');

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'new task' } });

    expect(input).toHaveValue('new task');
  });
});
