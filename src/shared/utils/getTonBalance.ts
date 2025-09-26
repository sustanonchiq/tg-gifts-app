import { Address } from "@ton/core";

export async function getTonBalance(address: string) {
  try {
    // Конвертируем адрес в правильный формат
    const walletAddress = Address.parse(address);

    const response = await fetch(
      "https://toncenter.com/api/v2/getWalletInformation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: walletAddress.toString(),
        }),
      }
    );

    const data = await response.json();
    return data.result
      ? (BigInt(data.result.balance) / BigInt(1000000000)).toString()
      : "0";
  } catch (error) {
    console.error("Error:", error);
    return "0";
  }
}
