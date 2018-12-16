import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

//把图标重新引入
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const map = L.map('map');
const defaultCenter = [35, 108];

const defaultZoom = 8;

const basemap = L.tileLayer('http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
    maxZoom: 18,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
});

map.setView(defaultCenter, defaultZoom);

basemap.addTo(map);