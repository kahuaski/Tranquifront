import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
  SafeAreaView,
  Modal,
} from "react-native";
import { ViewPropTypes } from 'react-native';

// Usar ViewPropTypes para validar props

import estilo from "../../indexStyles";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../indexStyles";


import Compras from "../screen/Compras";

const Productos = () => {
 
  const [Mvisible, setMvisible] = useState(false);
  const [getProducts, setgetProducts] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  useEffect(() => {
    axios
      .get("https://tranquiserver.onrender.com/api/v1/products")
      .then((response) => setgetProducts(response.data.product));
  }, []);

  const renderProduct = ({ item }) => {
    return (
      <View style={estilo.productLista}>
        <View style={estilo.detalles}>
          <TouchableOpacity
            onPress={() => handleItemPress(item.id)}
            key={item.id}
          >
            <Text style={{ fontSize: 16, fontWeight: "900" }}>
              Mostaza&Miel
            </Text>
            <Image source={{ uri: item.image }} style={estilo.imgListaP} />

            <View
              style={{
                flexDirection: "row",
                gap: 40,
                backgroundColor: " #00000080",
                flex: 1,
              }}
            >
              <Text style={styles.titleArticule}>${item.price}</Text>
              <Text style={styles.titleArticule}>{item.name}</Text>
              <Text style={styles.titleArticule}>Agregar:+0-</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const handleModalp = () => {
    setMvisible(!Mvisible);
  };

  const handleItemPress = (itemId) => {
    setSelectedItemId(itemId);
    handleModalp(); // Abre o cierra el modal al hacer clic en un elemento
  };
  console.log("aquiasdsad", selectedItemId);
  return (
    <View>
      <SafeAreaView>
        {getProducts.length === 0 ? (
          <ActivityIndicator
            styles={estilo.activacion}
            size="small"
            color="#0999ff"
          /> // Muestra un indicador de carga
        ) : (
          <FlatList
            data={getProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </SafeAreaView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={Mvisible}
        onRequestClose={handleModalp}
      >
        <Compras name={selectedItemId} />
        <TouchableOpacity onPress={handleModalp}>
          <Text>Cerrar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default Productos;
