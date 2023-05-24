import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewHomework from '../../molecules/Dashboard/NewHomework.js';

jest.mock('../../../config.js', () => ({
  API_ENDPOINT: 'http://192.168.1.104:8000',
}));

const editableFields = [
    {
      name: "status",
      label: "Estado",
      type: "select",
      options: [
        "PENDIENTE",
        "COMPLETADO",
        "SIN RESPUESTA",
      ]
    },
    {
      name: "topic",
      label: "Tema",
      type: "text",
      required: true,
    },
    {
      name: "details",
      label: "Detalles",
      type: "text",
      required: true,
    },
    {
      name: "time_spent",
      label: "Tiempo dedicado",
      type: "number",
    },
    {
      name: "scheduled_date",
      label: "Fecha programada",
      type: "date",
      required: true,
    },
    {
      name: "request",
      label: "Solicitud",
      type: "select",
      options: [36],
      required: true,
    },
  ];

test('handles form submission', async () => {
  const toggleModalMock = jest.fn();
  render(<NewHomework fields={editableFields} toggleModal={toggleModalMock} />);

  // Fill in the form fields
  const topicInput = screen.getByLabelText('Tema');
  const detailsInput = screen.getByLabelText('Detalles');
  const scheduledDateInput = screen.getByLabelText('Fecha programada');
  const saveButton = screen.getByRole('button', { name: 'Guardar' });

  fireEvent.change(topicInput, { target: { value: 'Test topic' } });
  fireEvent.change(detailsInput, { target: { value: 'Test details' } });
  fireEvent.change(scheduledDateInput, { target: { value: '2023-05-24' } });

  // Mock the fetch API
  const mockFetch = jest.fn().mockResolvedValueOnce({});
  global.fetch = mockFetch;

  // Submit the form
  userEvent.click(saveButton);

  // Assert that the toggleModal function was called
  expect(toggleModalMock).toHaveBeenCalledTimes(1);

  // Assert that the API endpoint was called with the correct data
  expect(mockFetch).toHaveBeenCalledWith(
    expect.stringContaining('/api/auth/login'),
    expect.objectContaining({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      topic: 'Test topic',
      details: 'Test details',
      scheduled_date: '2023-05-24',
        }),
    })
  );
});
