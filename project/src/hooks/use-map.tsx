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
  const currentCity: City = offersCity.find((offer) => offer.city.cityName === city)?.city || DEFAULT_CITY;

  const locationLat = currentCity.locationLat;
  const locationLong = currentCity.locationLong;
  const zoom = currentCity.locationZoom;

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
  }, [mapRef, map, city]);

  return map;
}

export {useMap};
