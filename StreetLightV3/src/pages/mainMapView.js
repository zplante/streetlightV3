import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  mapcontainer: {
        height: "100%",
        width: "100%"  ,
        justifyContent: 'flex-end',
        alignItems: 'center',
  },
  map: {
        ...StyleSheet.absoluteFillObject,
  },
})

const MainMapView = () => {
  const [markers, setMarkers] = useState([]);
  const [showMarkerModel, setShowMarkerModel] = useState(false);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const onMapPress = (e) => {
    setMarkers([...markers, { latlng: e.nativeEvent.coordinate }]);
  }  

  return (
    <View style={styles.mapcontainer}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={region}
            showUserLocation={true} 
            onRegionChangeComplete={(region) => setRegion(region)} 
            onPress={(e) => onMapPress(e)} >
            {markers.map((marker, i) => (
                <Marker
                    coordinate={marker.latlng} 
                    key={i}
                />
            ))}
        </MapView>
    </View>
  );

};
export default MainMapView;