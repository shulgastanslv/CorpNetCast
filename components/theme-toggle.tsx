'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"
import { Switch } from "./ui/switch"
import { toast } from "sonner";
import { useTransition } from "react";


export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  const [isPending, startTransition] = useTransition();

  const onChange = () => {
    startTransition(() => {
      if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
            toast.success("Chat settings updated!");
        }
        else{
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          toast.error("Something went wrong");
        }
    });
  };


  return (
    <div>
       <Switch
            disabled={isPending}
            onChange={onChange}
            checked={darkMode}
          >
            {darkMode ? "On" : "Off"}
          </Switch>
    </div>
  )
}