import _ from 'lodash';
import React,{Component} from  'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VedioList from './components/videolist'
import VedioListItem from './components/videolistitem';
import VedioDetail from './components/videodetails';
const API_KEY= 'AIzaSyDycMPdl45DDdyZ2wLbKVj6375nmzniDD8';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
             videos: [],
             selectedVideo : null       
        };

        this.videoSearch('nelk');
         
    }

    videoSearch(term)
    {
        YTSearch({key: API_KEY , term: term} , (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });

            });

    }
    render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term) } , 300);
    return (
        <div> 
            <SearchBar onSearchTermChange={videoSearch} /> 
            <div className="style">
            <VedioDetail video={this.state.selectedVideo}/>
            <VedioList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
              </div>
        </div>

    )};
}


ReactDOM.render(<App/>, document.querySelector('.container'));

