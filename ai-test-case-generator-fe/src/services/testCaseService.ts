export interface TestCase {
  id: string;
  title: string;
  description: string;
  expectedResult: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const fetchTestCases = async (userStory: string): Promise<TestCase[]> => {
  const response = await fetch(`${API_BASE_URL}/testcases`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userStory }),
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
};