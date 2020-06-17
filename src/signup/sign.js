import React from "react";
import './sign.css'
import { Button, Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { register, utilisateurs, changeLoad, importLoad } from "../actions/actions";
class SignUp extends React.Component {
  state = {
    modal: false,
    address: '',
    password: '',
    display: "none",
    availability: ""
  }
  componentDidMount() {
    this.props.user()
    this.props.importLoad()
  }
  toggle = () => this.setState({ modal: !this.state.modal });
  printMail = (e) => {
    let x = ".+@(gmail.com|yahoo.fr)";
    if (e.target.value.match(x)) this.setState({ email: e.target.value })
  };
  address = (e) => {
    let y = e.target.value
    this.state.address = y
    console.log(this.state.address)
  }
  password = (e) => {
    let y = e.target.value
    this.setState({ password: y })
  }
  showSignIn = () => {
    this.setState({ display: "block" });
  };
  user = () => {
    this.props.users.map(el => {
      if (this.state.password === el.password && this.state.address === el.email) {
        alert(`hello dear ${el.role}`)
        this.props.changeLoad(el.role);
        this.setState({ availability: true })
        window.location.reload()
      }
      else this.setState({ availability: false })
    })
    if (this.state.availability === false) alert("No such coordinates");
  }
  logOut = () => {
    this.props.changeLoad('guest');
    window.location = "http://localhost:3001"
  }
  render() {
    const a = this.props.loadList.map(el => el.loadstatus).join('')
    return (
      < center >
        {(a === "guest") ? <Button className="button-color" onClick={this.toggle}>
          Sign in/Sign up
        </Button> : <Button className="button-color" onClick={this.logOut
          }>
            Log out
        </Button>}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>

          <ModalBody className="modal-box-sign">
            <div style={{ display: this.statedisplay }}>
              <form style={{ display: !this.state.display }} type="submit">
                <h3 className="sign">Sign Up</h3>
                <div className="form-group">

                  <input id='name' type="text" placeholder=" name" className="sign-inputs"
                    onChange={(e) => this.setState({ nameUser: e.target.value })}
                  />
                </div>
                <br />

                <div className="form-group">

                  <input id='email' type="email"
                    placeholder="Enter email" className="sign-inputs"
                    onChange={this.printMail}
                  />
                </div>
                <br />
                <div className="form-group">

                  <input id='password' type="password" placeholder="Enter password" className="sign-inputs"
                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                  />
                </div>
                <br />
                <div className="form-group">

                  <input type="password" placeholder="Confirm password" className="sign-inputs"
                    style={{ border: this.state.border, outline: "none" }}
                    type="password"
                    id="confPassword"
                  />
                </div>
                <br />
                <button type="submit" className="submit-sign" onClick={
                  () => this.props.register({
                    "role": "client",
                    "nameUser": this.state.nameUser,
                    "email": this.state.email,
                    "password": this.state.password,
                  })
                }>Sign Up</button>
                <p className="text-right">
                  Already registered
                  <i className="forgot-password " onClick={this.showSignIn}>
                    sign in?
                  </i>
                </p>
              </form>
            </div>
            <div style={{ display: this.state.display }}>
              <h3 className="sign">Sign In</h3>
              <div className="signinputs">
                <input onChange={this.address} className="sign-inputs"
                  placeholder="address" id="emailin"></input>
                <input onChange={this.password} className="sign-inputs"
                  placeholder="password" id="passwordin"
                ></input>
              </div>
              <button className="submit-sign" onClick={this.user}>sign in</button>
            </div>
          </ModalBody>
        </Modal>
      </center >
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
  loadList: state.getLoad,
});

const mapDispatchToProps = (dispatch) => ({
  register: (e) => dispatch(register(e)),
  user: () => dispatch(utilisateurs()),
  changeLoad: (data) => dispatch(changeLoad(data)),
  importLoad: () => dispatch(importLoad())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
