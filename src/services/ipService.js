/**
 * IP Service - Provides Info about IP address
 *
*/


const ipApiUrl = "http://ip-api.com/json/";
const api = "https://ipgeolocation.abstractapi.com/v1/";

export async function ipInfo(ip) {
  let data = {};
  let errors = {};

  try {
    // throw new Error('unce...')

    const url = !ip ? `${ipApiUrl}` : `${ipApiUrl}${ip}`;


    const response = await fetch(url);

    

    data = await response.json();
    console.log(data);

  } catch (error) {
    errors = { message: error.message };
  }

  return {
    data,
    errors,
  };
}

