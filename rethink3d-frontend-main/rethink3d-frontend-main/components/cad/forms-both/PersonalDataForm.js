import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ContinueBtn from "../../common/ContinueBtn";
import { useFormData } from "../context/FormDataProvider";

// Valida se o CPF é válido
const validateCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf[i - 1]) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  remainder = remainder === 10 || remainder === 11 ? 0 : remainder;

  if (remainder !== parseInt(cpf[9])) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf[i - 1]) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  remainder = remainder === 10 || remainder === 11 ? 0 : remainder;

  return remainder === parseInt(cpf[10]);
};

// Valida se o CNPJ é válido
const validateCNPJ = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

  // Função genérica para calcular os dígitos verificadores
  const calc = (base, weights) => {
    const sum = base
      .split("")
      .map((digit, i) => parseInt(digit) * weights[i])
      .reduce((a, b) => a + b, 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  // Calcula os dois dígitos verificadores do CNPJ
  const firstDigit = calc(
    cnpj.slice(0, 12),
    [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  );
  const secondDigit = calc(
    cnpj.slice(0, 13),
    [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  );

  return (
    firstDigit === parseInt(cnpj[12]) && secondDigit === parseInt(cnpj[13])
  );
};

// Componente do formulário para capturar dados pessoais
export default function PersonalDataForm({ onContinue }) {
  const { updateFormData } = useFormData(); // Hook para acessar o contexto
  const [identificationValue, setIdentificationValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});

  // Determina automaticamente o tipo de identificação
  const getIdentificationType = (value) => {
    if (value.replace(/[^\d]+/g, "").length <= 11) return "CPF";
    return "CNPJ";
  };

  // Valida os campos do formulário
  const handleValidation = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "O campo nome é obrigatório.";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "O campo sobrenome é obrigatório.";
    }

    if (!identificationValue) {
      newErrors.identification = "O campo identificação é obrigatório.";
    } else {
      const type = getIdentificationType(identificationValue);
      const isValid =
        type === "CPF"
          ? validateCPF(identificationValue)
          : validateCNPJ(identificationValue);

      if (!isValid) {
        newErrors.identification = `${type} inválido.`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função chamada ao clicar no botão "Continuar"
  const handleContinue = () => {
    if (handleValidation()) {
      const identificationType = getIdentificationType(identificationValue);
      updateFormData("personalData", {
        firstName,
        lastName,
        identificationType,
        identificationValue,
      });
      onContinue();
    }
  };

  // Verifica se todos os campos estão preenchidos
  const isComplete = identificationValue && firstName && lastName;

  // Formata CPF ou CNPJ para exibição
  const formatIdentification = (value) => {
    value = value.replace(/[^\d]+/g, "");
    if (value.length <= 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  };

  return (
    <View style={styles.form}>
      {/* Título da seção do formulário */}
      <Text style={styles.sectionTitle}>Informações básicas</Text>

      {/* Campo para o nome */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={firstName}
        onChangeText={setFirstName}
      />
      {/* Exibição do erro caso o campo nome não seja preenchido */}
      {errors.firstName && (
        <Text style={styles.errorText}>{errors.firstName}</Text>
      )}

      {/* Campo para o sobrenome */}
      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu sobrenome"
        value={lastName}
        onChangeText={setLastName}
      />
      {/* Exibição do erro caso o campo sobrenome não seja preenchido */}
      {errors.lastName && (
        <Text style={styles.errorText}>{errors.lastName}</Text>
      )}

      {/* Campo para CPF ou CNPJ */}
      <Text style={styles.label}>CPF ou CNPJ</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu CPF ou CNPJ"
        value={formatIdentification(identificationValue)}
        onChangeText={setIdentificationValue}
        keyboardType="numeric"
      />
      {/* Exibição do erro caso o CPF ou CNPJ seja inválido */}
      {errors.identification && (
        <Text style={styles.errorText}>{errors.identification}</Text>
      )}

      {/* Rodapé do formulário */}
      <View style={styles.footer}>
        {/* Informação adicional para o usuário */}
        <Text style={styles.info}>
          Apenas seu nome e parte de sua identificação será passada adiante para
          nossos vendedores parceiros.
        </Text>
        {/* Passa `isComplete` como prop para o botão */}
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
    marginBottom: 20,
    color: "#000",
    paddingVertical: 5,
    paddingLeft: 10,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 20,
  },
  radioButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  radioButtonSelected: {
    backgroundColor: "#000",
  },
  radioText: {
    color: "#000",
  },
  radioTextSelected: {
    color: "#fff",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-start",
    marginLeft: "7.5%",
    marginBottom: 10,
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
});
