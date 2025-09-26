export async function getTonBalance(address: string) {
  console.log(address);
  try {
    const response = await fetch(
      `https://toncenter.com/api/v2/getWalletInformation?address=${address}`,
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
      const balanceTon = (data.result.balance / 10000).toString();
      return balanceTon;
    }

    throw new Error("Failed to get balance from response");
  } catch (error) {
    console.error("Error fetching TON balance:", error);
    return "0";
  }
}
