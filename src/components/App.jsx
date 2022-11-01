import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Message, Subtitle, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { addContact, filterContacts } from 'redux/contacts/contactsSlice';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);

  const dispatch = useDispatch();

  const addContacts = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const newName = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    const result = newName
      ? toast.error(`${name} is already in contacts`, {
        position: 'top-center',
      })
      : dispatch(addContact(newContact))
    return result;
  };

  const filterContactsByName = () => {
    const nameSearch = filterName.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameSearch)
    );
  };

  const contactsFilterList = filterContactsByName();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContacts={addContacts} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filterName} onChange={evt => dispatch(filterContacts(evt.target.value))} />
      {contactsFilterList.length > 0
        ? <ContactsList
          contacts={contactsFilterList}
        />
        : <Message>❌ Your query did not find anything</Message>}
      <ToastContainer />
    </Container>
  );
};
