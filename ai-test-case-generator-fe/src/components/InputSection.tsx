import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface InputSectionProps {
  userStory: string;
  setUserStory: (value: string) => void;
  generateTestCases: () => void;
  exportToCSV: () => void;
  loading: boolean;
  testCases: any[];
}

const InputSection = ({
  userStory,
  setUserStory,
  generateTestCases,
  exportToCSV,
  loading,
  testCases,
}: InputSectionProps) => {
  return (
    <div className="space-y-4">
      <Textarea
        className="w-full h-40 resize-none"
        placeholder="Enter a user story..."
        value={userStory}
        onChange={(e) => setUserStory(e.target.value)}
      />
      <div className="flex flex-wrap gap-4">
        <Button onClick={generateTestCases} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Test Cases'}
        </Button>
        {testCases.length > 0 && (
          <Button variant="secondary" onClick={exportToCSV}>
            Export to CSV
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputSection;
