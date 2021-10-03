import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const StoreMap = ({center}) => {
  return (
      <div className="relative w-full h-80 overflow-hidden px-5 mt-4">
    <MapContainer className="h-full z-40" center={center} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
      </div>

  );
};

export default StoreMap;
