import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LogIn from './LogIn';

test('handles login submission', async () => {
  // Mock the fetch function
  const mockFetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
    })
  );
  global.fetch = mockFetch;

  // Render the component
  render(<LogIn />);

  // Fill in the email and password fields
  const emailInput = screen.getByRole('textbox', { name: 'Email' });
  const passwordInput = screen.getByRole('textbox', { name: 'Password' });
  const loginButton = screen.getByRole('button', { name: 'Iniciar sesión' });

  fireEvent.change(emailInput, { target: { value: 'juli@juli.com' } });
  fireEvent.change(passwordInput, { target: { value: '123abc' } });

  // Submit the form
  userEvent.click(loginButton);

  // Wait for the login request to complete
  await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));

  // Assert that the fetch function was called with the correct data
  expect(mockFetch).toHaveBeenCalledWith(
    expect.stringContaining('/api/auth/login'),
    expect.objectContaining({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'juli@juli.com',
        password: '123abc',
      }),
    })
  );
});
