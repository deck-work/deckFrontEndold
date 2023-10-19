// import React from 'react';
// import Login from "../../../login";



// function Header() {
//   // Check if user information is available in localStorage
//   const userName = localStorage.getItem('userName');
//   const userPic = localStorage.getItem('userPic');
//   const isAuthenticated = userName && userPic;

//   const handleLogout = () => {
//     // Clear user information from localStorage
//     localStorage.removeItem('userName');
//     localStorage.removeItem('userPic');
//     localStorage.removeItem('userEmail');
//   };

//   return (
//     <div className="header">
//       <h3>DECK</h3>
//       {isAuthenticated ? (
//         <div className="user-info">
//           <img src={userPic} alt="Profile Pic" className="profile-pic" />
//           <span className="user-name">{userName}</span>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <Login />
//       )}
//     </div>
//   );
// }

// export default Header;

import React from 'react';
import Login from '../../../login';

function Header() {
  // Check if user information is available in localStorage
  const userName = localStorage.getItem('userName');
  const userPic = localStorage.getItem('userPic');
  const isAuthenticated = userName && userPic;

  return (
    <div className="header">
      <h3>DECK</h3>
      {isAuthenticated && (
        <div className="user-info">
          <img src={userPic} alt="Profile Pic" className="profile-pic" />
          <span className="user-name">{userName}</span>
        </div>
      )}
    </div>
  );
}

export default Header;

