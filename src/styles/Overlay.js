import styled from 'styled-components'

const Overlay = styled.div`
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  background-image: ${props => props.login
    ? `url('http://oqap7v3zs.bkt.clouddn.com/todomountain-2115169.jpg')`
    : 'none'
  };
`

export default Overlay
