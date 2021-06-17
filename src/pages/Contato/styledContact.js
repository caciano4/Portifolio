import styled from 'styled-components'

const AreaContact = styled.section`
  margin-top:100px;
  
  a{
    color:gray;
  }
  
  .all-contacts{
    display:flex;
    justify-content: space-around;
    color:#FFF;
  }
  
  .left {

    .carta {
      width: 600px;
    }
  }
  
  .right{
    margin-right:100px;
    
    h1{
      font-family:"Roboto Thin";
      font-size:50px;
      text-shadow:3px 3px 1px #e45a5a;
      margin:90px 0 30px 0;
      text-align:center;

      :hover{
        opacity: 0.8;
      }
    }
    h5{
      font-family:"Roboto Thin";
      font-size:16px;
      text-shadow:1.3px 1.3px 1px #e45a5a;
    }

    p {
      color: #FFF;
      font-size: 23px;
      font-family: Palatino;
      font-weight: bolder;
      margin-bottom: 30px;
      text-shadow:1px 2px 2px gray, -1px 2px 2px gray,1px 2px 2px gray, -1px 2px 2px gray;
      text-align:center;
    }
  }
  
  .right-contacts{
    display: flex;
    justify-content: space-around;
    text-align: center;
    
    img{
      width:60px;
      transition:ease 0.7s;
      
      :hover{
        width:80px;
        opacity:0.8;
        transition:ease 1s;
      }
    }
  }
  
  .right-contacts-flex{
    display:flex;
  }
  
  .right-contacts-icon{
    display: flex;
    justify-content:space-around;
  }
  
`

export default AreaContact;