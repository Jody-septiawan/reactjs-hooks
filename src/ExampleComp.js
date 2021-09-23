import React, { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';

import { UserContext } from './context/userContext';

export default function ExampleComp() {
  const [state, dispatch] = useContext(UserContext);

  console.log(state);

  //   console.log('Props ExampleComp', user?.email);

  //   useEffect(() => {
  //     if (user?.email) {
  //       console.log('ExampleComp did update');
  //       console.log('Data is update');
  //       console.log(user);
  //     }
  //   }, [state]);

  return <Container>Email: {state?.user?.email}</Container>;
}
