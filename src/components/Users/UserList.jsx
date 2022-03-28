import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  //TODO:Kullanıcılar Backend'den Çekilecek

  /*const data = [
    {
      name: "Ahmet",
      surname: "Yılmaz",
      email: "asd@gmail.com",
      phone: "+90 532 123 45 67",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/dashboardUser.png?alt=media&token=f4349db5-cf6d-4cfa-91fb-a56ceb42b01f",
    },
    {
      name: "Ahmet",
      surname: "Yılmaz",
      email: "asd@gmail.com",
      phone: "+90 532 123 45 67",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/dashboardUser.png?alt=media&token=f4349db5-cf6d-4cfa-91fb-a56ceb42b01f",
    },
  ];*/

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  }, []);

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
            <tr className="cursor-pointer transition-colors duration-300 bg-boxColor font-semibold">
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
                <button className="font-bold transition-colors duration-300 hover:text-borderAndOtherRed">
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
