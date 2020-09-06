import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResult from "../hooks/userResult";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResult();

	const filterResultByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultList results={filterResultByPrice("$")} title="Cost Effective" />
				<ResultList results={filterResultByPrice("$$")} title="Bit Pricier" />
				<ResultList results={filterResultByPrice("$$$")} title="Big Spender" />
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
