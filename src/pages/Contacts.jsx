import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import maleImg from '../assets/male.png';
import femaleImg from '../assets/female.png';
import useContactAPI from '../hooks/useContactAPI';
import pencil from '../assets/pencil.svg';
import trash from '../assets/trash.svg';

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

  return (
    <>
      <div className="container max-w-screen-xl text-white mb-10">
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

        <div className="rounded-3xl px-7 py-4 bg-white max-h-[390px] overflow-y-scroll">
          {contacts.length === 0 ? (
            <p className="text-[20px] leading-[50px]  font-['poppins'] text-gray-600 text-center">
              Not found any contacts
            </p>
          ) : loading ? (
            <p className="text-[20px] leading-[50px]  font-['poppins'] text-gray-600 text-center">
              Loading ...
            </p>
          ) : (
            <table className="w-full  text-left rtl:text-right text-[#083F46] ">
              <thead className="text-xs ">
                <tr className="text-[18px] leading-[50px] font-['poppins'] font-bold">
                  <th scope="col" className="px-3 py-3"></th>
                  <th scope="col" className="px-3 py-3">
                    full name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    gender
                  </th>
                  <th scope="col" className="px-3 py-3">
                    email
                  </th>
                  <th scope="col" className="px-3 py-3">
                    phone number
                  </th>
                  <th scope="col" className="px-3 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => {
                  return (
                    <tr
                      key={contact._id}
                      className="bg-white border-b text-[20px] leading-[50px] font-['poppins'] "
                    >
                      <td className="px-2 py-4 ">
                        <img
                          src={contact.gender === 'male' ? maleImg : femaleImg}
                          className="w-[60px] h-[60px] rounded-full"
                        />
                      </td>
                      <td className="px-3 py-4">{contact.fullName}</td>
                      <td className="px-3 py-4">{contact.gender}</td>
                      <td className="px-3 py-4">{contact.email}</td>
                      <td className="px-3 py-4">{contact.phoneNumber}</td>
                      <td className="px-3 py-4  ">
                        <button>
                          <img src={pencil} className="w-5 mr-5 " />
                        </button>
                        <button>
                          <img src={trash} className="w-5  " />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Contacts;
