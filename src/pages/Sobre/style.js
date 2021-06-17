import styled from "styled-components"
import coffe from '../../image/Mundi.jpeg'

const Area = styled.div`
  color: white;
  margin-top:60px;
  
  .fake-img {
    display: block;
    height: 88vh; /* set the height here */
    width: 100%;
    background-image: url("${coffe}");
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: cover; /* make a "best guess" here as a default */
    background-attachment: fixed;
    position: relative;
    text-align: center;
  }

  .About_me {
    width: 40%;
    margin-left: 450px;
    padding-top: 70px;

    h1 {
      font-family: "Roboto Thin";
      font-size: 56px;
      text-shadow: 2px 2px 2px #61dafb;
      :hover{
        opacity:0.8;
      }

      span {
        color: #61dafb;
      }
    }

    P {
      font-size: 24px;
      font-family: popins;
      font-weight: 600;
    }
  }

  p {
    color:#FFF;
    text-shadow:1px 1px 1px black, -1px 1px 1px black,1px 1px 1px black, -1px 1px 1px black;
  }

  .About_me_skills {
    border-radius: 10px;
    width: 50%;
    margin: 15px 50px 0px 100px;
    display: flex;
  }

  .About_me_skills_wrapper {
    border-radius: 10px;
    padding: 10px 10px;
    width: 93%;
    margin-left: 50px;
    margin-bottom: 20px;
    border: 1px solid #61dafb;
    display: flex;

    .wrapper_skills {
      margin-left: 100px;
    }

    .tools {
      color: #FFF;
      font-size: 24px;
      text-shadow: 2.5px 2.5px 2px #61dafb;
      padding-top: 50px;
      margin-left: 100px;
      width: 300px;
    }
  }

  .About_me_tools {
    border-radius: 10px;
    width: 50%;
    margin: 15px 50px 0px 50px;
    display: flex;
  }

  .About_me_tools_wrapper {
    border-radius: 10px;
    padding: 10px 10px;
    width: 93%;
    margin-left: 50px;
    margin-bottom: 20px;
    border: 1px solid #61dafb;
    display: flex;

    .tools {
      color: #FFF;
      font-size: 24px;
      text-shadow: 2.5px 2.5px 2px #61dafb;
      padding-top: 50px;
      margin-left: 100px;
    }
  }


  .About_me_partTwo {
    height: 90vh;

    .Typ {
      margin-left: 450px;
    }
  }

`

export default Area;