import { useEffect, useState } from 'react';
import Home from './pages/Home'
import api from './service/api'

function App() {

  const[users,setUsers] = useState( [] )

  async function loadUsers(){
    await api.get('/users')
    .then(res => {
      setUsers(res.data)
    })
  }

  useEffect(() => {
    loadUsers();
  }, [])


  return (
    <Home />
  );
}

export default App;
