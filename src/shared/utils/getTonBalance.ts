export async function getTonBalance(address: string) {
  try {
    const response = await fetch(
      "https://toncenter.com/api/v2/getWalletInformation",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: address,
        }),
      }
    );

    const data = await response.json();

    if (data.ok && data.result) {
      const balanceTon = (
        BigInt(data.result.balance) / BigInt(1000000000)
      ).toString();
      return balanceTon;
    }

    throw new Error("Failed to get balance");
  } catch (error) {
    console.error("Error:", error);
    return "0";
  }
}
