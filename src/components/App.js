import React from 'react'
import './App.css';
import Header from './Header.js'
import AddContact from './AddContact.js'
import ContactList from './ContactList.js'
import ContactCard from './ContactCard.js'

function App() {
  let contacts = [
    {
      id: 1,
      name: "Wazid",
      email: "wazidemail@gmail.com"
    },
    {
      id: 2,
      name: "Raushan",
      email: "raushanemail@gmail.com"
    },
    {
      id: 3,
      name: "Amit",
      email: "amitemail@gmail.com"
    }
  ]
  return (
    <div className='ui container'>
     <Header />
     <AddContact />
     <ContactList contact = {contacts}/>
    </div>
  );
}

export default App;
