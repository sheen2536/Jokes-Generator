import React, { Component } from 'react';
import "./index.css";
import { TailSpin } from 'react-loader-spinner';
import jokes from './random.json'; 

class RandomJoke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.getNewJoke();
  }

  getNewJoke = () => {
    // Select a random joke
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex].value;

    this.setState({
      joke: randomJoke,
      isLoading: false
    });
  }

  render() {
    const { joke, isLoading } = this.state;
    return (
      <div className='container'>
        <div className='content'>
          <img src={require('./images.jpeg')} alt='jokes' />
          {isLoading ? (
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#F9629F"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <h1>{joke}</h1>
          )}
          <button onClick={this.getNewJoke} >Get New Joke</button>
        </div>
      </div>
    );
  }
}

export default RandomJoke;
