    import React, {Component} from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import './App.css';
    import Button from 'react-bootstrap/Button'





    class Event extends Component{
    
    constructor(props)
    {
        super(props);
        this.state={
            editFlag:false
        };
        this.delEvents = this.delEvents.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    delEvents(){
        const{delEvents, Name} = this.props;

        delEvents(Name);
    }
    onSave(e){
        e.preventDefault();
        this.props.onSave(this.id.value,this.name.value, this.Description.value,this.Department.value,this.Duration.value,this.Date.value,this.Time.value,this.Room.value);
        this.setState({editFlag:false});
    }
    editEvent(){
        this.setState({editFlag:true});
    }
    render(){
        const{id,name,Description,Department,Duration,Date,Time,Room} = this.props;
        return(
            <div>
            
        {
            this.state.editFlag ? ( <form onSubmit={this.onSave}>
                <input placeholder="ID" ref={id =>this.id = id} defaultValue={id}/>
                <input placeholder="Name" ref={name =>this.name = name}defaultValue={name}/>
                <input placeholder="Description" ref={Description =>this.Description = Description} defaultValue={Description}/>
                <input placeholder="Department" ref={Department =>this.Department=Department} defaultValue={Department}/>
                
                <input placeholder="Duration" ref={Duration=>this.Duration=Duration}defaultValue={Duration}/>
                <input placeholder="Date" ref={Date=>this.Date=Date} defaultValue={Date}/>
                <input placeholder="Time" ref={Time=>this.Time=Time} defaultValue={Time}/>
                <input placeholder="Room#" ref={Room=>this.Room=Room} defaultValue={Room}/>
              
                <Button onClick={this.onSave} variant="success" type="submit">Save</Button>
                </form>):(
                
                
                <tr>
                <td>{id}</td><td>{name}</td><td>
                {Description}</td><td>
                {Department}</td><td>
                {Duration}</td><td>
                {Date}</td><td>
                {Time}</td><td>
                {Room}</td><td>
                <Button variant="warning" onClick={this.editEvent}>Edit</Button>
                <Button onClick={this.delEvents} variant="danger">Delete</Button>
                </td>
                </tr>
            )
            }
            
    </div>
    

        );
    }
    }

    export default Event;