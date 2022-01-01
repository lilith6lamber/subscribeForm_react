import './App.css';
import {Component} from "react";

class App extends Component {
    state = {
        email: '',
        isAgree: false,
        isValid: true,
        success: false
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleCheckboxChange = event => {
        this.setState({[event.target.name]: event.target.checked})
    }

    handleSubmit = () => {
        this.setState({success: true, email: '', isAgree: false})
        setTimeout(() => {this.setState({success: false})}, 1500)
    }

    validateEmail = () => {
        const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailRegExp.test(this.state.email)) {
            this.setState({isValid: false})
        } else {
            this.setState({isValid: true})
        }
    }

    render() {
        const {email, isValid, isAgree, success} = this.state;

        return (
            <div className='container'>
                <form>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={this.handleChange}
                        onBlur={this.validateEmail}
                        className={isValid ? '' : 'error'}
                    />
                    <div className="wrapper">
                        <input
                            type="checkbox"
                            name="isAgree"
                            id='termsAgree'
                            checked={isAgree}
                            onChange={this.handleCheckboxChange}
                        />
                        <label htmlFor="termsAgree">I agree to the
                            <a className='link' href='#'>Terms and Conditions</a>
                        </label>
                    </div>
                    <button type='submit' onClick={this.handleSubmit} disabled={!(isValid && isAgree)}>Subscribe</button>
                    <p className={success ? 'success' : ''}>Thank you! Now you are subscribed.</p>
                </form>
            </div>
        )
    }
}

export default App;
