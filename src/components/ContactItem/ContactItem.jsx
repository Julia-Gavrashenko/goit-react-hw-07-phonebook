import PropTypes from 'prop-types';
import { ListItem, Item, ItemButton, ItemSpan } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ info: { name, phone, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <ListItem>
        <ItemSpan>{name} :</ItemSpan> {phone}
      </ListItem>
      <ItemButton type="button" onClick={handleDelete}>
        Delete contact
      </ItemButton>
    </Item>
  );
};

ContactItem.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
