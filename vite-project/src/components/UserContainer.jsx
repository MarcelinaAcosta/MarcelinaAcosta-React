import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

 function UserContainer() {
  return (
    <div>
        <Link to="/user" >
        <button>user </button>
        </Link>
        </div>
  )
}
export default UserContainer;