import React, { useState } from "react";
import axios from "axios";
import { Text, Box } from "@chakra-ui/react";
import { PrintLocation } from "./PrintLocation";

export default function GetLocation() {
  const [address, setAddress] = useState({
    road: "",
    neighbourhood: "",
    suburb: "",
    city: "",
    county: "",
    state_district: "",
    state: "  ",
    postcode: "",
    country: "",
    continent: "",
  });
  var coords;
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    return { lat: latitude, lng: longitude };
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      showPosition(position);
      var received = getReverseLocation(
        position.coords.latitude,
        position.coords.longitude
      );
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function getReverseLocation(lat, lng) {
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=77289672bbf649d2a7bdcb8181c35620&pretty=10`
      )

      .then((data) => {
        // console.log(data.data.results[0]["components"]);
        coords = data.data.results[0]["components"];
        setAddress({
          ...address,
          road: coords.road,
          neighbourhood: coords.neighbourhood,
          suburb: coords.suburb,
          city: coords.city,
          county: coords.county,
          state_district: coords.state_district,
          state: coords.state,
          postcode: coords.postcode,
          country: coords.country,
          continent: coords.continent,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Box>
      <PrintLocation obj={address} />
    </Box>
  );
}
