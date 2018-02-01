import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'

import { 
    SearchBar,
    VideoList,
    VideoDetail
} from './components'

const API_KEY = 'AIzaSyBySBN5IdhAPgmn347cKbYS3n0il5EIpfU'

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentWillMount() {
        this._videoSearch('cats')
    }

    render() {
        const videoSearch = _.debounce(term => this._videoSearch(term), 300)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
        )
    }

    _videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, videos => {
            this.setState({ 
                videos,
                selectedVideo: videos[1]
            })
        })
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))
