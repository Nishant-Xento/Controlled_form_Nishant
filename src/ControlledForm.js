import React from "react";

class ControlledForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      pnum: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var { fname, lname, email, pnum } = this.state;
    alert(`
      Firstname: ${fname}
      Lastname: ${lname}
      Email: ${email}
      Phone: ${pnum}
      `);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <label>Phone Number</label>
          <input
            type="text"
            name="pnum"
            value={this.state.pnum}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <button className="btn" value="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default ControlledForm;
