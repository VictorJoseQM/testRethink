import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Avatar from "./components/Avatar";
import NomeMaker from "./components/NameMaker";
import DescriptionDetail from "./components/DescriptionDetail";
import WorkOptions from "./components/WorkOptions";
import CheckBoxProducts from "./components/AddProductsCheckBox";
import ContinueBtn from "../../../common/ContinueBtn";
import { useFormData } from "../../context/FormDataProvider";

export default function DetailMakerForm({ onContinue }) {
  const { formData, updateFormData } = useFormData();
  const [errors, setErrors] = useState({});
  const [novaOpcao, setNovaOpcao] = useState(""); // Estado para novaOpcao
  const [opcoesTrabalho, setOpcoesTrabalho] = useState([
    "Action Figures",
    "Casa",
    "Canecas",
  ]); // Inicializando opções de trabalho
  const makerDetails = formData.makerDetails || {};

  const validateForm = () => {
    const newErrors = {};

    if (!makerDetails.avatarUri || makerDetails.avatarUri.trim() === "") {
      newErrors.avatarUri = "Adicione uma imagem de avatar.";
    }

    if (!makerDetails.nome || makerDetails.nome.trim() === "") {
      newErrors.nome = "Preencha o nome.";
    }

    if (!makerDetails.descricao || makerDetails.descricao.trim() === "") {
      newErrors.descricao = "Preencha a descrição.";
    }

    if (!makerDetails.categorias || makerDetails.categorias.length < 2) {
      newErrors.categorias = "Selecione pelo menos duas opções de trabalho.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFieldChange = (field, value) => {
    // Atualiza o formData
    updateFormData("makerDetails", { ...makerDetails, [field]: value });

    // Remove todos os erros quando qualquer campo é atualizado
    setErrors({});
  };

  const handleContinue = () => {
    if (validateForm()) {
      if (formData.userType === "maker") {
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
      onContinue();
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.sectionTitle}>
        A partir daqui, recolheremos informações sobre seu perfil e descrição
        dos seus serviços.
      </Text>

      <Avatar onAvatarChange={(uri) => handleFieldChange("avatarUri", uri)} />
      {errors.avatarUri && (
        <Text style={styles.errorText}>{errors.avatarUri}</Text>
      )}

      <NomeMaker
        value={makerDetails.nome || ""}
        onChange={(value) => handleFieldChange("nome", value)}
      />
      {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

      <DescriptionDetail
        value={makerDetails.descricao || ""}
        onChange={(value) => handleFieldChange("descricao", value)}
      />
      {errors.descricao && (
        <Text style={styles.errorText}>{errors.descricao}</Text>
      )}

      <WorkOptions
        opcoesTrabalho={opcoesTrabalho} // Passando o estado de opções de trabalho
        setOpcoesTrabalho={setOpcoesTrabalho} // Passando a função de atualização
        novaOpcao={novaOpcao} // Passando novaOpcao
        setNovaOpcao={setNovaOpcao} // Passando setNovaOpcao
      />
      {errors.categorias && (
        <Text style={styles.errorText}>{errors.categorias}</Text>
      )}

      <CheckBoxProducts />
      <ContinueBtn
        onPress={handleContinue}
        isComplete={Object.keys(errors).length === 0}
      />
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
    padding: 20,
    justifyContent: "space-around",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 20,
    color: "#000",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
  },
});
