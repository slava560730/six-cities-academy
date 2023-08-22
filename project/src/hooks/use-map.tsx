import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {City} from '../types/property';
import {useAppSelector} from './index';
import {DEFAULT_CITY} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const city = useAppSelector((state) => state.city);
  const offersCity = useAppSelector((state) => state.offerCity);
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const currentCity: City = offersCity.find((offer) => offer.city.name === city)?.city || DEFAULT_CITY;

  const locationLat = currentCity.location.latitude;
  const locationLong = currentCity.location.longitude;
  const zoom = currentCity.location.zoom;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: locationLat,
          lng: locationLong
        },
        zoom: zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
    map?.setView([locationLat, locationLong], zoom);
  }, [mapRef, map, city, currentCity]);

  return map;
}

export {useMap};
