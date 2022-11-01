import PropTypes from "prop-types";
import { Button, Item } from "./ContactsItem.styled";
import { deleteContact } from "redux/contacts/contactsSlice";
import { useDispatch } from "react-redux";

export const ContactsItem = ({ idContact, contact, number }) => {
    const dispatch = useDispatch();
    return (
        <Item>
            <span>{contact}: </span><span>{number}</span>
            <Button type="button" onClick={() => dispatch(deleteContact(idContact))}>Delete</Button>
        </Item>
    )
};

ContactsItem.propTypes = {
    idContact: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};