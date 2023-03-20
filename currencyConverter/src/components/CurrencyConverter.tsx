import React, { useEffect, useState } from "react";
import * as Separator from "@radix-ui/react-separator";
import axios from "axios";
import { Icon } from "@iconify/react";
import ExchangeRateChart from "./Chart";
interface ICurrency {
  code: string;
  name: string;
}

export const CurrencyConverter = () => {
  const getCurrencyPrefix = (code: string): string => {
    switch (code) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "GBP":
        return "£";
      case "BRL":
        return "R$";
      default:
        return "";
    }
  };

  const [amount, setAmount] = useState<number>(0);

  const [fromCurrency, setFromCurrency] = useState<ICurrency>({
    code: "USD",
    name: "United States Dollar",
  });
  const [toCurrency, setToCurrency] = useState<ICurrency>({
    code: "BRL",
    name: "Brazilian Real",
  });
  const [result, setResult] = useState<number>(0);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
  };

  const handleFromCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCurrency = e.target.value.split("-");
    setFromCurrency({
      code: selectedCurrency[0],
      name: selectedCurrency[1],
    });
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value.split("-");
    setToCurrency({
      code: selectedCurrency[0],
      name: selectedCurrency[1],
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency.code}`
      );
      setResult(amount * response.data.rates[toCurrency.code]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-textPrimary font-semibold text-base font-main mt-4 ml-6 mb-4">
        Conversor de moedas
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="border-highlight border-[1px] w-fit h-fit flex gap-2 rounded-lg ml-6 p-2 mr-6 mt-6">
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
          />
          <Separator.Root
            className="bg-hover h-6 w-[1px]"
            decorative
            orientation="vertical"
          />
          <select
            id="fromCurrency"
            value={`${fromCurrency.code}-${fromCurrency.name}`}
            onChange={handleFromCurrencyChange}
            className="bg-surfacePrimary  duration-200"
          >
            <option value="USD-United States Dollar">USD</option>
            <option value="EUR-Euro">EUR</option>
            <option value="GBP-British Pound Sterling">GBP</option>
            <option value="BRL-Brazilian Real">BRL</option>
          </select>
        </div>
        <button type="submit" className="ml-36">
          <Icon
            icon="tabler:arrows-exchange"
            className="h-6 w-6 text-center text-textPrimary  mt-2 mb-2"
          />
        </button>
        <div className="border-highlight border-[1px] w-fit h-fit flex gap-2 rounded-lg ml-6 p-2 mr-6">
          <input
            id="result"
            value={`${getCurrencyPrefix(toCurrency.code)} ${result.toFixed(2)}`}
            readOnly
          />
          <Separator.Root
            className="bg-hover h-6 w-[1px]"
            decorative
            orientation="vertical"
          />
          <select
            id="toCurrency"
            value={`${toCurrency.code}-${toCurrency.name}`}
            onChange={handleToCurrencyChange}
            className="bg-surfacePrimary  duration-200"
          >
            <option value="USD-United States Dollar">USD</option>
            <option value="EUR-Euro">EUR</option>
            <option value="GBP-British Pound Sterling">GBP</option>
            <option value="BRL-Brazilian Real">BRL</option>
          </select>
        </div>
        <h2 className="text-textPrimary font-semibold text-base font-main mt-8 ml-6 mb-4">
          Taxa de câmbio
        </h2>
        <ExchangeRateChart
          exchangeRates={[
            { currency: "BRL", rate: 0.5 },
            { currency: "USD", rate: 58 },

            { currency: "GBP", rate: 70 },
            { currency: "EUR", rate: 60 },
          ]}
        />
      </form>
    </div>
  );
};
