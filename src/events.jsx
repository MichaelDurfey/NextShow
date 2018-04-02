import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './eventItem';

const Events = ({ events }) => {
  return (
    <div>
      { events.map(e => <EventItem eventItem={e} />)}
    </div>
  )
};

Events.propTypes = {
  events: PropTypes.arrayOf({
  }),
};

Events.defaultProps = {
  events: [{}],
};

export default Events;

