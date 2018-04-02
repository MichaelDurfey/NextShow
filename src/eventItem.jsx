import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const EventItem = ({ eventItem }) => {
  return (
    <div>
      <div className="venue">
        <h4>Venue:{eventItem.Venue.Name}</h4>
        <h4>Address:{eventItem.Venue.Address} {eventItem.Venue.City}</h4>
      </div>
      <div className="date">
        Date:{moment(eventItem.Date).format('DD-MM-YYYY')}
      </div>
      <div>
        <a href={eventItem.ticketUrl}>Tickets</a>
      </div>
    </div>
  );
};

EventItem.propTypes = {
  eventItem: PropTypes.shape({
    venue: PropTypes.string,
  }),
};

EventItem.defaultProps = {
  eventItem: {},
};

export default EventItem;
