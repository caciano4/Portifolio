import styled from 'styled-components'

const AreaBlock = styled.section`
  ul {
    display: flex;
    align-items: center;
  }

  .item {
    list-style: none;
    width: 43%;
    height: 300px;
    background: linear-gradient(to right bottom, #393838, #38387b, #393838);
    border-radius: 15px;
    margin-left: 55px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    color: #FFF;

    h1 {
      margin: 0;
    }

    :hover {
      border: 2px solid deeppink;
      opacity: 0.8;
    }

    img {
      width: 279px;
      margin-top: 40px;
      margin-left: 25px;
    }

    h1{
      margin-right: 0;
      margin-top: 20px;
      margin-left:50px;
      padding-left: 80px;
    }
    p{
      margin:30px;
      margin-top: 75px;
      
    }
  }


`
export default AreaBlock;