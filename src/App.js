  import React, {Component} from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Table from 'react-bootstrap/Table';
  import './App.css';
  import Event from './Event';
  import AddEvent from './addEvent';
import { rootCertificates } from 'tls';

  const events = [
    { id:1,
      name:'NewHiretraining',
      Description:"New hire training",
      Department:"Human resources",
      Duration:"2",
      Date:"10-11-2019",
      Time:"4:00PM",
      Room:5
    },
    
    { id:2,
      name:'aaaaa',
      Description:"New hire training",
      Department:"Human resources",
      Duration:"2",
      Date:"10-11-2019",
      Time:"4:00PM",
      Room:5
    }
  ];

  localStorage.setItem('events',JSON.stringify(events));
  class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        events:JSON.parse(localStorage.getItem('events'))
      };
      this.delEvents = this.delEvents.bind(this);
      this.addEvent = this.addEvent.bind(this);
      this.search = this.search.bind(this);
      this.onSave = this.onSave.bind(this);
    }

  

    componentWillMount(){
    const events = this.fetchEvents();
    this.setState({events});
    }
    
    fetchEvents(){
    return this.state.events;
    }
    addEvent(id,name,Description,Department,Duration,Date,Time,Room){
      const events = this.fetchEvents();
      events.push({ id,name,Description,Department,Duration,Date,Time,Room
      });
      this.setState({events});
      }
    delEvents(Name){
      const events = this.fetchEvents();
      const newEvents = events.filter(event =>{
        return event.Name!== Name;
        
      });
        this.setState({events: newEvents});
      }
  onSave(id,name,Description,Department,Duration,Date,Time,Room){
    let events = this.fetchEvents();
    events = events.map(event =>{
      if(event.id == id)
      {
        event.id = id;
        event.name = name;
        event.Description = Description;
        event.Department = Department;
        event.Duration = Duration;
        event.Date = Date;
        event.Time = Time;
        event.Room = Room;
      }
      return event;
    });
    this.setState(events);
      }
  
  search(e){
    let curr = {};
    let newList = {};
    if(e.target.value!==''){
      curr = this.state.events;

      newList = curr.filter(event =>{
        const key1 = event.name.toString().toLowerCase();
        const filter = e.target.value.toString().toLowerCase();

        return key1.includes(filter);
      });
      
    }
    else{
      newList = this.state.events;
    }
    this.setState({events:newList});
  }


    render(){
      return(
        
  <div className="App">
    <h1>Infrrd.Ai Training Scheduler</h1>
    <AddEvent
      addEvent={this.addEvent}
    />

  <input type="text" onChange={this.search} placeholder="Search..." />

    <Table striped hover>
          <tbody>
      <tr><div><th>ID</th>
        <th>Name</th><th>Description
  </th><th>Department
  </th><th>Duration  
  </th><th>Date</th><th>
    Time</th><th>
      #Room</th><th>Task</th></div>
      </tr>
    {this.state.events.map(event=>{
      return(<Event
      key={event.id}{...event}
      delEvents = {this.delEvents}
      onSave = {this.onSave}
      />
      
      );
    })}
            </tbody>
    </Table>
  </div>);
    }
  }

  export default App;
