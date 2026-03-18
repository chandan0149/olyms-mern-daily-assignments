import React, { Component } from "react";

class AuthorInfo extends Component {

  componentDidMount() {
    console.log("Author data loaded successfully");
  }

  render() {
    const { author, bio, topBooks } = this.props;

    return (
      <div className="container mt-4">
        <div className="card p-4 shadow">
          <h4>About {author}</h4>
          <p>{bio}</p>

          <h6>Top 3 Books:</h6>
          <ul>
            {topBooks.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
