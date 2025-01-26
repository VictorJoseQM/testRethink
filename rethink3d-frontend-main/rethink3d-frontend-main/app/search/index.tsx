import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import LoadingView from "@/components/search/LoadingView";
import {
  SearchedMakerProtocol,
  SearchedProductProtocol,
} from "@/types/interfaces/SearchProtocols";
import { ProductList, MakerList } from "@/components/search/Lists";
import { getSearchedMakers, getSearchedProducts } from "@/api/search/data";
import ChangeSectionButton from "@/components/search/ChangeSectionButton";

type SearchResult = {
  makers: SearchedMakerProtocol[];
  produtos: SearchedProductProtocol[];
};

const SearchContext = createContext<string | undefined>(undefined);
const ResultContext = createContext({
  makers: [] as SearchedMakerProtocol[],
  produtos: [] as SearchedProductProtocol[],
});

export default function index() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<SearchResult>({
    makers: [],
    produtos: [],
  });
  const { searchParam } = useLocalSearchParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const produtos = await getSearchedProducts(searchParam.toString());
        const makers = await getSearchedMakers(searchParam.toString());
        setResult({ makers: makers, produtos: produtos });
      } catch (e) {
        e instanceof Error && console.log("Failed");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [searchParam]);

  return (
    <SearchContext.Provider value={searchParam as string}>
      <ResultContext.Provider value={result}>
        <View style={styles.view}>
          {isLoading ? <LoadingView /> : <ResultView />}
        </View>
      </ResultContext.Provider>
    </SearchContext.Provider>
  );
}

function ResultView() {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <SearchResults />
      </View>
    </ScrollView>
  );
}

function SearchResults() {
  const searchParam = useContext(SearchContext);
  const { makers, produtos } = useContext(ResultContext);

  return (
    <View>
      <Text style={styles.resultDesc}>
        Exibindo resultados para "{searchParam}"
      </Text>
      <View style={styles.resultList}>
        {produtos.length > 0 ? (
          <>
            <ProductList products={produtos} hasTitle />
            <ChangeSectionButton
              href={{
                pathname: "/search/products",
                params: { searchParam: searchParam },
              }}
            />
          </>
        ) : (
          <Text style={styles.notFoundMessage}>Nenhum produto encontrado.</Text>
        )}
      </View>
      {makers.length > 0 ? (
        <>
          <MakerList makers={makers} hasTitle />
          <ChangeSectionButton
            href={{
              pathname: "/search/makers",
              params: { searchParam: searchParam },
            }}
          />
        </>
      ) : (
        <Text style={styles.notFoundMessage}>Nenhum Maker encontrado.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: { display: "flex", flex: 1 },
  container: { flex: 1, display: "flex", padding: 20 },

  resultList: { display: "flex", flexDirection: "column", flex: 1 },
  resultDesc: { textAlign: "right" },
  notFoundMessage: {
    padding: 18,
    textAlign: "center",
    width: "100%",
    fontWeight: 500,
  },
});
