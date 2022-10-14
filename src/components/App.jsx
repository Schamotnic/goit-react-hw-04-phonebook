

import { useState } from 'react';
import { nanoid } from "nanoid";
import Form from "./form/Form"
import Filter from "./filter/Filter"
import Contacts from "./contacts/Contacts"
import {AppWrapper} from "./AppStyle";
import LocalStorageHooks from "../Hooks/LocalStoregeHooks"

const App = () => {
  
  const [contacts,setContacts] = LocalStorageHooks('contacts',[]);
  const[filter, setFilter] = useState('');
  
 const formSubmitHandler = (name, number) =>{ 
   const newData ={id:nanoid(),name,number}
  contacts.some(contact => contact.name === name) 
  ? alert(`${name} is alredy in contacts`)
  :setContacts(state => [...state, newData])

  console.log(name)
}
  
  
   
   

 const  visibleContacts =() =>{
  
   return contacts.filter((contacts) => contacts.name.toLowerCase().includes(filter.toLowerCase().trim()))
 } 
    
  
  const changeFilter= (e) =>{
    setFilter( e.currentTarget.value)
  }
  const deleteContact= (contactsId) =>{
    setContacts(contacts.filter(li => li.id !== contactsId) )
  } 
  

  const searchContacts =visibleContacts()
return (
  <AppWrapper>
  <Form onSubmit={formSubmitHandler}/>
 <Contacts contacts={searchContacts} onDelete={deleteContact} />
 <Filter value={filter} onChange={changeFilter}/>
 </AppWrapper>
  )
}
export default App;


   
  
   
    
   
      
      
      
      
  
 


