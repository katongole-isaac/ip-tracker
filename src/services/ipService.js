/**
 * IP Service - Provides Info about IP address
 *
 */

const ipApiUrl = "http://ip-api.com/json/";

export async function ipInfo(ip) {
  let data = {};
  let errors = {};

  try {

    // throw new Error('unce...')

    const url = !ip ? `${ipApiUrl}` : `${ipApiUrl}${ip}`;

    const response = await fetch(url);


    data = await response.json();



  } catch (error) {

    errors = { message: error.message };
      
  }

  return {
    data,
    errors,
  };
}
