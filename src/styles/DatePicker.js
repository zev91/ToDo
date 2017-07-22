import DatePicker from 'material-ui/DatePicker';
import styled from 'styled-components'

const DatePickerDesign = styled(DatePicker)`
  & input {
      text-align: center!important;
      color: #fff!important;;
  }
  & > div:first-child {
      width: 120px!important;
  }
  & > div:first-child > div:first-child{
      left:50%;
      width:100%;
      -webkit-transform: translate(-50%,0)!important;  
      -ms-transform: translate(-50%,0)!important;  
          transform: translate(-50%,0)!important; 
      color: #fff!important;;    
  }
  & > div > div > hr{
      width: 0!important;
  }
`

export default DatePickerDesign