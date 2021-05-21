
import './App.css';
import React from 'react';

class App extends React.Component{

   constructor(){
     super();
     this.state={
       number: 0
     }
   }

  render(){
    return <div style={{'width': '100%',
      'display': 'flex',
      'flex-direction': 'row',
      'justify-content': 'center',
    }}>
    
    <div className='numbers' style={{padding: 100}}>
        <p style={{fontSize: 150,width: '80px'}}>{this.state.number}</p>
    </div>
  <div className='left'>   
    <div className='minvalue' style={{padding: 50}}>
         <label style={{color: '#AACCFF',fontSize: 20}}>Min number</label><br></br>
         <input type='text' id='min'></input>
    </div>

    <div className='maxvalue' style={{padding: 50}}>
    <label style={{color: '#AACCFF',fontSize: 20}}>Max number</label><br></br>
         <input type='text' id='max'></input>
    </div>
    <div>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <button onClick={this.generate}>
      Generate
    </button>
    </div>
    </div>
    </div>
  }

  generate=() =>{
     var max = parseInt(document.getElementById('max').value);
     var min = parseInt(document.getElementById('min').value);
     if(max>min && min!=NaN){
     var changenum = Math.floor(Math.random() * (max - min) + min)
     console.log(changenum)
     }else{
       alert('check weather the min number is not null and less than max number')
     }
    this.setState({
      number: changenum
    })
  }

}

export default App;
