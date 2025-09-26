export async function getTonBalance(address: string): Promise<string> {
  try {
    // Кодируем адрес для URL
    const encodedAddress = encodeURIComponent(address);

    const response = await fetch(
      `https://toncenter.com/api/v2/getWalletInformation?address=${encodedAddress}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.ok && data.result) {
      // Конвертируем наноТОН в ТОН
      const balanceTon = (
        BigInt(data.result.balance) / BigInt(1000000000)
      ).toString();
      return balanceTon;
    }

    throw new Error("Failed to get balance from response");
  } catch (error) {
    console.error("Error fetching TON balance:", error);
    return "0";
  }
}
