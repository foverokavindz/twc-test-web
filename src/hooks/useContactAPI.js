import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_URL;

// The useContactAPI hook provides functions to interact funtions which are related to contacts.
const useContactAPI = () => {
  const { token } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [isModelOpened, setIsModelOpened] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModelOpened(!isModelOpened);
  };

  // The getContacts function fetches the contacts from the server.
  const getContacts = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${BASE_URL}/contact`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch contacts');
      }

      const data = await res.json();

      if (res.status === 200) {
        setContacts(data.data);
      } else if (res.status === 400) {
        setError(data.message);
        console.log('data.message', data.message);
      } else {
        console.log('data.message', data.message);
      }
    } catch (error) {
      setError(error.message);

      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  // The addContact function adds a contact to the server.
  const addContact = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.status === 201) {
        setContacts([...contacts, data.contact]);
        navigate('/contacts');
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        setError('Adding contact failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // The deleteContact function deletes a contact from the server.
  const deleteContact = async (contactId) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${BASE_URL}/contact/${contactId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });
      const data = await res.json();

      if (res.status === 201) {
        setContacts(contacts.filter((contact) => contact._id !== contactId));
        setIsModelOpened(true);
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        setError('Deleting contact failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // The updateContact function updates a contact on the server.
  const updateContact = async (contactId, values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${BASE_URL}/contact/${contactId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log('data.data', data.data);

      if (res.status === 201) {
        setContacts(
          contacts.map((contact) =>
            contact._id === contactId ? data.data : contact
          )
        );

        setIsModelOpened(true);
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        setError('Updating contact failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    contacts,
    isModelOpened,
    toggleModal,
    addContact,
    getContacts,
    deleteContact,
    updateContact,
  };
};
export default useContactAPI;
