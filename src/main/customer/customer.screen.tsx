import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { OrderDirectionEnum } from "src/@constants";
import { AddIcon, SortIcon } from "src/assets/icons";
import { SearchForm } from "src/components";
import { Sort } from "src/components/sort";
import { CardCustomer } from "./component/card-customer";
import { useRouteNavigator } from "src/@hooks";

export const CustomerScreen: React.FC = () => {
  const nav = useRouteNavigator()
  //api
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      {/* SearchBar */}
      <View
        style={{
          height: 90,
          backgroundColor: "#FFFF",
          paddingHorizontal: 16,
          paddingVertical: 20,
        }}
      >
        <SearchForm placeholder="Cari nama/ID pelanggan" />
      </View>

      <View style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 16 }}>
        <View style={{ paddingBottom: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 25,
            }}
          >
            <View style={{ alignSelf: "center" }}>
              <Sort
                orderBy={["semua", "aktif", "nonaktif"]}
                orderDirection={OrderDirectionEnum.ASC}
              />
            </View>
            <TouchableOpacity style={{ justifyContent: "flex-end" }}>
              <SortIcon height={24} width={24} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <CardCustomer key={1} id="TEST123" name="ahok" number={1} status address="Sendang No. 69, RT 66 RW 66, Sumbersoko, Sukolilo, Pati" createdAt="01-01-2024" email="email@email.com" phone="08203810822"/>
          <CardCustomer key={1} id="TEST123" name="ahok" number={1} status address="Sendang No. 69, RT 66 RW 66, Sumbersoko, Sukolilo, Pati" createdAt="01-01-2024" email="email@email.com" phone="08203810822"/>
          <CardCustomer key={1} id="TEST123" name="ahok" number={1} status address="Sendang No. 69, RT 66 RW 66, Sumbersoko, Sukolilo, Pati" createdAt="01-01-2024" email="email@email.com" phone="08203810822"/>
          <CardCustomer key={1} id="TEST123" name="ahok" number={1} status={false} address="Sendang No. 69, RT 66 RW 66, Sumbersoko, Sukolilo, Pati" createdAt="01-01-2024" email="email@email.com" phone="08203810822"/>
          <CardCustomer key={1} id="TEST123" name="ahok" number={1} status={false} address="Sendang No. 69, RT 66 RW 66, Sumbersoko, Sukolilo, Pati" createdAt="01-01-2024" email="email@email.com" phone="08203810822"/>
          <CardCustomer key={1} id="TEST123" name="ahok" number={1} status={false} address="Sendang No. 69, RT 66 RW 66, Sumbersoko, Sukolilo, Pati" createdAt="01-01-2024" email="email@email.com" phone="08203810822"/>
          <CardCustomer key={1} id="TEST123" name="ahok" number={1} status={false} address="Sendang No. 69, RT 66 RW 66, Sumbersoko, Sukolilo, Pati" createdAt="01-01-2024" email="email@email.com" phone="08203810822"/>
          <CardCustomer key={1} id="TEST123" name="ahok" number={1} status={false} address="Sendang No. 69, RT 66 RW 66, Sumbersoko, Sukolilo, Pati" createdAt="01-01-2024" email="email@email.com" phone="08203810822"/>
        </ScrollView>
      </View>
      <TouchableOpacity style={{ position: "absolute", right: 16, bottom: 16 }} onPress={() => nav("CREATE_CUSTOMER_SCREEN")}>
        <View>
          <AddIcon height={50} width={50} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
