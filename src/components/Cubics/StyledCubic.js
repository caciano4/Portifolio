import styled from 'styled-components'

const AreaCubics = styled.section`
  width: 90px;
  height: 90px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 3px;

  :hover {
    background: gray;
    border-radius: 10px;
    transition: linear 0.5s;
  }

  .skills {
    margin: 10px;
    border-radius: 10px;
    width: 60px;
    height: 60px;
    padding: 5px;
    transition: linear 0.5s;
    background: linear-gradient(to right bottom, #393838, #38387b,#393838);

    :hover {
      width: 80px;
      height: 80px;
      position: relative;
      right: 5px;
      bottom: 5px;
      border: 1px solid #61dafb;

      transition: linear 0.5s
    }
  }

`
export default AreaCubics;