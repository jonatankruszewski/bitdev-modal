import React from 'react';
import { render } from '@testing-library/react';
import { BasicModal } from './modal.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicModal />);
  const rendered = getByText('hello from Modal');
  expect(rendered).toBeTruthy();
});
