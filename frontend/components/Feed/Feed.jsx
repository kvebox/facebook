import React from 'react';
import NavContainer from '../NavContainer';
import FeedContainer from './FeedContainer';
import FeedNavigationBarContainer from './FeedNavigationBarContainer';
import FeedWidgetBarContainer from './FeedWidgetBarContainer';
import CreatePostModalContainer from '../Widgets/CreatePostModalContainer';

class Feed extends React.Component {
    render() {
        return (
            <div className="feed-body">
                {/* <CreatePostModalContainer /> */}

                <NavContainer />
                <div className="spacer"></div>
                <div className="main-container">
                    <FeedNavigationBarContainer  />
                    <FeedContainer />
                    <FeedWidgetBarContainer />
                </div>
            </div>
        )
    };
};

export default Feed;