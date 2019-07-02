import React, { useState } from 'react';
function Search(props) {
    const [searchString, onSearchString] = useState('');
    const handleSearchQuery = (e) => {
        onSearchString(e.target.value)
    }

    const handleSubmit = (event) => {
        props.onSearchQuery(searchString)
    }

    return (
        <div>
            <div style={{padding: 20 }}>
                <input style={{padding:5}}  type='text' defaultValue={searchString} onChange={handleSearchQuery} placeholder='Search Users by Location' />
                <button type='submit' onClick={handleSubmit} style={{padding: 5, marginLeft: 5, background: '#fafafa'}}>Submit</button>
            </div>
            

        </div>
    )

}

export default Search