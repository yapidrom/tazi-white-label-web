import { useEffect, useRef } from 'preact/hooks';
import type { FunctionComponent } from 'preact';

interface Props {
  lang: string;
  apiKey: string;
}

declare global {
  interface Window {
    initGoogleMap?: () => void;
  }
}

const MapIsland: FunctionComponent<Props> = ({ lang, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const initMap = () => {
      if (!mapRef.current) return;

      // Center on Mersin
      const mersinCenter = { lat: 36.8121, lng: 34.6415 };

      const map = new google.maps.Map(mapRef.current, {
        center: mersinCenter,
        zoom: 13,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      mapInstanceRef.current = map;

      // Placeholder vehicle locations around Mersin
      const vehicles = [
        { lat: 36.8121, lng: 34.6415, type: 'Bisiklet', battery: 85 },
        { lat: 36.8050, lng: 34.6330, type: 'Bisiklet', battery: 72 },
        { lat: 36.8190, lng: 34.6500, type: 'Bisiklet', battery: 90 },
        { lat: 36.8080, lng: 34.6250, type: 'Bisiklet', battery: 45 },
        { lat: 36.8170, lng: 34.6580, type: 'Bisiklet', battery: 63 },
        { lat: 36.8000, lng: 34.6370, type: 'Bisiklet', battery: 95 },
        { lat: 36.8230, lng: 34.6200, type: 'Bisiklet', battery: 78 },
        { lat: 36.8100, lng: 34.6620, type: 'Bisiklet', battery: 55 },
        { lat: 36.7980, lng: 34.6450, type: 'Bisiklet', battery: 88 },
        { lat: 36.8210, lng: 34.6340, type: 'Bisiklet', battery: 42 },
        { lat: 36.8150, lng: 34.6680, type: 'Bisiklet', battery: 67 },
        { lat: 36.8060, lng: 34.6150, type: 'Bisiklet', battery: 91 },
      ];

      const batteryLabel = lang === 'tr' ? 'Batarya' : 'Battery';

      // Single shared InfoWindow so only one can be open at a time
      const infoWindow = new google.maps.InfoWindow();

      vehicles.forEach((v) => {
        const marker = new google.maps.Marker({
          position: { lat: v.lat, lng: v.lng },
          map,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15" fill="#EFB41D" stroke="#fff" stroke-width="3"/>
                <path d="M18 10C15.8 10 14 11.8 14 14c0 1.1.4 2 1 2.8L18 22l3-5.2c.6-.8 1-1.7 1-2.8 0-2.2-1.8-4-4-4z" fill="#fff"/>
                <circle cx="18" cy="14" r="1.5" fill="#EFB41D"/>
              </svg>
            `)}`,
            scaledSize: new google.maps.Size(36, 36),
            anchor: new google.maps.Point(18, 18),
          },
          title: v.type,
        });

        marker.addListener('click', () => {
          infoWindow.setContent(
            `<div style="font-family: Inter, sans-serif; text-align: center; padding: 4px;">
              <strong>${v.type}</strong><br/>
              <span style="color: ${v.battery > 50 ? '#D49B0E' : '#dc2626'}">
                🔋 ${batteryLabel}: ${v.battery}%
              </span>
            </div>`
          );
          infoWindow.open(map, marker);
        });
      });
    };

    // Load Google Maps script
    if (typeof google !== 'undefined' && google.maps) {
      initMap();
    } else {
      window.initGoogleMap = initMap;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      mapInstanceRef.current = null;
      delete window.initGoogleMap;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        borderRadius: '16px',
        zIndex: 0,
      }}
    />
  );
};

export default MapIsland;
