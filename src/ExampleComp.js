import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export default function ExampleComp(props) {
  const { user } = props;

  console.log('Props ExampleComp', user?.email);
  const [state, setState] = useState(null);

  useEffect(() => {
    if (user?.email) {
      console.log('ExampleComp did update');
      console.log('Data is update');
      console.log(user);
    }
  }, [state]);

  return <Container className="vh-100">Email: {props.user.email}</Container>;
}
