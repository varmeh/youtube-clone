import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ''
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={event => this._onInputChange(event.target.value)} />
            </div>
        )
    }

    _onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export { SearchBar }
