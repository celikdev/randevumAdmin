import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/user/${id}`).then((res) => {
      getUserData();
    });
  };

  return (
    <div className="my-8">
      <table className="w-full text-sm text-left font-Montserrat text-textColor">
        <thead className="text-xs text-textColor uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              İsim
            </th>
            <th scope="col" className="px-6 py-3">
              Soyisim
            </th>
            <th scope="col" className="px-6 py-3">
              E-Posta
            </th>
            <th scope="col" className="px-6 py-3">
              Telefon
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="cursor-pointer transition-colors duration-300 bg-boxColor font-semibold"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {index}
              </th>
              <th
                scope="row"
                className="px-6 py-4 flex items-center gap-2 whitespace-nowrap"
              >
                <img
                  className="bg-background rounded-full w-8 h-8"
                  src={item.userProfilePicture}
                  alt="user-picture"
                />
                {item.userName}
              </th>
              <td className="px-6 py-4">{item.userSurname}</td>
              <td className="px-6 py-4">{item.userEmail}</td>
              <td className="px-6 py-4">{item.userPhone}</td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="font-bold transition-colors duration-300 hover:text-borderAndOtherRed"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
