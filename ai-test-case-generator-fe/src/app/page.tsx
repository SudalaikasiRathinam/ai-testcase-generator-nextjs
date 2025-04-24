'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import AppHeader from '@/components/Header';
import TestCaseCard from '@/components/TestCaseCard';
import InputSection from '@/components/InputSection';
import { fetchTestCases, TestCase } from '@/services/testCaseService';
import { exportToCSV } from '@/utils/csvUtils';

export default function Home() {
  const [userStory, setUserStory] = useState('');
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  const generateTestCases = async () => {
    if (!userStory.trim()) {
      alert('Please enter a user story first.');
      return;
    }

    setLoading(true);
    setTestCases([]);

    try {
      const data = await fetchTestCases(userStory);
      setTestCases(data);
    } catch (error) {
      console.error('Error generating test cases:', error);
      alert('Failed to generate test cases.');
    } finally {
      setLoading(false);
    }
  };

  const handleExportToCSV = () => {
    const headers = ['id', 'title', 'description', 'expectedResult'];
    exportToCSV(testCases, 'test-cases.csv', headers);
  };

  return (
    <div
      className={`${
        isClient && darkMode ? 'bg-gray-950 text-white' : 'bg-white text-black'
      } min-h-screen transition-colors`}
    >
      <Head>
        <title>AI Test Case Generator</title>
      </Head>
      <main className="p-4 max-w-3xl mx-auto">
        <AppHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        <InputSection
          userStory={userStory}
          setUserStory={setUserStory}
          generateTestCases={generateTestCases}
          exportToCSV={handleExportToCSV}
          loading={loading}
          testCases={testCases}
        />
        <div className="mt-8 space-y-4">
          {isClient &&
            testCases.map((test) => (
              <TestCaseCard key={test.id} test={test} />
            ))}
        </div>
      </main>
    </div>
  );
}
