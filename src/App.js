import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';



function App() {


  const [users, setUsers] = useState([])

  const loadusers = async () => {
    console.log("Before")
    const response = await fetch("https://api.github.com/users")
    const jsonResponse = await response.json()
    console.log("Here")
    setUsers(jsonResponse)
  }

  return (
    <div className="App">
      <div>
        <Container fluid>
          <Navbar expand="lg" variant="dark" bg="secondary">
            <Container>
              <h1 style={{ color: 'black' }} className="txt" >Task-2</h1>
            </Container>
          </Navbar>
        </Container>
      </div>

      <div>
        <Container fluid>
          <Button className=' btun' variant="success" onClick={loadusers} style={{ color: 'black' }}><b>Click Here</b></Button>
        </Container>
      </div>

     
      <div className='dsa mt-5'>
        {
          users.map((v, i) => {
            return <div className="card" style={{ width: "18rem" }}>
              <img src={v.avatar_url} className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">{v.login}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          })
        }

      </div>
    </div>

  );
}

export default App;