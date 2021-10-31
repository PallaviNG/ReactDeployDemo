import React from "react";

const ContactList = ({contactObj,index,onDeleteContact}) =>{

    // let [contacts,setContacts] = useState(pContacts);
    let displayContact = () =>{
        console.log(contactObj.contactName)
        console.log(contactObj.contactNumber)
        console.log(index)
    }

    let deleteContact =(index) => {
        console.log(index);
        onDeleteContact(index);
    }

    return(
        <div className="contactsDisplay">
            <div className="contactBox">
                <p>{contactObj.contactName}</p>
                <p>{contactObj.contactNumber}</p>
                <p>{index}</p>
                <button onClick={displayContact}>Click</button>
                <button onClick={() => deleteContact(index)} >Delete Contact</button>
            </div>
        </div>
    );
}

export default ContactList;