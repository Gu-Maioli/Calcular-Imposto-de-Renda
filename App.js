import { Component, React } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salarioBruto: 0,
      valorRF: 0,
    };
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton() {
    console.log("> " + this.state.salarioBruto);
    var aliquota = 0;
    var deducao = 0;

    if (this.state.salarioBruto <= 1400) {
      aliquota = 0;
      deducao = 0;
    } else {
      if (this.state.salarioBruto <= 2100) {
        aliquota = 10;
        deducao = 100;
      } else {
        if (this.state.salarioBruto <= 2800) {
          aliquota = 15;
          deducao = 270;
        } else {
          if (this.state.salarioBruto <= 3600) {
            aliquota = 25;
            deducao = 500;
          } else {
            aliquota = 30;
            deducao = 700;
          }
        }
      }
    }

    var valor = this.state.salarioBruto * (aliquota / 100) - deducao;

    this.setState({
      valorRF: valor,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./assets/irpf-copiar.webp")}
        />
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={(values) => this.setState({ salarioBruto: values })}
            placeholder="Salário Bruto"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.clickButton()}
          >
            <Text>Calcular</Text>
          </TouchableOpacity>

          <Text style={styles.txtRF}>R$: {this.state.valorRF.toFixed(1)}</Text>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 350,
    height: 250,
  },
  input: {
    width: 110,
    height: 52,
    margin: 12,
    borderWidth: 4,
    borderRadius: 6,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    padding: 12,
    borderColor: "#4169E1",
  },
  botao: {
    width: 110,
    height: 50,
    margin: 12,
    borderWidth: 4,
    borderRadius: 6,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    borderColor: "#4169E1",
  },
  txtRF: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    alignItems: "center",
  },
});

export default App;
