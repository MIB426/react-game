import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import { Home } from './components/Home'
import { OX } from './components/OX/OX'
import { AB } from './components/AB/AB'


class App extends Component {

    constructor() {
        super();
        this.state = {
            isLogined: false,
            user: ""
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    logout() {
        this.setState({
            isLogined: false,
            user: ""
        });
    }
    login(event) {
        if (this.state.user === "") {
            alert("你忘記你的名字啦！");
            return false;
        } else {
            this.setState({
                isLogined: true
            });
        }
    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            user: event.target.value
        })
    }

    render() {
        var loginPrompt = {
            textAlign: 'center',
            paddingTop: '55px',
            paddingBottom: '15px',
            color: '#fff',
            textShadow: '0 0 10px #ff006c, 0 0 20px #ff006c, 0 0 40px #ff417d',
            margin: '0px'
        };

        var formStyle = {
            textAlign: 'center',
            paddingTop: '15px',
            marginLeft: 'auto',
            marginRight: 'auto'
        };
        if (this.state.isLogined) {
            return (
                <Router>
                    <div className="container">
                        <img className="logo" src="./asset/logo.png" />
                        <ul className="gameList">
                            <li><Link to={'/ooxx'}>圈圈叉叉</Link></li>
                            <li><Link to={'/aabb'}>數字猜猜</Link></li>
                            <li><Link to={'/'}>回首頁</Link></li>
                        </ul>
                        <hr style={{ marginTop: '150px' }} />
                        <div className="notebook">
                            <Switch>
                                <Route exact path="/" component={Home} children={
                                    <Home user={this.state.user} onClick={this.logout} />
                                } />
                                <Route exact path="/ooxx" component={OX} />
                                <Route exact path='/aabb' component={AB} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            );
        }
        else {
            return (
                <div className="animateBg">
                    <div className="loginBlock">
                        <h1 style={loginPrompt} >你好，先登入一下如何？</h1>
                        <form style={formStyle} onSubmit={this.login}>
                            <input type="text" placeholder="請輸入您的大名" onChange={this.handleChange} />
                            <input type="submit" value="確認" />
                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default App