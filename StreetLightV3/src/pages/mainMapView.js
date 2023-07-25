import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import MarkerModel from '../components/markerModel';
import MessageModel from '../components/messageModel';

import userIcon from '../assets/icons/userIcon.png';

const LAT_DELTA = 0.015;
const LNG_DELTA = 0.0121;

const MainMapView = () => {
  const [markers, setMarkers] = useState([]);
  const [showMarkerModel, setShowMarkerModel] = useState(false);
  const [location, setLocation] = useState(null);
  const [event, setEvent] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LAT_DELTA,
    longitudeDelta: LNG_DELTA,
  });
  const [regionOnUser, setRegionOnUser] = useState(true);
  const [showMarkerMessage, setShowMarkerMessage] = useState(false);
  const [currentMarker, setCurrentMarker] = useState(null);

  const mapRef = React.createRef();   

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        setLocation((({ latitude, longitude }) => ({ latitude, longitude }))(position.coords)); 
        if(regionOnUser){
          setRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LAT_DELTA,
            longitudeDelta: LNG_DELTA,
          })
        }
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
        setLocation(null);
      },
      {
        maximumAge: 0,
        enableHighAccuracy: true,
        distanceFilter: 1,
        interval: 100,
      }
    )

    return () => Geolocation.clearWatch(watchId);

  }, []);

  const onMapPress = (e) => {
    if(!showMarkerModel){
      setEvent (e.nativeEvent.coordinate);
      setShowMarkerModel(true);
      setShowMarkerMessage(false);
      mapRef.current.animateToRegion({
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latitudeDelta: LAT_DELTA,
        longitudeDelta: LNG_DELTA,
      });
      setRegionOnUser(false);
    }
  }
  
  const onMarkerPress = (e, id) => {
    if(!showMarkerModel){
      setRegionOnUser(false);
      mapRef.current.animateToRegion({
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latitudeDelta: LAT_DELTA,
        longitudeDelta: LNG_DELTA,
      });
      // this will be the proper line when the markers are pulled from the db
      // for now we can just index them
      //let marker = markers.find(marker => marker.id === id);
      let marker = markers[id];
      console.log(marker);
      setShowMarkerMessage(true)
    }
  }

  return (
    <View style={styles.mapcontainer}>
        {showMarkerModel &&
          <MarkerModel e={event} setEvent={setEvent} setShowMarkerModel={setShowMarkerModel} setMarkers={setMarkers} markers={markers}/>
        }
        {showMarkerMessage && 
          <MessageModel currentMarker={currentMarker} setCurrentMarker={setCurrentMarker} setShowMarkerMessage={setShowMarkerMessage}/>
        }
        {location ? (
          <MapView
              ref={mapRef}
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={region}
              region={region}
              onRegionChangeComplete={(region) => {setRegion(region); setRegionOnUser(false)}} 
              onPress={(e) => onMapPress(e)} >
              <Marker coordinate={location}>
                <Image
                  source={userIcon}
                  style={{ width: 35, height: 35}}
                />
              </Marker>
              {showMarkerModel && 
                <Marker coordinate={event}/>
              }
              {markers.map((marker, i) => (
                  <Marker
                      coordinate={marker.latlng} 
                      key={i}
                      onPress={(event) => onMarkerPress(event,i)}
                  />
              ))}
          </MapView>
        ): (null)}
    </View>
  );

};

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
});

export default MainMapView;