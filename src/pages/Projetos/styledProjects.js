import styled from 'styled-components'
import World from '../../image/cofe.png'

const AreaProjects = styled.section`
  margin-top: 50px;

  .bg-principal {
    display: block;
    height: 90vh; /* set the height here */
    width: 100%;
    background-image: url("${World}");
    background-repeat: no-repeat;
    background-position: center 100px;
    background-size: cover; /* make a "best guess" here as a default */
    background-attachment: fixed;
    position: relative;
    text-align: center;
  }

  .projects-flex {
    height: 95vh;
  }


`
export default AreaProjects;