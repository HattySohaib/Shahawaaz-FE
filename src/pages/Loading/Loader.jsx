// src/components/withLoading.js
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const withLoading = (Component) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay for loading (e.g., fetching data)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loading />;
    }

    return <Component {...props} />;
  };
};

export default withLoading;
