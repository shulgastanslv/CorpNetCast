import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import ThemeCard from './_components/theme-card';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import FontCard from './_components/font-card';
import SpacingCard from './_components/spacing-card';


const AppearancePage = () => {

    return (
        <div className="flex flex-col p-5 space-y-4">
            <ThemeCard />
        </div>
    );
}

export default AppearancePage;