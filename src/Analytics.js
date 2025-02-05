import React from "react";
import ReactGA from "react-ga";
import { useNavigate } from "react-router";

export const initializeGA = () => {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY);
    // ReactGA.initialize("UA-222701020-1");
    
}

export const sendRouteChangeToGA = () => {
    const path = window.location.pathname + window.location.search;
    ReactGA.set(`PAGE-VIEW: ${path}`);
    ReactGA.pageview(path);
}

export const AppAnalytics = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        initializeGA()
    }, []);
    React.useEffect(() => {
        sendRouteChangeToGA();
    }, [navigate]);
    return null
}
