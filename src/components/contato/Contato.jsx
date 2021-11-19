import styled from "styled-components";
import React from "react";
import "../../global.scss"
import { ListItem } from "@material-ui/core";
const Container = styled.div`
  height: 90%;
  background: url("../../assets/backgroundcontato.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  border-radius: 10px;
  color: white;
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  border-radius: 20px;
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  border-radius: 20px;
  width: 200px;
  height: 50%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: black;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  
  color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  border-radius: 25px;
    background-color: #000000de;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 50px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contato = () => {
    return (
        <Container id="contato">
            <Wrapper>
                <FormContainer>
                    <Title>
                        Tem perguntas? <br /> Vamos entrar em contato!
                    </Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="Seu Nome" />
                            <Input placeholder="Seu Email" />
                            <Input placeholder="Assunto" />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="Sua Mensagem" />
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src="../../assets/zipzop.png" />
                        <Text>+55 51 99422 6684</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src="../../assets/email.png" />
                        <Text>zique.torres@gmail.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    );
};

export default Contato;