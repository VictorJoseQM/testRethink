import React, { createContext, useContext, useState } from "react";

// Define a estrutura dos dados do formulário
interface FormData {
  userType?: "maker" | "cliente"; // Tipo de usuário
  authData?: { email: string; password: string }; // Dados de autenticação
  personalData?: {
    // Dados pessoais
    firstName: string; // Nome
    lastName: string; // Sobrenome
    identificationType: "CPF" | "CNPJ"; // Tipo de identificação
    identificationValue: string; // Valor da identificação
  };
  addressData?: {
    // Endereço
    cep: string; // CEP
    logradouro: string; // Logradouro
    numero: string; // Número
    bairro: string; // Bairro
    cidade: string; // Cidade
    uf: string; // Estado (UF)
  };
  makerType?: "vender" | "modelar" | "ambos"; // Tipo de maker
  makerDetails?: {
    avatarUri?: string; // Para exibir a imagem no app
    avatarBlob?: Blob; // Para armazenar o arquivo da imagem
    nome?: string;
    descricao?: string;
    categorias?: string[];
  };
}

// Define o formato do contexto
interface FormDataContextType {
  formData: FormData; // Estado atual do formulário
  updateFormData: <K extends keyof FormData>( // Função para atualizar o formulário
    key: K, // Chave da propriedade a ser atualizada
    value: FormData[K] // Valor da propriedade correspondente
  ) => void;
}

// Cria o contexto do formulário
const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

// Componente provedor do contexto
export const FormDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formData, setFormData] = useState<FormData>({}); // Estado inicial do formulário

  /**
   * Atualiza uma propriedade específica do formulário.
   * @param key - Chave da propriedade a ser atualizada.
   * @param value - Valor correspondente à chave.
   */
  const updateFormData = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, [key]: value };
      console.log("Atualizando formData:", updatedData); // Log aqui
      return updatedData;
    });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useFormData = () => {
  const context = useContext(FormDataContext); // Acessa o contexto
  if (!context) {
    throw new Error("useFormData deve ser usado dentro de um FormDataProvider");
  }
  return context;
};
