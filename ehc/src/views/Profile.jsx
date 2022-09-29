import React, {Component} from "react";

class Profile extends React.Component {
        constructor(props) {
          super(props)
          this.state = this.state = {
            values: {
              nickname: '',
              email: '',
              password: '',
            },
            validations: {
              nickname: '',
              email: '',
              password: '',
            },
          }
        }
      
        handleChange = (e) => {
          const { nickname, value } = e.target
          this.setState({
            values: {
              ...this.state.values,
              [nickname]: value,
            },
          })
        }
      
        validateAll = () => {
          const { nickname, email, password } = this.state.values
          const validations = { nickname: '', email: '', password: '' }
          let isValid = true
      
          if (!nickname) {
            validations.nickname = 'Nick or Name is required'
            isValid = false
          }
      
          if (!email) {
            validations.email = 'Email is required'
            isValid = false
          }
      
          if (!password) {
            validations.password = 'Password is required'
            isValid = false
          }
      
          if (!isValid) {
            this.setState({ validations })
          }
      
          return isValid
        }
      
        validateOne = (e) => {
          const { nickname } = e.target
          const value = this.state.values[nickname]
          let message = ''
      
          if (!value) {
            message = `${nickname} is required`
          }
      
          this.setState({
            validations: {
              ...this.state.validations,
              [nickname]: message,
            },
          })
        }
      
        handleSubmit = (e) => {
          e.preventDefault()
          const isValid = this.validateAll()
      
          if (!isValid) {
            return false
          }
      
          const values = JSON.stringify(this.state.values)
          alert(values)
        }
      
        render() {
          const { nickname, email, password } = this.state.values
          const { nickname: nicknameVal, email: emailVal, password: passwordVal } = this.state.validations
      
          return (

            <div className="profile">

{/* <!-- Profile Style --> */}
                <div className="deg-footer"></div>

                <div className="ejeZfooter"></div>
                <div className="footer-content">
                    <div className="profile-title">
                        <h2>LogIn</h2>
                        <hr/>
                    </div>
                    <div className="formulario-content">
                        <form onSubmit={this.handleSubmit} id="formulario">
                            <div className="mensaje-form">
                                <p>LogIn for more info.</p>
                            </div>
                            <div>
                                <label for="user">NickName:</label>
                                <input
                                type="text"
                                id="user"
                                name="user"
                                placeholder="Your Nick or Name"
                                value={nickname}
                                onChange={this.handleChange}
                                onBlur={this.validateOne}
                                />
                                <div>{nicknameVal}</div>
                            </div>
      
                            <div>
                            <label for="email">
                                Email:
                                <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email"
                                value={email}
                                onChange={this.handleChange}
                                onBlur={this.validateOne}
                                />
                            </label>
                            <div>{emailVal}</div>
                            </div>
      
                            <div>
                            <label for="mensaje">                    
                            Password
                                <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Your pass"
                                onChange={this.handleChange}
                                onBlur={this.validateOne}
                                />
                            </label>
                            <div>{passwordVal}</div>
                            </div>
      
                            <button type="submit">Send</button>
                         </form>
                    </div>
              <div>
                <h2>Values of the form</h2>
                <p>{JSON.stringify(this.state)}</p>
              </div>
            </div>
            </div>
          )
        }
      }
      
export default Profile