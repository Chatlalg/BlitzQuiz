// Page where student will attempt quiz

import React,{useEffect} from 'react'
import { useNavigate } from 'react-router';

const GiveQuiz = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth-token'); // or fetch the JWT from cookies
        if (!token) {
          throw new Error('No token found');
        }

        // Optionally, verify the token by making an API call
        // await axios.get('/api/auth/verify-token', {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
      } catch (error) {
        // If token is invalid or not found, redirect to login
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);
  return (
    <div>
      attempt quiz
    </div>
  )
}

export default GiveQuiz
