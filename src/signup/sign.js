import React from "react";
import './sign.css'
import { Button, Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { register, utilisateurs } from "../actions/actions";
class SignUp extends React.Component {
  state = {
    modal: false,
    address: '',
    password: ''
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  address = (e) => {

  }
  password = (e) => {

  }
  render() {
    return (
      < center >
      <Button className="button-color" onClick={this.toggle}>
        Sign in/Sign up
        </Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalBody className="modal-box-sign">
          <form>
            <div className="form-group">

              <input id='nameUser' type="text" placeholder=" name" className="form-control" onChange={(e) => this.setState({ nameUser: e.target.value })}
              />
            </div>
            <br />

            <div className="form-group">

              <input id='email' type="email" className
                placeholder="Enter email" className="form-control" onChange={(e) => { this.setState({ email: e.target.value }) }}
              />
            </div>
            <br />
            <div className="form-group">

              <input id='password' type="password" placeholder="Enter password" className="form-control" onChange={(e) => { this.setState({ password: e.target.value }) }}
              />
            </div>
            <br />
            <div className="form-group">

              <input id='confirm Pass' type="password" placeholder="Confirm password" className="form-control"
              />
            </div>
            <br />
            <button type="submit" onClick={
              () => this.props.register({
                "nameUser": this.state.nameUser,
                "email": this.state.email,
                "password": this.state.password,
              })
            }>Sign Up</button>
          </form>
          <form>
            <input onChange={() => this.address} placeholder="address"></input>
            <input onChange={() => this.password} placeholder="password"></input>
            <button onClick={() => this.props.user}>sign in</button>
          </form>
        </ModalBody>
      </Modal>
      </center >
    );
  }
} 
const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  register: (e) => dispatch(register(e)),
  user: () => dispatch(utilisateurs())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
