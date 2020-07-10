import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItems.js';
import contactContext from '../context/contact/contactContext.js';

const Contacts = () => {
	const ContactContext = useContext(contactContext);
	const { contacts, filtered } = ContactContext;

	if(contacts.length===0){
		return <h4>Please add a contact</h4>;
	};

	return(
		<Fragment>
			<TransitionGroup>
			{filtered === null
				? contacts.map(contact =>(
					<CSSTransition key={contact.id} timeout={1500} classNames="items">
						<ContactItem contact={contact}/>
					</CSSTransition>
				))
				: contacts.map(contact => (
					<CSSTransition key={contact.id} timeout={1500} classNames='items'>
						<ContactItem id={contact.id} contact={contact}/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</Fragment>
	);
};

export default Contacts;