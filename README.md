# AI Test Case Generator

AI Test Case Generator is a web application that allows users to generate test cases from a user story using AI. It integrates with a NestJS backend to fetch AI-generated test cases and provides features like exporting test cases to CSV and toggling between light and dark modes.

## Features

- Generate test cases from user stories using AI.
- Export generated test cases to a CSV file.
- Responsive UI with light and dark mode support.

## Installation

Follow these steps to set up and run the application locally:

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun (any package manager)
- A running instance of the NestJS backend for AI-generated test cases.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/ai-testcase-generator-nextjs.git
   cd ai-testcase-generator-nextjs/ai-test-case-generator-fe
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Create a `.env.local` file in the `ai-test-case-generator-fe` directory and add the following environment variable:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   ```

   Replace `http://localhost:3000` with the URL of your NestJS backend.

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. Enter a user story in the input field.
2. Click the "Generate Test Cases" button to fetch AI-generated test cases.
3. View the generated test cases in the list below the input section.
4. Export the test cases to a CSV file by clicking the "Export to CSV" button.

## Project Structure

- `src/app`: Contains the main application layout and pages.
- `src/components`: Reusable UI components like buttons, cards, and input sections.
- `src/services`: API service for fetching test cases.
- `src/utils`: Utility functions like CSV export.

## Technologies Used

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [FileSaver.js](https://github.com/eligrey/FileSaver.js)

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial.

## License

This project is licensed under the MIT License.

