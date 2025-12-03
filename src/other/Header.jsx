// import React, { useState } from 'react'
// import { setLocalStorage } from '../utils/localStorage'

// const Header = (props,data) => {
// // const[username,setUsername]=useState('')
// // if(!data){
// //     setUsername('Admin')
// // }else{
// //     setUsername(data.firstName)
// // }

// const logOutUser=()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')
//     // window.location.reload()
// }

//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'> 👋 </span></h1>
//       <button onClick={logOutUser} className='bg-red-600 text-white px-6 py-3 rounded-3xl'>LogOut</button>
//     </div>
//   )
// }

// export default Header


// import React, { useEffect, useState } from 'react';

// const Header = (props) => {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (!user || user.type === 'admin') {
//       setUsername('Admin');
//     } else {
//       setUsername(user.firstName);
//     }
//   }, []);

//   const logOutUser = () => {
//     localStorage.removeItem('loggedInUser');
//     props.changeUser('');
//   };

//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl font-medium'>
//         Hello <br />
//         <span className='text-3xl font-semibold'>{username} 👋</span>
//       </h1>
//       <button onClick={logOutUser} className='bg-red-600 text-white px-6 py-3 rounded-3xl'>
//         LogOut
//       </button>
//     </div>
//   );
// };

// export default Header;



// import React, { useEffect, useState } from 'react';

// const Header = (props) => {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const userStr = localStorage.getItem('loggedInUser');
//     console.log('User from localStorage:', userStr); // Debug log
//     const user = userStr ? JSON.parse(userStr) : null;
//     if (!user || user.type === 'admin') {
//       setUsername('Admin');
//     } else if (user.firstName) {
//       setUsername(user.firstName);
//     } else {
//       setUsername('User');
//     }
//   }, []);

//   const logOutUser = () => {
//     localStorage.removeItem('loggedInUser');
//     props.changeUser('');
//   };

//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl font-medium'>
//         Hello <span className='text-3xl font-semibold'>{username.firstName} 👋</span>
//       </h1>
//       <button onClick={logOutUser} className='bg-red-600 text-white px-6 py-3 rounded-3xl'>
//         LogOut
//       </button>
//     </div>
//   );
// };

// export default Header;

const Header = ({ changeUser, data }) => {
  const username = data?.firstName || "Admin";
  console.log("Header loaded with user:", data);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">👋 {username}</span>
      
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white px-6 py-3 rounded-3xl"
      >
        LogOut
      </button>
    </div>
  );
};

export default Header;