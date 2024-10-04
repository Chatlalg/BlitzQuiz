//profile page for student

import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios"

const StudentProfile = () => {
  const location = useLocation(); 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const authtoken = localStorage.getItem('auth-token');
            const response = await axios.post('http://localhost:4000/api/auth/getuserdata', 
                { authtoken }, 
                {
                  headers: {
                    'Content-Type': 'application/json' 
                  },
                  withCredentials: true 
                }
              );    console.log(response.data)
        setUserData(response.data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData(); 
  }, [location]);
  return (
    <div>
      student profile page
    </div>
  )
}

export default StudentProfile
