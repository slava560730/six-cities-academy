import {useRef, useEffect, useState} from 'react';
import {Icon, Marker} from 'leaflet';
import {useMap} from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps = {
  selectedOffer: number | undefined;
  classNameMap: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {selectedOffer, classNameMap} = props;
  const offersCity = useAppSelector((state) => state.offerCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  // const newMarkers: Marker[] = [];
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {

    const newMarkers: Marker[] = [];
    if (map) {
    //   markers.forEach((marker) => {
    //     marker.remove();
    //   });

    offersCity.forEach((offer) => {
      const marker = new Marker({
        lat: offer.city.location.latitude,
        lng: offer.city.location.longitude
      });

      marker
        .setIcon(
          selectedOffer !== undefined && offer.id === selectedOffer
            ? currentCustomIcon
            : defaultCustomIcon
        )
        .addTo(map);
      newMarkers.push(marker);
    });
    setMarkers(newMarkers);
  }
      return markers.forEach((marker) => {
        marker.remove();
    });
  }, [map, offersCity, selectedOffer]);

  return <div className={classNameMap} ref={mapRef}></div>;
}

export {Map};
