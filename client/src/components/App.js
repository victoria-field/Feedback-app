import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
// * means take all actions
import * as actions from '../actions';
// import "../../public/css/style.css"
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
const Admin = () => <h2>Admin</h2>







class App extends Component {
  constructor() {
    super();

    this.state = {
      show_modal: false
    }
  }
componentDidMount(){
  this.props.fetchUser();

}

showModal() {
  this.setState({show_modal: true});
}

closeModal() {
  this.setState({ show_modal: false });
}

  render(){
    return (
      <div className="container">
        <BrowserRouter>

          <div>
            <Header />
            <Route exact path="/" component ={Landing} />
            <Route path='/dashboard' exact render={props => (
    					<Dashboard
    						showModal={this.showModal.bind(this)}
    						closeModal={this.closeModal.bind(this)}
    						show_modal={this.state.show_modal}
    					/>
    				)} />
            <Route exact path = "/dashboard/admin" component = {Admin} />


          </div>

        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions) (App);
