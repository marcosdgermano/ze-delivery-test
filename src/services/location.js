import fetch from 'cross-fetch';
import get from 'lodash/get';

export const getGeoLocation = async address => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDi8L6iqX7uY-HzKSyS95PuxiJ1jBYD-yY`
    );
    const result = await response.json();

    return get(result, ['results', '0', 'geometry', 'location']);
  } catch (e) {
    throw new Error(e);
  }
};
