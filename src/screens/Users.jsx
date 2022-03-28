import React from "react";
import { LeftBar } from "../components/main";
import { Container } from "../components/UI";
import UserList from "../components/Users/UserList";

const Users = () => {
  return (
    <Container>
      <LeftBar />
      <div className="pl-8 pt-8 w-10/12">
        <h1 className="text-textColor font-Montserrat font-semibold text-lg">
          Kullanıcılar
        </h1>
        <UserList />
      </div>
    </Container>
  );
};

export default Users;
