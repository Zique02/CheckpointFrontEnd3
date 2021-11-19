import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;

const Wrapper = styled.div`
  padding: 0px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  
`;

const ListItem = styled.li`
  padding: 0px 0px 0px 0px;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;
const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Btn = styled.a`
    width: 50px;
    height: 50px;
    align-items: center;
    display: flex; 
    justify-content: center;
`;

const Icon = styled.img`
    width: 40px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>
                <Btn href="https://github.com/Zique02">
                    <Icon src="../../assets/github.png" />
                </Btn> 
                <Btn href="https://www.linkedin.com/in/henrique-torres-rosa-469863217/">
                    <Icon src="../../assets/linkedin.png" />
                </Btn> 
          </ListItem>

        </List>
        <Copyright>© 2021 Henrique Torres Rosa. Todos os direitos reservados</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
