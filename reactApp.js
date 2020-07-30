class Team extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shots: 0,
      score: 0
    }

    this.shotSound = new Audio('./assets/audio/smb_fireball.wav')
this.scoreSound = new Audio('assets/audio/smb_1-up.wav')
  }

  shotHandler = () => {
    let score = this.state.score
  this.shotSound.play()

  if (Math.random() > 0.5) {
    score += 1
    setTimeout(() => {
      this.scoreSound.play()
    }, 100)
    this.scoreSound.play()
  }

    this.setState((state, props) => ({
      shots: state.shots + 1,
      score
    }))
  }
  
  render() {
    return (
      <div className="Team">
        <h2>{this.props.name}</h2>

        <div className="identity">
        <img src={this.props.logo} alt={this.props.name} />
        </div>

        <div>
          <strong>Shots:</strong> {this.state.shots}
        </div>
        <div>
          <strong>Score:</strong> {this.state.score}
        </div>
        


        <button onClick={this.shotHandler}>Shoot!</button>
      </div>
    )
  }
}


function App(props) {
  return (
    <div className="App">
      <div className="stats">
        <Team
          name="Russiaville Raccoons"
          logo="./assets/images/raccoon.png"
        />

        <div className="versus">
          <h1>VS</h1>
        </div>

        <Team
          name="Sheridan Squirrels"
          logo="./assets/images/squirrel.png"
        />
      </div>
    </div>
  )
}
  
  //Render the application
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  