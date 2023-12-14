import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async url => {
  const res = await fetch(url)
 
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
   
    error.info = await res.json()
    error.status = res.status
    throw error
  }
 
  return res.json()
}

export default function ISSTracker() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, { refreshInterval: 5000 });


  useEffect(() => {
    if (data) {
      setCoords({ longitude: data.longitude, latitude: data.latitude });
    }}, [data]);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

console.log(data, coords)

 const handleReload = () => {
    mutate(); 
  };

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={handleReload}
      />
    </main>
  );
}
