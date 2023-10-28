"use client";
import React from "react";
import styled from "styled-components";
import Button from "./styled-components/Button";
const page = () => {
  const Main = styled.div`
    width: 98vw;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width:998px){
      width:97vw;
      height:100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
  const Center = styled.div`
    width: 55vw;
    height: 80vh;
    border: 2px solid black;
    font-family: "Gilroy";
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    border-radius:6px;

    @media(max-width:998px){
      width:100%;
      height:100%;
    }
  `;
  const Fields = styled.div`
    width: fit-content;
    height: 45%;
  `;
  const Input = styled.input`
    width: 40vw;
    height: 5vh;
    border:1px solid silver;
    outline:none;
    padding:4px;
    border-radius:5px;
    @media(max-width:998px){
      width:50vw;
      height:5vh;
    }
  `;
  const Button = styled.button`
    width: 30vw;
    height: 5vh;
    background-color: royalblue;
    color: white;
    border: none;
    outline:none;
    border-radius:5px;
    cursor:pointer;
  `;

  const Add = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap:7vw;
  `
  const Checkbox = styled.input`
  width:20px;
  height:20px;
  `
  const Heading = styled.h5`
  color:orange;
  cursor:pointer;
  `
  const Box = styled.div`
  width:20%;
  height:fit-content;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:4px;
  @media(max-width:998px){
width:35%;
  }
  `
  return (
    <>
      <Main>
        <Center>
          <h1>Login</h1>
          <Fields>
            <h5>Username</h5>
            <Input placeholder="Enter Username"></Input>
            <h5>Password</h5>
            <Input type="password" placeholder="Enter Password"></Input>
          </Fields>
          <Add>
            <Box>
            <Checkbox type="checkbox"></Checkbox> 
            <h5>Remeber me</h5>
            </Box>

<Heading>Change Password</Heading>
          </Add>
          <Button>Login</Button>
        </Center>
      </Main>
    </>
  );
};

export default page;
