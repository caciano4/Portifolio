import styled from "styled-components"

const Area = styled.div`
  color: #FFF;
  height: 600px;
  font-family: 'Roboto', Sans Serif;
  padding: 0px 100px;
  margin-top:100px;
  
  .Flex {
    display: flex;
    justify-content: space-between;
    height:80vh;
    .img {
      width:570px;
      margin-top:60px;
      
      :hover{
        opacity:0.9;
      }
    }
    
  }

  .left {
    margin-bottom: 100px;
    
    button{
      position:absolute;
      left:37%;
      top:70%;
    }
  }

  .LeftHome {
    margin-top: 60px;
    text-align: center;

    h1{
      font-family:"Roboto Thin";
      font-size:56px;
      text-shadow:3px 3px 1px #6c63ff;
      
    }
    h2{
      font-family:"Roboto Thin";
      font-size:51px;
      text-shadow:3px 3px 1px #6c63ff;
      :hover{
        opacity:0.8;
      }

      span{
        color: #6c63ff;
      }
    }

    p {
      color: #FFF;
      font-size: 48px;
      font-family: Palatino;
      font-weight: bolder;
      text-shadow: 2px 0 0 #6c63ff, -2px 0 0 #6c63ff, 0 2px 0 #6c63ff, 0 -2px 0 #6c63ff;
      margin: 0;
    }

    ul {
      display: flex;
    }
    
    
    
    li {
      list-style: none;
      margin-left: 65px;
      
      img{
        transition:ease 1s;
        :hover{
          height:85px;
          width:90px;
          opacity:0.8;
          transition:ease 1s;
        }
      }
    }
    
    img{
      width:70px;
      height:70px;
    }

  }

  .left{
    margin-left: 5rem;
    width:570px;
  }

  
`;
export default Area;