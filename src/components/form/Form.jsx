import { useState } from 'react';

// import {nanoid} from "nanoid";

const Form = ({onSubmit})=>{
//  nanoid()

  const [name,setName]= useState('');
  const[number, setNumber]= useState('');





 const handelChange = e =>{
   const {name, value} = e.target;
  
switch(name){
  case 'name':
  setName(value)
  break
  case'number':
  setNumber(value)
  break
  default:
    return
}

 }

  const handleSubmit = (e) => {
  e.preventDefault();
  onSubmit(name,number)
  reset()
}
  
const reset= () =>{
  setName('')
  setNumber('')
  
}

return(
<div>
      <h1>Phonebook</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name
        <input type="text" 
        value={name}
        onChange={ handelChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required/>  
      </label>
      <label htmlFor="">Number 
      <input type="tel"
      value={number}
      onChange={handelChange}
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required />
      </label>
      <button>Add contact</button>
     </form>
    <div>
      <h2>Contacts</h2>
      
    </div>
    </div>
)

}
 






export default Form
