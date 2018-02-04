import React from 'react';
import VedioListItem from './videolistitem'

const VedioList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
        <VedioListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} />
        );
    });
    
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}
export default VedioList;