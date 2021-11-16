import React from 'react';
import { render } from '@testing-library/react';
import { BasicModalConfirm } from './modal-confirm.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicModalConfirm />);
  const rendered = getByText('hello from ModalConfirm');
  expect(rendered).toBeTruthy();
});
