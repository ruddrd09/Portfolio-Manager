import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";

class AddNews extends PureComponent {
  constructor() {
    super();

    this.state = {
        formDetails: {}
    }
  }

  blurHandler = (evt) => {
    const { name, value } = evt.target;
    const { formDetails } = this.state;
    this.setState({
        formDetails: {...formDetails, [name]: value}
    }) 
  }

  submitHandler = (evt) => {
    // A POST request can be made to the database from here, the formDetails object( which has been logged in the console),
    // can be posted as it has been made according to the key Value pairs
    evt.preventDefault();
    this.props.history.push('/getNews');
  }

  render() {
    console.log(this.state.formDetails);
    return (
      <div class="box">
          <form>
              <div class="field">
                <label class="label">TITLE</label>
                <div class="control">
                    <input class="input" name="title" type="text" required placeholder="Enter Title of News Article" onBlur={this.blurHandler}/>
                </div>
              </div>
              <div class="field">
                <label class="label">DESCRIPTION</label>
                <div class="control">
                    <input class="input" name="description" type="text" required placeholder="Description" onBlur={this.blurHandler}/>
                </div>
              </div>
              <div class="field">
                <label class="label">USER</label>
                <div class="control">
                    <input class="input" name="user" type="text" required placeholder="Enter Full Name" onBlur={this.blurHandler}/>
                </div>
              </div>
              <button class="button" type="submit" onClick={this.submitHandler}>Submit</button>
          </form>
      </div>
    )
  }
}

export default withRouter(AddNews);