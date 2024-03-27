import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const BASE_URL = 'http://localhost:5000/api';

const useContactsAPI = () => {
  const { token } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [contacts, setContacts] = useState([]);

  const getContacts = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${BASE_URL}/contact`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.status === 201) {
        //message.success(data.message);
        setContacts(data.contact);
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        //message.error('Registration failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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
        //message.success(data.message);
        setContacts([...contacts, data.contact]);
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        //message.error('Adding contact failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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

      if (res.status === 200) {
        //message.success(data.message);
        setContacts(contacts.filter((contact) => contact._id !== contactId));
      } else if (res.status === 404) {
        setError(data.message);
      } else {
        //message.error('Deleting contact failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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

      if (res.status === 200) {
        //message.success(data.message);

        setContacts(
          contacts.map((contact) =>
            contact._id === contactId ? data.contact : contact
          )
        );
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        //message.error('Updating contact failed');
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
    getContacts,
    addContact,
    deleteContact,
    updateContact,
  };
};

export default useContactsAPI;
