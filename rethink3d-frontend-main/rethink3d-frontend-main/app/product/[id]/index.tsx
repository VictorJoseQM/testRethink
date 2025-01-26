import { ScrollView, StyleSheet } from "react-native";
import Categories from "@/components/product/Categories";
import ImageCarousel from "@/components/product/ImageCarousel";
import ProductTitle from "@/components/product/ProductTitle";
import ProductDimensions from "@/components/product/ProductDimensions";
import ProductPricingActions from "@/components/product/ProductPricingActions";
import ProductDescription from "@/components/product/ProductDescription";
import Profile from "@/components/maker-market/Profile";
import ProfileIcon from "@/assets/images/common/Rethink3DLogo.svg";
import Header from "@/components/common/Header";

export default function ProductPage() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Categories categories={["Animais", "Escultura", "Metal"]} />
      <ProductTitle title="Escultura/Estrutura Molecular em Metal de Elefante" />
      <ImageCarousel
        images={[
          "https://th.bing.com/th/id/OIP.VtUDLd-L-ZOCpxU87vLkYwHaEK?rs=1&pid=ImgDetMain",
          "https://wallpapercave.com/wp/wc1802079.jpg",
          "https://i.pinimg.com/originals/ee/98/1b/ee981bac25af3c7be719384efea0dfea.jpg",
          "https://th.bing.com/th/id/OIP.vPUhM1n-QID9P6KbZSRsWgHaGh?w=670&h=590&rs=1&pid=ImgDetMain",
        ]}
      />
      <ProductDimensions
        dimensions={[
          { label: "Altura", value: "10cm" },
          { label: "Largura", value: "10cm" },
          { label: "Profundidade", value: "10cm" },
          { label: "Peso", value: "200g" },
        ]}
      />
      <ProductPricingActions
        oldPrice="R$ 49,99"
        currentPrice="R$ 39,99"
        discount="(20% de desconto)"
        installments="em até 6x"
        onBuyNow={() => console.log("Comprar agora")}
        onAddToCart={() => console.log("Adicionar ao carrinho")}
      />
      <ProductDescription
        description={`Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os comeu.

• Produto muito resistente
• Feito com metal de qualidade
• Feito para você`}
      />
      {/* Seção de Perfil */}
      <Profile
        nome="Rethink3D"
        etiquetas={[
          "Modela",
          "Imprime",
          "Decoração",
          "Action figures",
          "Industrial",
          "Casa",
        ]}
        dataAdesao="Desde 15/12/2024"
        avaliacao={5}
        SvgImagem={ProfileIcon}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
