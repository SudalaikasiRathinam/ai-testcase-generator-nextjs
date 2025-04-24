import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-bold">AI Test Case Generator</h1>
      <div className="flex items-center gap-2">
        <Label htmlFor="dark-mode" className="text-sm">
          Dark Mode
        </Label>
        <Switch
          id="dark-mode"
          checked={darkMode}
          onCheckedChange={setDarkMode}
        />
      </div>
    </div>
  );
};

export default Header;
