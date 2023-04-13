import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { GlobalStyle } from '../GlobalStyle';
import { ContactListTitle, FormTitle, ContactsLayout } from './App.styled';

import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading)
  // const error = useSelector(selectError)
  //  const contacts = useSelector(selectContacts);
  

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);



  return (
    <ContactsLayout>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      <ContactListTitle>Contacts</ContactListTitle>
      <ContactFilter />

      {/* {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 && }
       */}
      <ContactList />
      <GlobalStyle />
    </ContactsLayout>
  );
};
