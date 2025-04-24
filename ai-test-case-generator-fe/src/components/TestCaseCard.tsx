import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TestCase {
  title: string;
  description: string;
  expectedResult: string;
}

const TestCaseCard = ({ test }: { test: TestCase }) => (
  <Card className="w-full shadow-sm border">
    <CardHeader>
      <CardTitle className="text-lg font-semibold">{test.title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2 text-sm">
      <p>
        <span className="font-medium">Description:</span> {test.description}
      </p>
      <p>
        <span className="font-medium">Expected Result:</span> {test.expectedResult}
      </p>
    </CardContent>
  </Card>
);

export default TestCaseCard;
