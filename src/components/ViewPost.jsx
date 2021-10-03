import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ViewPost = ({ posts }) => (
    <div className="w-25 pt-3">
        <table className="table table-hover table-striped">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Author</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.length > 0 && posts.map(({ title, content, author }, index) => (
                        <tr key={index}> 
                            <td>{title}</td>
                            <td>{content}</td>
                            <td>{author}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
);

ViewPost.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    })).isRequired,
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
};

export default connect(mapStateToProps)(ViewPost);