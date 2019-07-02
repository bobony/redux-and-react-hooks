import React, { useEffect } from 'react';
import Search from'./Search'
import { connect } from 'react-redux'
import * as actions from './Users.actions'

function Users(props) {
    useEffect(() => {
        props.getUsers()
    }, []);
    
    const onSearch= (val) => {
        const location =`location:${val}`
        props.getUsers(location)
    }
    const { users } = props
    return (
        <div>
            <Search onSearchQuery={onSearch}/>
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