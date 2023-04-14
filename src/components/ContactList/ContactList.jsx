import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactContainer, List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';






export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactContainer>
      <List>
        {filteredContacts?.map(contact => (
          <ContactItem key={contact.id} info={contact}></ContactItem>
        ))}
      </List>
    </ContactContainer>
  );
};




  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // console.log(contacts)
  // console.log(filter)

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(
  //     contact =>
  //       contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };


  // const filteredContacts = getFilteredContacts();
   