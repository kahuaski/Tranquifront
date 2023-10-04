import React, { useState, useEffect } from "react";
import styles from "./indexStyles";
import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  ScrollView,
  TextInput,
  Modal,
  Pressable,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
} from "react-native";

import * as Animatable from "react-native-animatable";

import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import tranqui from "./assets/images/tranqui_w.png";
import menuA from "./assets/images/alitas.png";
import iconoHome from "./assets/icons/home.png";
import Icon from "react-native-vector-icons/Feather";
import Carousel from 'react-native-snap-carousel';
import Animated, {
  Easing,
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
} from "react-native-reanimated";
import { useAnimatedValue } from "react-native";
import Productos from "./src/screen/Productos"
const App = () => {
 
  const [price, setprice] = useState(0);
  const [getProducts, setgetProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://tranquiserver.onrender.com/api/v1/products")
      .then((response) => setgetProducts(response.data.product));
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const [modalproductos, setmodalproductos] = useState(false);
  const [productos, setproductos] = useState(0);
  const contador = () => {
    setproductos(productos + 1);
  };
  const handleModalR = () => {
    setModalVisible(!modalVisible);
  };
  const product = 0;
  const renderProduct = ({ item }) => {
    return (
      <View style={styles.Lista}>
        <View style={styles.detalles}>
          <Image source={{ uri: item.image }} style={styles.imgLista} />
        </View>
      </View>
    );
  };
  console.log(getProducts);

  return (
    <View style={styles.primary}>
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.buttonText}>Promo%</Text>
      </TouchableOpacity>
      <View style={styles.containeraddress}>
        <View style={styles.user}>
          <Image
            style={styles.icon}
            source={require("./assets/icons/desconocido.png")}
          />
        </View>

        <Text style={styles.TextAddress}>📍 Nueva Loja - Lago Agrio</Text>
      </View>

      <View style={styles.containersearch}>
        <TextInput
          style={styles.textinput}
          placeholder="Que Vamos a comer Hoy"
        />
      </View>
     <View style={styles.containerSlider}>
     <Carousel
            autoplay
            loop
            autoplayInterval={2000}
              data={getProducts}
              renderItem={renderProduct}
              sliderWidth={360}
              itemWidth={200}
            />
     </View>
      <View style={styles.containerBuss}>
        <View style={styles.row}>
            <View style={styles.column}>
          <TouchableOpacity onPress={handleModalR}>
              <Image
                style={styles.imagebuss}
                source={require("./assets/icons/restaurante.png")}
              />
              <Text>restaurante</Text>
          </TouchableOpacity>
            </View>
          <View style={styles.column}>
            <Image
              style={styles.imagebuss}
              source={require("./assets/icons/farmacia.png")}
            />
            <Text>Farmacia</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Image
              style={styles.imagebuss}
              source={require("./assets/icons/tienda.png")}
            />
            <Text>Tiendas</Text>
          </View>
          <View style={styles.column}>
            <Image
              style={styles.imagebuss}
              source={require("./assets/icons/superm.png")}
            />
            <Text>Supermercado</Text>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={handleModalR}
        >
            <Productos/>
            <TouchableOpacity onPress={handleModalR} style={{position:"absolute"}}>
          <Text>cerrar</Text>
        </TouchableOpacity>
        </Modal>
      
      </View>



      
    </View>
  );
};

export default App;
