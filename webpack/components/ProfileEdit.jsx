import React from 'react';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false }
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit })
  }

  handleSubmit(e) {
    e.preventDefault();
    let current_city = this.refs.current_city.value
    let current_state = this.refs.current_state.value
    let current_neigborhood = this.refs.current_neigborhood.value
    let current_zipcode = this.refs.current_zipcode.value
    let age = this.refs.age.value
    this.toggleEdit();
    $.ajax({
      url:`/api/profiles/${this.props.id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { ProfileEdit: { current_city, current_state, current_neigborhood, current_zipcode, age } }
    }).done( ProfileEdit => {
      this.props.updateProfileEdit(ProfileEdit)
    })
  }

  render() {
    if(this.state.edit){
      return (
        <div key={this.props.ProfileEdit.id} className="col s12 m6">
          <div className="card grey lighten-3">
            <div className="card-content">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input ref="name" placeholder="Current City" defaultValue={this.props.ProfileEdit.current_city} />
                <input ref="name" placeholder="Current State" defaultValue={this.props.ProfileEdit.current_state} />
                <input ref="name" placeholder="Current Neighborhood" defaultValue={this.props.ProfileEdit.current_neigborhood} />
                <input ref="number" placeholder="Current Zipcode" defaultValue={this.props.ProfileEdit.current_zipcode} />
                <input ref="number" placeholder="Age" defaultValue={this.props.ProfileEdit.age} />
                <button type="submit" className="btn">Update</button>
                <button type="button" className="btn red" onClick={this.toggleEdit.bind(this)}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div key={this.props.EditProfile.id} className="col s12 m6">
          <div className="card grey lighten-5">
            <div className="card-content">
              <p>Current City: {this.props.EditProfile.current_city}</p>
              <p>Current State: {this.props.EditProfile.current_state}</p>
              <p>Current Neighborhood: {this.props.EditProfile.current_neigborhood}</p>
              <p>Current Zipcode: {this.props.EditProfile.current_zipcode}</p>
              <p>Age: {this.props.EditProfile.age}</p>
            </div>
            <div className="card-action">
              <button className="btn blue-grey" onClick={this.toggleEdit.bind(this)}>Edit</button>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default ProfileEdit
