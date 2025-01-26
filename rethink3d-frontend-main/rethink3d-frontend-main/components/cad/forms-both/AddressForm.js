import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ContinueBtn from "../../common/ContinueBtn";
import { useFormData } from "../context/FormDataProvider";

export default function AddressForm({ onContinue }) {
  // Estados para armazenar os valores dos campos de formulário
  const { formData, updateFormData } = useFormData(); // Hook para acessar o contexto
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [errors, setErrors] = useState({});
  const [allFieldsError, setAllFieldsError] = useState(false);

  // Função para validar o formato do CEP
  const validateCep = (value) => /^\d{5}-\d{3}$/.test(value);

  // Lista de UFs brasileiras
  const ufsBrasileiras = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  // Função para validar o formato da UF (2 letras maiúsculas) e verificar se é uma UF válida
  const validateUf = (value) =>
    /^[A-Z]{2}$/.test(value) && ufsBrasileiras.includes(value);

  // Função que valida todos os campos do formulário
  const handleValidation = () => {
    const newErrors = {}; // Objeto para armazenar erros de validação
    const fields = { cep, logradouro, numero, bairro, cidade, uf }; // Campos obrigatórios
    const allFieldsEmpty = Object.values(fields).every(
      (value) => !value.trim()
    ); // Verifica se todos os campos obrigatórios estão vazios

    // Se todos os campos obrigatórios estão vazios, retorna erro geral
    if (allFieldsEmpty) {
      setAllFieldsError(true);
      setErrors({});
      return false; // Bloqueia a continuidade do formulário
    }

    setAllFieldsError(false); // Reseta o erro geral
    let hasError = false;

    // Validações específicas para cada campo
    if (!cep) {
      newErrors.cep = "O campo CEP é obrigatório.";
      hasError = true;
    } else if (!validateCep(cep)) {
      newErrors.cep = "Insira um CEP válido (XXXXX-XXX).";
      hasError = true;
    }

    if (!logradouro) {
      newErrors.logradouro = "O campo logradouro é obrigatório.";
      hasError = true;
    }

    if (!numero) {
      newErrors.numero = "O campo número é obrigatório.";
      hasError = true;
    } else if (isNaN(numero)) {
      newErrors.numero = "O campo número deve conter apenas números.";
      hasError = true;
    }

    if (!bairro) {
      newErrors.bairro = "O campo bairro é obrigatório.";
      hasError = true;
    }

    if (!cidade) {
      newErrors.cidade = "O campo cidade é obrigatório.";
      hasError = true;
    }

    if (!uf) {
      newErrors.uf = "O campo UF é obrigatório.";
      hasError = true;
    } else if (!validateUf(uf)) {
      newErrors.uf = "Insira uma UF válida (2 letras maiúsculas).";
      hasError = true;
    }

    setErrors(newErrors); // Atualiza os erros no estado
    return !hasError; // Retorna true se não houver erros
  };

  // Função chamada ao clicar no botão "Continuar"
  const handleContinue = () => {
    if (handleValidation()) {
      // Atualiza os dados no contexto com os dados de endereço
      updateFormData("addressData", {
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
      });

      if (formData.userType === "cliente") {
        // Enviar os dados para o backend caso o tipo de usuário seja "cliente"
        fetch("SEU_BACKEND_URL", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Envia o formData completo
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Resposta do backend:", data);
            // Aqui você pode tratar a resposta do backend, ex: redirecionar ou mostrar mensagem
          })
          .catch((error) => {
            console.error("Erro ao enviar dados:", error);
          });
      }

      onContinue(); // Chama a função de continuação passada via props se não houver erros
    }
  };

  const isComplete = [cep, logradouro, numero, bairro, cidade, uf].every(
    (value) => value.trim() !== ""
  );

  return (
    <View style={styles.form}>
      <Text style={styles.sectionTitle}>Endereço Principal</Text>

      {/* Campo CEP */}
      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={(text) => setCep(text)}
        keyboardType="numeric"
      />
      {!allFieldsError && errors.cep && (
        <Text style={styles.errorText}>{errors.cep}</Text>
      )}

      {/* Campo Logradouro e Número */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Logradouro</Text>
          <TextInput
            style={styles.rowInput}
            value={logradouro}
            onChangeText={(text) => setLogradouro(text)}
          />
          {!allFieldsError && errors.logradouro && (
            <Text style={styles.errorText}>{errors.logradouro}</Text>
          )}
        </View>
        <View style={[styles.column, styles.smallColumn]}>
          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.rowInput}
            value={numero}
            onChangeText={(text) => setNumero(text)}
            keyboardType="numeric"
          />
          {!allFieldsError && errors.numero && (
            <Text style={styles.errorText}>{errors.numero}</Text>
          )}
        </View>
      </View>

      {/* Campo Complemento */}
      <Text style={styles.label}>Complemento</Text>
      <TextInput
        style={styles.input}
        value={complemento}
        onChangeText={(text) => setComplemento(text)}
      />

      {/* Campo Bairro */}
      <Text style={styles.label}>Bairro</Text>
      <TextInput
        style={styles.input}
        value={bairro}
        onChangeText={(text) => setBairro(text)}
      />
      {!allFieldsError && errors.bairro && (
        <Text style={styles.errorText}>{errors.bairro}</Text>
      )}

      {/* Campo Cidade */}
      <Text style={styles.label}>Cidade</Text>
      <TextInput
        style={styles.input}
        value={cidade}
        onChangeText={(text) => setCidade(text)}
      />
      {!allFieldsError && errors.cidade && (
        <Text style={styles.errorText}>{errors.cidade}</Text>
      )}

      {/* Campo UF */}
      <Text style={styles.label}>UF</Text>
      <TextInput
        style={styles.input}
        value={uf}
        onChangeText={(text) => setUf(text)}
        maxLength={2}
      />
      {!allFieldsError && errors.uf && (
        <Text style={styles.errorText}>{errors.uf}</Text>
      )}

      {/* Erro geral */}
      {allFieldsError && (
        <Text style={styles.errorText}>Todos os campos são obrigatórios.</Text>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.info}>
          Informações sobre endereço e localização não serão compartilhadas sem
          sua prévia autorização.
        </Text>
        <ContinueBtn onPress={handleContinue} isComplete={isComplete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 30,
    color: "#000",
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  label: {
    width: "85%",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
    color: "#000",
  },
  input: {
    width: "85%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: 16,
    marginBottom: 10,
    color: "#000",
    paddingVertical: 5,
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  smallColumn: {
    flex: 0.4,
    marginRight: 0,
  },
  rowInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: 16,
    marginBottom: 20,
    color: "#000",
    paddingVertical: 5,
    width: "100%",
    paddingLeft: 10,
  },
  footer: {
    marginTop: "auto",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
  },
  info: {
    fontSize: 13,
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    width: "85%",
    lineHeight: 16,
    fontWeight: "300",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    width: "85%",
    textAlign: "left",
  },
});
