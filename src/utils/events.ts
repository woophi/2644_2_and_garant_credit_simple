declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
export const sendDataToGA = async (creditSum: number) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbw862TqGp_LYbusKISB8t0IkNg_ad_L1YcINX7LPxyD_aQE0GCiDRdB0R_EqHI3rcXQ/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, credit_sum: creditSum, variant: '2644_2_and_garant_credit_simple' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
