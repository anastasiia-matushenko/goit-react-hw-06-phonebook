import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './contactsActions';
import { contacts } from 'data/initialContacts';

export const contactsReduser = createReducer([...contacts], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [filterContacts]: (state, { payload }) => (state.filter = payload),
});
