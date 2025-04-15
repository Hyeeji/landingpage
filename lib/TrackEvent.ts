import ReactGA from "react-ga4";
import "../styles/globals.css";
import mixpanel from "mixpanel-browser";
import * as amplitude from '@amplitude/analytics-browser';


const TrackEvent = (eventText: string) => {
  ReactGA.event({
    category: "User",
    action: eventText,
    label: eventText,
    value: 1});
  mixpanel.track(eventText);
  amplitude.track(eventText);
};

export default TrackEvent;
