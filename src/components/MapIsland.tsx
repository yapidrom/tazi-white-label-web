import { useEffect, useRef } from 'preact/hooks';
import type { FunctionComponent } from 'preact';

interface Props {
  lang: string;
}

const MapIsland: FunctionComponent<Props> = ({ lang }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import Leaflet
    const loadMap = async () => {
      const L = await import('leaflet');

      // Add Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Wait for CSS to load
      await new Promise((r) => setTimeout(r, 100));

      // Initialize map (Ankara as default)
      const map = L.map(mapRef.current!, {
        center: [39.9334, 32.8597],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Custom icon
      const vehicleIcon = L.divIcon({
        html: `<div style="background: #EFB41D; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      // Placeholder vehicle locations around Ankara
      const vehicles = [
        { lat: 39.9334, lng: 32.8597, type: 'E-Scooter', battery: 85 },
        { lat: 39.9254, lng: 32.8661, type: 'E-Scooter', battery: 72 },
        { lat: 39.9401, lng: 32.8543, type: 'E-Bike', battery: 90 },
        { lat: 39.9280, lng: 32.8480, type: 'E-Scooter', battery: 45 },
        { lat: 39.9370, lng: 32.8700, type: 'E-Bike', battery: 63 },
        { lat: 39.9200, lng: 32.8550, type: 'E-Scooter', battery: 95 },
        { lat: 39.9450, lng: 32.8400, type: 'E-Bike', battery: 78 },
        { lat: 39.9310, lng: 32.8750, type: 'E-Scooter', battery: 55 },
        { lat: 39.9180, lng: 32.8630, type: 'E-Scooter', battery: 88 },
        { lat: 39.9420, lng: 32.8520, type: 'E-Bike', battery: 42 },
        { lat: 39.9350, lng: 32.8800, type: 'E-Scooter', battery: 67 },
        { lat: 39.9290, lng: 32.8350, type: 'E-Bike', battery: 91 },
      ];

      const batteryLabel = lang === 'tr' ? 'Batarya' : 'Battery';

      vehicles.forEach((v) => {
        L.marker([v.lat, v.lng], { icon: vehicleIcon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family: Inter, sans-serif; text-align: center; padding: 4px;">
              <strong>${v.type}</strong><br/>
              <span style="color: ${v.battery > 50 ? '#D49B0E' : '#dc2626'}">
                🔋 ${batteryLabel}: ${v.battery}%
              </span>
            </div>`
          );
      });

      // Fix map size issues
      setTimeout(() => map.invalidateSize(), 200);
    };

    loadMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
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
