import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/Player";
import haikyuu from "./haikyuu.json"

class App extends React.Component {
  state = {
    score: 0,
    highscore: 0,
    randHaikyuu:haikyuu,
    keeptrack:[],
    id:''
  }
  handleClick = (id) => {
    
    var rand;
    var x;
    var i;
    for (i = haikyuu.length - 1; i > 0; i--) {
        rand = Math.floor(Math.random() * (i + 1));
        x = haikyuu[i];
        haikyuu[i] = haikyuu[rand];
        haikyuu[rand] = x;
    }
    this.setState({randHaikyuu:haikyuu});
    ///////////////////////////////////
    this.setState({score:this.state.score + 1});
    ////////////////////////////////////
    
    this.setState({keeptrack:[...this.state.keeptrack,id]})
    if (this.state.keeptrack.includes(id))
    {
      this.setState({score:0})
      this.setState({keeptrack:[]})
      if (this.state.score > this.state.highscore)
      {
        this.setState({highscore:this.state.score});

      }

    }

    // this.setState({score:this.score})
    // if (this.randHaikyuu.includes(haikyuu.id)){
    //   this.setState({highscore:this.score})

    // }
  }
  
  render()
  {
    return (
    <Wrapper>
      <Title score = {this.state.score} highscore = {this.state.highscore}>Clicky Game!</Title>
      {this.state.randHaikyuu.map((player)=>{
       return <FriendCard 
       key = {player.id}
        id = {player.id}
        name={player.name}
        image={player.image}
        handleClick= {this.handleClick}
      />
      })
      }      
    </Wrapper>
  );
}
  
}

export default App;
