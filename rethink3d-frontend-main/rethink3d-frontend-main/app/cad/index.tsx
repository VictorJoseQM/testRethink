import React, { useState, useRef } from "react";
import { StyleSheet, Animated, View, ScrollView } from "react-native";
import { FormProvider, useForm } from "react-hook-form";
import { FormDataProvider } from "../../components/cad/context/FormDataProvider";
import MakerSelection from "../../components/cad/maker/MakerSelectionPage";
import ClientSelection from "../../components/cad/client/ClientSelectionPage";
import Header from "../../components/cad/components-both/Header";
import AuthForm from "../../components/cad/forms-both/AuthForm";
import PersonalDataForm from "../../components/cad/forms-both/PersonalDataForm";
import AddressForm from "../../components/cad/forms-both/AddressForm";
import PerfilMakerFrom from "../../components/cad/maker/forms/ProfileMakerForm";
import DetalhamentoMaker from "../../components/cad/maker/forms/DetailMakerForm";
import WelcomeScreen from "../../components/cad/components-both/WelcomeScreen";
import Buttons from "../../components/cad/components-both/Buttons";

export default function Index() {
  const [userType, setUserType] = useState<"maker" | "cliente">("cliente"); // Estado para o tipo de usuário
  const [currentStep, setCurrentStep] = useState<"selection" | "form">(
    "selection"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const methods = useForm();

  const handleTypeChange = (type: "maker" | "cliente") => {
    setUserType(type); // Atualiza o tipo de usuário
  };

  const isMaker = userType === "maker";

  const handleNextPage = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setCurrentPage((prevPage) =>
        isMaker
          ? Math.min(prevPage + 1, 6)
          : prevPage === 3
          ? 6
          : Math.min(prevPage + 1, 6)
      );
    }
  };

  const handlePreviousPage = () => {
    if (currentPage === 1) {
      setCurrentStep("selection");
    } else {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  const handleContinue = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setCurrentStep("form");
      fadeAnim.setValue(1);
    });
  };

  const formPages: Record<
    number,
    {
      component: JSX.Element;
      title: string;
      applicableTo: "both" | "maker" | "cliente";
    }
  > = {
    1: {
      component: <AuthForm onContinue={handleNextPage} />,
      title: "Crie sua conta",
      applicableTo: "both",
    },
    2: {
      component: <PersonalDataForm onContinue={handleNextPage} />,
      title: "Dados pessoais",
      applicableTo: "both",
    },
    3: {
      component: <AddressForm onContinue={handleNextPage} />,
      title: "Endereços",
      applicableTo: "both",
    },
    4: {
      component: <PerfilMakerFrom onContinue={handleNextPage} />,
      title: "Seu perfil Maker",
      applicableTo: "maker",
    },
    5: {
      component: <DetalhamentoMaker onContinue={handleNextPage} />,
      title: "Detalhamento",
      applicableTo: "maker",
    },
    6: {
      component: <WelcomeScreen />,
      title: "",
      applicableTo: "both",
    },
  };

  const renderFormPage = () => {
    const currentForm = formPages[currentPage];
    if (!currentForm) {
      return null;
    }

    // Exibe apenas páginas que são aplicáveis ao tipo de usuário
    if (
      currentForm.applicableTo === "both" ||
      currentForm.applicableTo === userType
    ) {
      return currentForm.component;
    }

    return null;
  };

  const renderSelectionPage = () => (
    <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
      {isMaker ? <MakerSelection /> : <ClientSelection />}
      <Buttons
        onContinue={handleContinue}
        onTypeChange={handleTypeChange}
        selectedType={userType} // Passa o userType para os botões
      />
    </Animated.View>
  );

  return (
    <FormDataProvider>
      <FormProvider {...methods}>
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                currentStep === "selection"
                  ? userType === "maker"
                    ? "#000"
                    : "#FFF" // Seleção depende do tipo de usuário
                  : currentPage === 6
                  ? "#FFF" // Última página sempre branca
                  : "#000", // Formulários com fundo preto
            },
          ]}
        >
          {currentStep === "selection" ? (
            renderSelectionPage()
          ) : (
            <ScrollView
              style={styles.formContainer}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              {formPages[currentPage]?.title && (
                <Header
                  title={formPages[currentPage]?.title || ""}
                  onBack={currentPage >= 1 ? handlePreviousPage : undefined}
                />
              )}
              {renderFormPage()}
            </ScrollView>
          )}
        </View>
      </FormProvider>
    </FormDataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
  },
});
