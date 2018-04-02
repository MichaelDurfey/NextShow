import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const EventItem = ({ eventItem }) => {
  return (
    <div className = "eventContainer">
      <div className="venue">
        <h4>Venue:{eventItem.Venue.Name}</h4>
        <h4>Address:{eventItem.Venue.Address} {eventItem.Venue.City}</h4>
      </div>
      <div className="date">
        Date: {moment(eventItem.Date).format('MM-DD-YYYY')}
      </div>
      <div>
        { eventItem.TicketUrl.length > 0 ? <a href={eventItem.TicketUrl}>Tickets</a> :
        'no ticket url provided' }
      </div>
      <div><a href={eventItem.Venue.Url}>Website: {eventItem.Venue.Name}</a></div>
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
