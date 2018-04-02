import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const EventItem = ({ eventItem }) => {
  return (
    <div className = "eventItem">
      <p>{eventItem.Artists[0].name}</p>
      <div className="venue">
        <p className="venueText">Venue:<br/>{eventItem.Venue.Name}</p>
        <p className="venueText">Address:<br/>{eventItem.Venue.Address} {eventItem.Venue.City}</p>
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
