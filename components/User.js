import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  state = {
    isVisible: false
  }

  onClickEvent = () => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  render() {
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;

    return (
      <div className='container col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline' onClick={this.onClickEvent}> {name} </h4>
            <i className="far fa-trash-can" style={{ cursor: "pointer" }}></i>
          </div>

          {isVisible ?
            <div className='card-body'>
              <p className='card-text'>Department: {department}</p>
              <p className='card-text'>Salary: {salary} </p>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired
}

export default User;
