import React from "react";

const ContactNotify = ({countContacts}) => {
    // console.log(props.name);
    console.log("Count Contacts: "+countContacts);
    return <h4>Total contacts are {countContacts} </h4>
};

export default ContactNotify;