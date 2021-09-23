//import useEffect here
import { useEffect, useContext } from 'react';

import { UserContext } from './context/userContext';

import { Button } from 'react-bootstrap';

export default function Welcome() {
  const [_, dispatch] = useContext(UserContext);

  // Create DidMount & WillUnmount with useEffect
  // inside it can print "Welcome Component Did Mount" & "Welcome Component Will Unmount"

  //   useEffect(() => {
  //     console.log('Welcome Component Did Mount');

  //     return () => {
  //       console.log('Welcome Component Will Unmount');
  //     };
  //   });

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">
      Welcome
      <Button variant="dark" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
