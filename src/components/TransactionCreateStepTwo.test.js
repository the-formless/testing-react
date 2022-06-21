import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test('on initial render, pay button is disabled', async () => {
  render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);

  expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();
});

test('if amount and note entered, the pay button becomes enabled', async () => {
  render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);

  userEvent.type(screen.getByPlaceholderText(/amount/i), '50');
  userEvent.type(screen.getByPlaceholderText(/add a note/i), 'dinner');

  expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
});