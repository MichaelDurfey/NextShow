import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ artistObj }) => (
  <div className="artistItem">
    <h4>{artistObj.name}</h4>
    <img 
      className="artistImage" 
      alt="artists" 
      src={artistObj.images[0].url} 
    />
  </div>
);

Artist.propTypes = {
  artistObj: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Artist.defaultProps = {
  artistObj: { hey: 'you' },
};

export default Artist;
