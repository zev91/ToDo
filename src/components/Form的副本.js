  import React, {Component} from 'react';
  import FlatButton from 'material-ui/FlatButton';
  import Avatar from 'material-ui/Avatar';
  const Avata = (isLogged) =>{
         const style = {margin: 5};
    return <FlatButton icon={ 
              <Avatar
                color={'#fff'}
                backgroundColor={'#43c1ef'}
                size={30}
                style={style} >
                {isLogged.attributes.username[0].toUpperCase()}
              </Avatar>} 
              label={isLogged.attributes.username} /> 
       
  }
  export default Avata;
  