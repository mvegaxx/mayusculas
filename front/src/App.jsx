import React from "react";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "HOLA", parrafo: "hola" };
  }

  callAPI() {
    console.log(this.state.parrafo);

    fetch(`http://localhost:9000/API`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        parrafo: this.state.parrafo
      })
    })
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {};

  onSubmit = e => {
    //console.log(e.target.parrafo.value);
    e.preventDefault();
    this.callAPI();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="card container">
            <form method="GET" onSubmit={this.onSubmit}>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="parrafo"
                value={this.state.parrafo}
              />
              <button type="submit" className="button btn">
                MAYUSCULAS
              </button>
            </form>
            <h1 id="h1">{this.state.apiResponse}</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
