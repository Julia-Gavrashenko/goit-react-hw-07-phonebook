import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsSlice/contactsSlice';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import {
  Form,
  FormField,
  Field,
  ErrorMessage,
  AddContactBtn,
} from './ContactForm.styled';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  phone: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = newContact => {
    const normalizedContactName = newContact.name.toLowerCase();
    const existedContact = contacts.find(
      contact =>
        contact.name && contact.name.toLowerCase() === normalizedContactName
    );

    existedContact
      ? alert('This contact is already in contacts.')
      : dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="p" />
        </FormField>

        <FormField>
          Number
          <Field type="tel" name="phone" />
          <ErrorMessage name="phone" component="p" />
        </FormField>

        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </Form>
    </Formik>
  );
};





