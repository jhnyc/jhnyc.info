import React, { useEffect } from "react";

export default function TrackIP() {
  const postRequest = (data) => {
    fetch(
      "https://hu4gdfdws9.execute-api.us-west-1.amazonaws.com/default/test",
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Fetch visitor IP address from the API
    fetch("https://ip.nf/me.json")
      .then((response) => response.json())
      .then((data) => {
        const requestBody = `${data.ip.ip} from ${data.ip.city}, ${data.ip.country}`;
        postRequest(requestBody);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div className="tracker"></div>;
}
