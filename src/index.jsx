import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Welcome from './welcome';
import Login from './login';
import { getFollowedArtists, getUser, setAccessToken } from '../server/spotify';


class App extends Component {
  constructor() {
    super();
    this.state = {
      display_name: '',
      spotifyId: 0,
      image: '',
      artists: [],
      events: [],
    };
  }

  componentDidMount() {
    if (this.props.id !== 0) {
      setAccessToken(this.props.spotifyAccessToken);
      this.getState();
    }
  }

  getState() {
    return Promise.all([getUser(), getFollowedArtists()])
      .then((data) => {
        const user = data[0].body;
        const { artists } = data[1].body;
        this.setState({
          display_name: user.display_name,
          spotifyId: user.id,
          profileUrl: user.external_urls.spotify,
          image: user.images[0].url,
          artists: artists.items,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="appContainer">
        { this.state.spotifyId !== 0 ?
          <Welcome
            user={this.state.display_name}
            profileUrl={this.state.profileUrl}
            image={this.state.image}
            artists={this.state.artists}
          /> :
          <Login /> }
      </div>
    );
  }
}

App.propTypes = {
  id: PropTypes.number,
  spotifyAccessToken: PropTypes.string,
};

App.defaultProps = {
  id: 0,
  spotifyAccessToken: 0,
};

module.exports = App;
