import React from "react";
import useFetchData from "../middleware/hooks";
import styles from "../assets/css/custom.module.css";
import Title from "./Title";
import NormalCard from "./NormalCard";
import Loading from "./Loading.jsx";
import EmptyResult from "./EmptyResult.jsx";
const { LOAD_3 } = require("../constants/index.js");

function Events({ limit }) {
  const { data: eventData, loading: eventLoading } = useFetchData(
    process.env.REACT_APP_EVENT_API_URL
  );

  return (
    <>
      <div className="p-4 md:p-6" key={Math.random()}>
        <div className="p-4">
          <Title style={`${styles.header__text} `} title="News and Events" />
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          {!eventLoading ? (
            eventData.length > 0 ? (
              eventData.slice(0, limit).map((item) => (
                <NormalCard
                  key={item._id}
                  data={{
                    id: item._id,
                    title: item.name,
                    image: item.image,
                    description: item.description,
                    briefing: item.briefing,
                    host: item.host,
                    url: item.url,
                    rate: item.rating,
                  }}
                />
              ))
            ) : (
              <div className="mx-auto">
                <EmptyResult
                  data={{
                    title: "No events were found!",
                    description:
                      "Please refresh the page or check other other resources",
                  }}
                />
              </div>
            )
          ) : (
            <Loading repeatNumber={3} type={LOAD_3} />
          )}
        </div>
      </div>
    </>
  );
}

export default Events;
