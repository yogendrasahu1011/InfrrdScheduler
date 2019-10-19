import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';


class AddEvent extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
       this.props.addEvent(this.id.value,this.name.value, this.Description.value,this.Department.value,this.Duration.value,this.Date.value,this.Time.value,this.Room.value);
        this.id.value = '';
       this.name.value='';
        this.Description.value='';
        this.Department.value='';
        this.Duration.value='';
        this.Date.value='';
        this.Time.value='';
        this.Room.value='';
    }
  render(){
    
    return(
        
        <div>
            <hr/>
            <h3>Add Event</h3>
            <form onSubmit={this.onSubmit}>
            <input placeholder="ID" type ="number" ref={id =>this.id = id}/>
            <input placeholder="Name" type="text" ref={name =>this.name = name}/>
            <input placeholder="Description" type="text" ref={Description =>this.Description = Description}/>
            <input placeholder="Department" type="text" ref={Department =>this.Department=Department}/>
            <br></br>
            <input placeholder="Duration" type="number" ref={Duration=>this.Duration=Duration}/>
            <input placeholder="Date" type="date" ref={Date=>this.Date=Date}/>
            <input placeholder="Time" type="time" ref={Time=>this.Time=Time}/>
            <input placeholder="Room#" type="number" ref={Room=>this.Room=Room}/>
            <br></br>
            <Button onClick={this.onSubmit} variant="success" type="submit">Add</Button>
</form>
            <hr/>

  

        </div>
    );

  }
}

export default AddEvent;