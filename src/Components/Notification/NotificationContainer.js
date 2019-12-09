import React, { Component } from 'react'
import NotificationPresenter from './NotificationPresenter';

export default class NotificationContainer extends Component {
    static propType = {};
    state = {};
    
    render() {
        return <NotificationPresenter {...this.props} {...this.state} />
    }
}
