import { BASE_URL } from "../common/Constant";

/**getAllTransactions APi */
export const getAllTransactions = async () => {
    console.log(' getAllTransactions');
    try {
      return fetch(`${BASE_URL}/history`, {
        method: 'GET', // or 'POST' or other methods
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by your API
        },
      }).then(res => {
        console.log(' getAllpayment', res);
        return res.json();
      });
    } catch (error) {
      console.log('getAllpayment ', error);
    }
  };