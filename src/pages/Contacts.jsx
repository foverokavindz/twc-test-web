import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import maleImg from '../assets/male.png';
import femaleImg from '../assets/female.png';
import useContactAPI from '../hooks/useContactAPI';

const Contacts = () => {
  const {
    contacts,
    loading,
    error,
    getContacts,
    deleteContact,
    updateContact,
  } = useContactAPI();

  useEffect(() => {
    getContacts();
  }, []);

  console.log('contacts   ', contacts);

  return (
    <>
      <div className="container max-w-screen-xl text-white">
        <div className="flex flex-row justify-between items-center mb-10">
          <h1 className=" text-[50px] leading-[73px] font-['poppins'] font-bold ">
            Contacts
          </h1>
          <Link
            to="new"
            className="px-12 py-1  border-[2px] rounded-full font-['poppins']  text-[1.438rem] leading-[3.125rem]   text-white "
          >
            add new contact
          </Link>
        </div>

        <div className="rounded-3xl p-3 bg-white">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  full name
                </th>
                <th scope="col" className="px-6 py-3">
                  gender
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  phone number
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
