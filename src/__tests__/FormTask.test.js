import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from '../renderWithRedux';
import FormTask from '../components/FormTask/FormTask';

describe('FormTask test', () => {
  it('value input', () => {
    const { getByLabelText } = renderWithRedux(<FormTask />);

    const input = getByLabelText('Task');

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'new task' } });

    expect(input).toHaveValue('new task');
  });
});
