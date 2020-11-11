import React, { Component } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f6f7d4;
  margin-top: 4rem;
  padding: 2%;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  



  @media (min-width: 736px) {
    flex-wrap: wrap;
  }
  @media (max-width: 1225px) {
    justify-content: flex-start;
    align-items: center;
  }


`;

export default CardContainer;