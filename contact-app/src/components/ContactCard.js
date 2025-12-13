import React from 'react' 
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
  return (
    <div className='item'>
        <img className='ui avatar image' src={user} alt='user'/>
        <div className='content'>
          <Link to={{pathname:`/contact/${id}`}} state={{contact: props.contact}}>
            <div className='header'>{name}</div>
            <div>{email}</div>
            </Link>
        </div>
            <i 
            className='trash alternate outline icon'
                  style={{color:"red",marginTop: "7px",marginLeft:"10px"}}
            onClick={() => props.clickHandler(id)}      
            ></i>
            <Link to={{pathname:`/edit`}} state={{contact: props.contact}}>
            <i 
            className='edit alternate outline icon'
                  style={{color:"blue",marginTop: "7px"}}   
            ></i>
            </Link>
    </div>
  );
};

export default ContactCard;


// const ContactCard = (props) => {
//     const { id, name, email, phone, address } = props.contact; // Destructure all fields

//     return (
//         <div className='item'>
//             <img className='ui avatar image' src={user} alt='user' />
//             <div className='content'>
//                 <Link to={{ pathname: `/contact/${id}` }} state={{ contact: props.contact }}>
//                     <div className='header'>{name}</div>
//                     <div>{email}</div>
//                     <div>{phone}</div>   {/* Display phone */}
//                     <div>{address}</div> {/* Display address */}
//                 </Link>
//             </div>
//             <i
//                 className='trash alternate outline icon'
//                 style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
//                 onClick={() => props.clickHandler(id)}
//             ></i>
//             <Link to={{ pathname: `/edit` }} state={{ contact: props.contact }}>
//                 <i
//                     className='edit alternate outline icon'
//                     style={{ color: "blue", marginTop: "7px" }}
//                 ></i>
//             </Link>
//         </div>
//     );
// };

// export default ContactCard;