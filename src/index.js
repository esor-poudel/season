import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Loader';

class App extends React.Component {
  
    state = {lat: null, errorMessage: ""}

    componentDidMount(){
        // componentDidMount () this function is called once when react component is created
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err =>  this.setState({ errorMessage: err.message })
        );
    }
    renderContent(){
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div>Error : {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat)
        {
            return <SeasonDisplay lat={this.state.lat} > </SeasonDisplay>
        }

        return <div><Spinner message="Please accept location request" /></div>
    } 
    render() {
        return (
            <div className="border: red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render( <
    App / > ,
    document.querySelector("#root")
)