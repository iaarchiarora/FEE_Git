import { Component } from "react";
//react- props and states
//props 
//properties are fixed value, IMMUTABLE.name marks css props
//states are mutable use action(mouse action , keyboard action, click action)
// importants Ques asked states/ prop differnce

//class Car extends Compomennt() {
    // render()  //IMP render
// }

//react 90% --> functions
//
class Car extends Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }
   
   export default Car;
   