import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ActionHome from 'material-ui/svg-icons/action/home';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Textarea from '../styles/Textarea'
import Panel from '../styles/Panel'
import DatePickerDesign from '../styles/DatePicker'
import Schedule from '../styles/Schedule'

export default class TodoTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      controlledDate: new Date().toJSON().slice(0, 10),
       Num: null,
       text:this.props.text || ''
    };
  }
   
  componentWillMount(){
      let D = new Date();
      this.setState({
        Num:D.getDay()
      })
      
  }

  ahandleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  injectDate () {
    return new Date().toJSON().slice(0, 10)
  }


  handleSubmit = () => {
    const due = new Date(this.state.controlledDate)
    console.log(this.state.text)
    this.props.addTodo(this.state.text.trim(), due)
  }

  handleKeyPressSubmit = ({keyCode}) => {
    const due = new Date(this.state.controlledDate)
    if (keyCode === 13) {
      this.props.addTodo(this.state.text.trim(), due)
    }
  }
  
  getWeek = (Num) => {
    const weekArr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    if(Num>6){
      Num=Num-7
    }
    return weekArr[Num]
  }

  

  quickPick = () => {
    let that = this;
    let nowTime = new Date();
    let msec = nowTime.getTime();
    const diff = this.select.value * 24 * 3600 * 1000
    msec += diff;
    let ToJ = new Date(msec);
    this.ahandleChange (null,ToJ) 
  }
 handleChange = e => {
    this.setState({ text: e.target.value })
  }
  render() {
    return (
      <Panel>
        <Textarea 
        type={'submit'}
        placeholder="你是谁 要到哪里去"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyPressSubmit} />
        <Schedule>
          <div>
           
           <select
              defaultValue={8}
              ref={node => this.select = node}
              onChange={this.quickPick}
            >
              <option value='0'>&nbsp;今天 {this.getWeek(this.state.Num)} </option>
              <option value='1'>&nbsp;明天 {this.getWeek(this.state.Num+1)} </option>
              <option value='2'>&nbsp;后天 {this.getWeek(this.state.Num+2)}</option>
              <option value='3'>大后天 {this.getWeek(this.state.Num+3)}</option>
              <option value='4'>第五天 {this.getWeek(this.state.Num+4)}</option>
              <option value='5'>第六天 {this.getWeek(this.state.Num+5)}</option>
              <option value='6'>第七天 {this.getWeek(this.state.Num+6)}</option>
              <option value='7'>下周今天 {this.getWeek(this.state.Num+7)}</option>
              <option value='8' >快速选择</option>
            </select>

          </div>
            <div>
            <DatePickerDesign
            className="DatePicker"
            autoOk={true}
            cancelLabel="取消"
            hintText={this.injectDate()}
            value={this.state.controlledDate}
            onChange={this.ahandleChange}
            />
          </div>
           <div>
           <input
              type='button'
              value='添加'
              onClick={this.handleSubmit}
            />
          </div>
         </Schedule>


         
     </Panel>

     
      
    )
  }
}
