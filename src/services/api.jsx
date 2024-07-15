
import axios from 'axios';

const API_BASE_URL = 'https://accredian-backend-task-yzck.onrender.com';

export const createReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/referrals`, referralData);
    return response.data;
  } catch (error) {
    console.error('Error creating referral:', error);
    throw error;
  }
};
