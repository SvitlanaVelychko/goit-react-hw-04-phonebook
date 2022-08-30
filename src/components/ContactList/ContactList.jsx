import PropTypes from 'prop-types';
import { Contacts, ContactItem, DeleteBtn } from './ContactList.styled';

const ContactList = ({ contacts, handleClick }) => {
    return (
        <Contacts>
            {contacts.map(contact => (
                <ContactItem key={contact.id}>
                    <p>{contact.name}: {contact.number}</p>
                    <DeleteBtn
                        type="button"
                        onClick={() => handleClick(contact.id)}
                    >Delete contact
                    </DeleteBtn>
                </ContactItem>
            ))}
        </Contacts>
    );
};

ContactList.propTypes = {
    filter: PropTypes.arrayOf(PropTypes.object),
    handleClick: PropTypes.func.isRequired,
};

export default ContactList;