import styled from 'styled-components'

const AreaModal = styled.section`

  .modal {
    width: 100%;
    height: 90vh;
    overflow-y: hidden;
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    background-color: #222222;
    width: 35%;
    height: 90%;
    color: #FFF;
    border: 20px;
    border-radius: 40px;
  }

  .close {
    background-color: rgba(224, 52, 52, 0.9);
    margin-left: 30px;
    margin-top: 30px;
    text-align: center;
    border-radius: 20px;
    width: 0;
    height: 15px;
    border-color: transparent;

    :hover {
      transition: ease 1s;

      :before {
        content: "x";
        position: relative;
        bottom: 3px;
        right: 3px;
        cursor: pointer;
      }
    }
  }

  .minimix {
    background-color: rgba(25, 149, 25, 0.9);
    margin-left: 12px;
    text-align: center;
    border-radius: 20px;
    width: 0;
    height: 15px;
    border-color: transparent;

    :hover {
      transition: linear 1s;
      position: relative;
      top: 2px;

      :before {
        content: "-";
        position: relative;
        bottom: 3px;
        right: 3px;
        cursor: pointer;
      }
    }
  }

  .content {
    margin: 5% 15%;
    text-align: center;

    img {
      width: 150px;
      margin-bottom: 5%;
      border-radius: 10px;
    }

    h1 {
      font-size: 40px;

    }
    
    a{
      padding-top: 300px;
    }
  }
`
export default AreaModal;