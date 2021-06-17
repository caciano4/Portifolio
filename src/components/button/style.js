import styled from "styled-components"

const Area = styled.div`
  button {
    background-image: linear-gradient(to bottom right,black, darkslateblue);
    color: #FFF;
    padding: 0px 30px;
    border-radius: 10px;
    border: 1px solid #6c63ff;
    font-size: 20px;
    margin-left: 7rem;
    cursor: pointer;
    margin-top:50px;
    transition:ease 0.5s;
    text-shadow:1px 0 0 #6c63ff, -1px 0 0 #6c63ff, 1px 0 0 #6c63ff, -1px 0 0 #6c63ff;
    
    :hover{
      background-image: linear-gradient(to bottom right, darkslateblue, black);
      opacity: 0.6;
      border: 1px solid #61dafb;
      font-size: 21px;
      transition:ease 0.5s;
    }

    a{
      text-decoration: none;
      color:#FFF;
    }
  }

`
export default Area;
