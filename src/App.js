import React,{useEffect, useState} from 'react';
import ContactList from './Components/ContactList';
import ContactNotify from './Components/ContactNotify';

function App() {

  let [contacts,setContacts] = useState([
    {
        contactName : "Prabhakar",
        contactNumber : "8421424184"
    },
    {
        contactName : "Deepak",
        contactNumber : "9028916675"
    },
    {
        contactName : "Avinash",
        contactNumber : "9028916675"
    },
    {
        contactName : "Shyam",
        contactNumber : "7351254689"
    },
    {
        contactName : "Nilesh",
        contactNumber : "9028816643"
    },
    {
        contactName : "Darshana",
        contactNumber : "9946783125"
    },
    {
        contactName : "Manasi",
        contactNumber : "8846723421"
    },
    {
        contactName : "Ritu",
        contactNumber : "8657893473"
    }
  ]);

  
let [notifyCount,setNotifyCount] = useState(0);


let getNotifyCount = () => {
  let newNotifyCount = contacts.length;
  setNotifyCount(newNotifyCount);
};

useEffect(()=>{
  getNotifyCount();
},[contacts]);

let myName = "Pallavi";

let deleteContactFromList = (index) =>{
  console.log(index);
  console.log(contacts[index]);
  let contactsArray = [...contacts];
  contactsArray.splice(index,1);
  setContacts(contactsArray);
  console.log("Removed from array successfully..");
}

  return (
    <>
      <ContactNotify countContacts = {notifyCount} />
      <div className="contactsDisplay">
      {
          contacts.map((contactInfo,index) => (   
            <ContactList contactObj = {contactInfo} index = {index} onDeleteContact = {deleteContactFromList} />
          ))
      }
      </div>
    </>
  );
}

      export default App;
