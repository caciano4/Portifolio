import styled from "styled-components";

const Area = styled.div`
  margin: 2rem 0 0;
  padding: 0;
  height: 4.3rem;
  color: #FFF;
  font-weight: 600;
  font-size: 1.4rem;
  font-family: AppleGothic, sans-serif;
  position: fixed;
  top:-30px;
  left:0;
  width:100%;
  z-index: 99;
  background:black;
  opacity:0.8;

  //border:1px solid red;

  ul {
    display: flex;
    justify-content: center;
    margin-right: 4rem;
  }

  li {
    margin-left: 5.5rem;
    list-style: none;

  }

  a {
    text-decoration: none;
    color: #FFF;
    transition: linear 0.5s;

    /* links visitados */
    :hover {
      font-weight: bold;
      border-bottom: 2px solid #d9d9d9;

      font-size: 26px;
      transition: ease 0.5s;
    }

  }

  .active-purple {
    color: #a9a9a9;
    border-bottom: 2px solid #6c63ff;
    font-size: 27px;

    :hover {
      font-weight: bold;
      border-bottom: 2px solid #6c63ff;
      font-size: 26px;
      transition: ease 0.5s;
      color:#6c63ff;
    }

  }

  .active-red {
    color: #a9a9a9;
    border-bottom: 2px solid #e45a5a;
    font-size: 27px;

    :hover {
      font-weight: bold;
      border-bottom: 2px solid #e45a5a;
      font-size: 26px;
      transition: ease 0.5s;
      color:#e45a5a;
    }
  }

  .active-blue {
    color: #a9a9a9;
    border-bottom: 2px solid #61dafb;
    font-size: 27px;

    :hover {
      font-weight: bold;
      border-bottom: 2px solid #61dafb;
      font-size: 26px;
      transition: ease 0.5s;
      color:#61dafb;
    }
  }

  .active-pink {
    color: #a9a9a9;
    border-bottom: 2px solid hotpink;
    font-size: 27px;

    :hover {
      font-weight: bold;
      border-bottom: 2px solid pink;
      font-size: 26px;
      transition: ease 0.5s;
      color:pink;
    }
  }

`
export default Area;