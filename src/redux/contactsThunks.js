import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://664e3267fafad45dfadf5b45.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
});

export const removeContact = createAsyncThunk('contacts/removeContact', async (contactId) => {
  await axios.delete(`${API_URL}/${contactId}`);
  return contactId;
});
