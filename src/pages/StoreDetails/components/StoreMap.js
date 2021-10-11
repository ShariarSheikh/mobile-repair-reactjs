import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const StoreMap = ({ lat, long }) => {
  const position = [lat, long];
  return (
    <div className="relative w-full h-80 overflow-hidden px-5 mt-4">
      <MapContainer className="h-full z-40" center={position} zoom={7}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default StoreMap;
