import { useState, useEffect } from 'react'

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

export const useLocation = (watch = false, settings = defaultSettings) => {
  const [location, setLocation] = useState({})
  const [error, setError] = useState(null)

  const onChange = ({coords}) => {
    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude
    })
  }

  const onError = (error) => {
    setError(error.message)
  }

  useEffect(() => {
    const geoLocation = navigator.geolocation

    if (!geoLocation) {
      setError('Geolocation is not supported.')
      return
    }
    
    let watcher = null;
    if (watch) {
      watcher = geoLocation.watchPosition(onChange, onError, settings);
    } else {
      geoLocation.getCurrentPosition(onChange, onError, settings);
    }

    return () => watcher && geoLocation.clearWatch(watcher)
  }, [settings, watch])

  return {...location, error}
}