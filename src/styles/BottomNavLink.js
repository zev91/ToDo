import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const BottomNavLink = styled(NavLink)`
  &.btn-active svg {
  fill: rgb(0, 188, 212) !important;
  }

  &.btn-active div {
    color: rgb(0, 188, 212) !important;
  }
  &.btn-active > button  {
    padding:6px 12px 10px !important;
  }
  &.btn-active > button > div > div {
    font-size: 14px !important;
  }
`

export default BottomNavLink
