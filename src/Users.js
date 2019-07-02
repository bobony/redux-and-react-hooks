import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from './Users.actions'

function Users(props) {
    useEffect(() => {
        props.getUsers()
    }, []);
    
    const { users } = props
    return (
        <div>
            {users.length !== 0 ? users.map(function (user) {
                return (
                    <div key={user.id} style={{ padding: 20 }}>
                        <img style={{ width: 100 }} src={user.avatar_url} />
                        <p><a href={user.html_url} target="_blank">{user.login}</a></p>
                    </div>
                )
            }) : <div><h3>No Users to Display</h3></div>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users.data || []
    }
}
export default connect(mapStateToProps, actions)(Users)