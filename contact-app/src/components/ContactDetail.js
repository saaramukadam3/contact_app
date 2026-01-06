import React from 'react' 
import user from '../images/images.jpg'
import { Link, useLocation } from 'react-router-dom';


const ContactDetail = () => {
    const location = useLocation();
    const {name, email, phone, address}= location.state.contact;
  return (
    <div className='main'>
        <div className='ui card centered'>
            <div className='image'>
                <img src={user} alt='user' />
            </div>
            <div className='content'>
                <div className='header'>{name}</div>
                <div className='description'>{email}</div>
                <div className='description'>{phone}</div>
                <div className='description'>{address}</div>
            </div>
        </div>
        <div className='center-div'>
            <Link to='/'>
            <button className='ui button blue center'>
                Back to Contact List
            </button>
            </Link>
        </div>
    </div>
  );
};

export default ContactDetail;
