import React from "react";
import ReactDOM from "react-dom";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      asid: null,
      pid: null,
      location: "",
      errormessage: {}
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = {};
    let loc1 = ["Chennai", "Bangalore", "Hyderabad", "Pune", "Kochi"];
    let loc2 = ["US", "Non US"];

    //Checking Associate name
    if (nam === "username") {
      if (!val.match(/^[a-zA-Z\s]*$/)) {
        err["username"] = <strong>Accepts Alphabets and Space</strong>;
      } else if (
        val.match(/^[a-zA-Z\s]*$/) &&
        (val.length < 5 || val.length > 30)
      ) {
        err["username"] = <strong>Min 5 to max 30 character</strong>;
      }
    }

    //checking associate id
    if (nam === "asid") {
      if (!Number(val)) {
        err["asid"] = <strong>please enter an Associate id</strong>;
      } else if (Number(val) && val.length !== 6) {
        err["asid"] = <strong>Invalid Associate id</strong>;
      }
    }
    //check project id
    if (nam === "pid") {
      if (!val.match(/^[a-zA-Z0-9]*$/)) {
        err["pid"] = <strong>Please enter the project id</strong>;
      } else if (val.match(/^[a-zA-Z0-9]*$/) && val.length !== 12) {
        err["pid"] = <strong>Invalid project id</strong>;
      }
    }
    //radio button check
    if (val === "offshore") {
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <form>
        <h1>Form Validation.....</h1>
        <p>Associate Name</p>
        <input
          type="text"
          name="username"
          placeholder="Associate Name"
          onChange={this.myChangeHandler}
        />
        <p>{this.state.errormessage["username"]}</p>
        <p>Associate ID</p>
        <input
          type="text"
          name="asid"
          placeholder="Associate ID"
          onChange={this.myChangeHandler}
        />
        <p>{this.state.errormessage["asid"]}</p>
        <p>Project ID</p>
        <input
          type="text"
          name="pid"
          placeholder="Project ID"
          onChange={this.myChangeHandler}
        />
        <p>{this.state.errormessage["pid"]}</p>
        <div>
          <input
            type="button"
            value="offshore"
            name="location"
            onChange={this.myChangeHandler}
          />
          Offshore
          <input
            type="button"
            value="onshore"
            name="location"
            onChange={this.myChangeHandler}
          />
          Onshore
        </div>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById("root"));
