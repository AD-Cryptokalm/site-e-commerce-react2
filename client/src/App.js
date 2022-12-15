// import axios from 'axios';
// import { useEffect } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { UidContext } from './components/context/authContext';
import Routes from './components/Routes'
import './styles/categorie.scss'
import { useDispatch } from "react-redux";
import { getUser } from './actions/userAction';

export default function App() {
  const dispatch = useDispatch();
  const Uid = localStorage.getItem('uid')
  const Token = localStorage.getItem('token')
  const [idCheck, setIdCheck] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      await axios ({
        method:"GET",
        url: `http://localhost:3000/600/users/${Uid}`,
        withCredentials: true,
        headers: {Authorization: `Bearer ${Token}`}
      })
      .then((res) => {
        console.log(res)
        setIdCheck(res.data.id)
        dispatch(getUser(res.data.id))
      })
      .catch((err) => console.log(err))
    }
    fetchData()
  }, [Uid, Token, dispatch])

  
  return (
    <div className="App">
      <UidContext.Provider value={idCheck}>
      <Routes/>
      </UidContext.Provider>
    </div>
  );
}
