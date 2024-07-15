
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const createReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/referrals`, referralData);
    return response.data;
  } catch (error) {
    console.error('Error creating referral:', error);
    throw error;
  }
};
