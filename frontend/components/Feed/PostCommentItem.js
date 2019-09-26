import React from 'react';
import Dropdown from '../Feed/FeedDropdown';

class PostCommentItem extends React.Component {
    constructor({ props }) {
        super(props);
        this.state = {
            dropdown: false,
            edit: false
        };
        this.getDropdown = this.getDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.triggerPostCommentEditInline = this.triggerPostCommentEditInline.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    }

    hideDropdown(){
        this.setState({dropdown: false});
    }

    getDropdown(){
        this.setState({dropdown: !false});
    }

    showOptions(e){
        let dropdownTrigger = document.getElementsByClassName('post-comment-options-dropdown-trigger');
        let dropdownContainer = document.getElementsByClassName('commentBodyContent');
        let author = document.getElementsByClassName('commentContentAuthor');
        let content = document.getElementsByClassName('commentContentBody');

        for (let i = 0; i < dropdownContainer.length; i++){
            if (e.target == dropdownContainer[i] || e.target == author[i] || e.target == content[i]){
                dropdownTrigger[i].style.display = 'block';
            } else {
                dropdownTrigger[i].style.display = 'none';
            }
        }
    }

    hideOptions(e){
        let dropdownTrigger = document.getElementsByClassName('post-comment-options-dropdown-trigger');
        for (let [k,v] of Object.entries(dropdownTrigger)) {
            v.style.display = 'none';
        }
    }


    triggerPostCommentEditInline(){
        this.setState({dropdown: false});
        this.setState({edit: !false});   
    }

    closeDropdown(){
        this.setState({dropdown: false});
    }


    render() {
        let comment = this.props.comment;
        return (
            <li className='commentContentContainer' >

            <div className='commentProfileCrop'>
                <img src='/images/profile_1.png' />
            </div>
            <div className='commentReactionContainer'>
                <div className='commentContentBodyContainer'>
                    <div className='commentBodyContent'
                        onMouseOver={(e) => this.showOptions(e)}>
                        <span className='commentContentAuthor'>{comment.author.first_name} {comment.author.last_name}</span>
                        <span className='commentContentBody'>{comment.body}</span>
                    </div>
                    <div className="options">
                        <div onClick={() => this.getDropdown()} className='post-comment-options-dropdown-trigger'>···</div>

                        {(this.state.dropdown) ? <Dropdown
                            closeDropdown = {this.closeDropdown}
                            deletePostComment={this.props.deletePostComment}
                            triggerPostCommentEditInline={this.triggerPostCommentEditInline}
                            type={'postComment'}
                            post={this.props.post}
                            comment={comment}
                            hideDropdown={this.hideDropdown}
                        /> : ''}
                    </div>
                </div>


                <div className='commentReactions'>
                    <a>Like</a>
                    <span>·</span>
                    <a>Reply</a>
                    {/* <span>·</span> */}
                    {/* <span>1hr</span> */}
                </div>
            </div>
        </li>
        );
    }
};

export default PostCommentItem;