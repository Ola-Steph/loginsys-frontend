import { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedPage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('/api/protected', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            setMessage(response.data.message);
        }).catch((error) => {
            console.error(error);
            alert('You are not authorized to view this page');
        });
    }, []);

    return <div>{message}</div>;
};

export default ProtectedPage;
