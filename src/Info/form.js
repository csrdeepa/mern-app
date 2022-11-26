import React from "react";


class InfoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      Name: "",
      City: "",
      Age: "",
      isEdit: false
    }
  }

  componentWillReceiveProps(props) {
    // console.log("SetForm :",props.setForm);
    if (props.setForm._id != null) {
      this.setState({
        isEdit: true,
        _id: props.setForm._id,
        Name: props.setForm.Name,
        City: props.setForm.City,
        Age: props.setForm.Age
      })
    }
  }

  InfoChange = event => { //Dynamic setState
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  infoSubmit = event => {
    // event.preventDefault();
    // console.log(this.state.Name);
    if (!this.state.isEdit) {
      let data = {
        isEdit: this.state.isEdit,
        Name: this.state.Name,
        Age: this.state.Age,
        City: this.state.City
      }
      // console.log("Data1 :", data);
      this.props.myData(data);
    } 
    else {
      // event.preventDefault();
      let data = {
        isEdit: this.state.isEdit,
        _id: this.state._id,
        Name: this.state.Name,
        Age: this.state.Age,
        City: this.state.City
      }
      // console.log("Data2 :", data);
      this.props.myData(data);
    }
  }

  render() {
    return (
      <form onSubmit={this.infoSubmit} autoComplete="off">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" placeholder="Enter name" id="email"
            onChange={this.InfoChange}
            name="Name"
            value={this.state.Name}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" className="form-control" placeholder="Enter city" id="pwd"
            onChange={this.InfoChange}
            name="City"
            value={this.state.City}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="text" className="form-control" placeholder="Enter age" id="pwd"
            onChange={this.InfoChange}
            name="Age"
            value={this.state.Age}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default InfoForm;