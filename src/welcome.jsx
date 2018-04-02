
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jambase from './jambaseHelpers';
import Artist from './artist';
import Events from './events';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.getEvents(this.props.artists);
  }

  getEvents(artists) {
    console.log('getting events!!', artists)
    jambase.getEvents(artists, (err, result) => {
      if (err) {
        throw new Error(err);
      } else {
        console.log(result);
        this.setState({
          events: result[0].data.Events,
        });
      }
    });
  }

  // updateEvents(events) {
  //   this.setState({
  //     events,
  //   });
  // }

  render() {
    const {
      user,
      image,
      profileUrl,
      artists,
    } = this.props;
    return (
      <div className="welcome">
        <div className="userInfo">
          <h1 className="userText">Welcome <br />{user}!!</h1>
          <img className="userPhoto" alt="user" src={image} />
          <a href={profileUrl}>Link to Profile</a>
        </div>
        <div className="artistsList">
          <h3>My followed artists</h3>
          { artists.map(a => <Artist artistObj={a} />) }
        </div>
        <div>
          <div className="events">
            <h3>Events:</h3>
            { this.state.events.length > 0 ? <Events events={this.state.events} /> : ''}
          </div>
        </div>
      </div>
    );
  }
}
Welcome.propTypes = {
  user: PropTypes.string,
  profileUrl: PropTypes.string,
  image: PropTypes.string,
  artists: PropTypes.arrayOf({
    external_urls: PropTypes.shape({ spotify: PropTypes.string }),
    followers: PropTypes.shape({ href: PropTypes.string }),
    href: PropTypes.string,
  }),
};

Welcome.defaultProps = {
  user: '',
  profileUrl: '',
  image: '',
  artists: [],
};

export default Welcome;
