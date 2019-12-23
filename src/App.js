import React,{Component} from 'react'; //Here Component is a property in react. we can directly use as React.Component
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{ // Here we can write as Component. if we import Component. else React.Component
  constructor(){
    super();
    this.state={
      monsters:[
       
      ],
      SearchField:''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  handleChange = e => {
    this.setState({SearchField:e.target.value});
  }

  render() {

    const {monsters,SearchField}=this.state;

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );

    return (      
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox Placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>        
      </div>
    );

  }
}

export default App;
