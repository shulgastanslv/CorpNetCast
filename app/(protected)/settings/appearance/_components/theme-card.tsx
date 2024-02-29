"use client"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export default function ThemeCard() {
  const { theme, setTheme } = useTheme();

  const storedTheme = typeof window !== 'undefined' ? window.localStorage.getItem('my-theme') : null;
  const [toggleText, setToggleText] = useState(theme === 'dark' ? 'Light Theme' : 'Dark Theme');

  useEffect(() => {
    const setThemeClass = () => {
      const root = window.document.documentElement;
      const operatingSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)');

      if (storedTheme === 'dark' || (storedTheme === null && operatingSystemThemeDark.matches)) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    setThemeClass();
    console.log(`${storedTheme} selected`);
  }, [storedTheme]);

  const setLightTheme = () => {
    setTheme('light');
    window.localStorage.setItem('my-theme', 'light');
  }

  const setDarkTheme = () => {
    setTheme('dark');
    window.localStorage.setItem('my-theme', 'dark');
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('my-theme', 'dark');
      setToggleText('Light Theme');
    } else {
      setTheme('light');
      window.localStorage.setItem('my-theme', 'light');
      setToggleText('Dark Theme');
    }
  };

  return (
    <Card>
       <CardHeader>
            <CardTitle className="text-base">Customize</CardTitle>
        </CardHeader>
      <CardContent className="flex items-center justify-center">
      <Select aria-labelledby="theme">
          <SelectTrigger>
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light" onClick={setLightTheme}>Light</SelectItem>
            <SelectItem value="dark" onClick={setDarkTheme}>Dark</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
