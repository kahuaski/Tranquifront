import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import estilos from "../../indexStyles";

//import Productos from './Productos';

const Compras = (selectedItemId) => {
  const [imageURL, setImageURL] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [contador, setcontador] = useState(0);
  const id = selectedItemId.name;
  const agregar = (value) => {
    setcontador(contador + value);
  };
  useEffect(() => {
    axios
      .get(`https://tranquiserver.onrender.com/api/v1/products/${id}`)
      .then((response) => {
        setImageURL(response.data.product.image);
        setdescription(response.data.product.description);
        setPrice(response.data.product.price);
        setName(response.data.product.name);
      });
  }, [id]);

  return (
    <View>
      <View style={estilos.containerCompras}>
        <Text style={{ fontSize: 16, fontWeight: "900" }}>{name}</Text>
        <Image source={{ uri: imageURL }} style={{ width: 390, height: 300 }} />
        <View style={estilos.containerC}>
          <Text style={estilos.textoC}>{description}</Text>
          <Text>${price}</Text>
        </View>
      </View>
      <View style={estilos.containerProduct}>
        <Text style={estilos.textoA}>{contador}</Text>
        <View style={estilos.containerAgregar}>
          <TouchableOpacity onPress={() => agregar(1)}>
            <Text style={{ fontSize: 18, paddingHorizontal: 22 ,color:"white" }}>+</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, color:"white" }}>AGREGAR</Text>
          <TouchableOpacity onPress={() => agregar(-1)}>
            <Text style={{ fontSize: 18, paddingHorizontal: 22,color:"white" }}>-</Text>
          </TouchableOpacity>
        </View>
        <Text style={estilos.textoT}>${contador * price}.USD</Text>
        <TouchableOpacity style={estilos.containercompr}>
          <Text style={{ fontSize: 18, color:"white" }}>PAGAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Compras;
