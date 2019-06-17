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
        if (this.state.isLogined) {
            return (
                <div>
                    <Router>
                        <div>
                            <h2>Games</h2>
                            <ul>
                                <li><Link to={'/ooxx'}>圈圈叉叉</Link></li>
                                <li><Link to={'/aabb'}>數字猜猜</Link></li>
                                <li><Link to={'/'}>回首頁</Link></li>
                            </ul>
                            <hr />
                            <Switch>
                                <Route exact path="/" component={Home} children={
                                    <Home user={this.state.user} onClick={this.logout} />
                                } />
                                <Route exact path="/ooxx" component={OX} />
                                <Route exact path='/aabb' component={AB} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>你好，先登入一下如何？</h1>
                    <form onSubmit={this.login}>
                        <input type="text" placeholder="請輸入您的大名" onChange={this.handleChange} />
                        <input type="submit" value="確認" />
                    </form>
                </div>
            );
        }
    }
}

export default App