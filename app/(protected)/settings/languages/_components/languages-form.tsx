"use client"

import { useEffect, useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from 'sonner';

const LanguageSchema = z.object({
  language: z
    .string({
      required_error: "error",
    })
})

export default function LanguagesForm() {

//   const { Language, setLanguage } = useLanguage();
//   const storedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('my-Language') : null;

  const form = useForm<z.infer<typeof LanguageSchema>>({
    resolver: zodResolver(LanguageSchema),
  })

//   useEffect(() => {
//     const setLanguageClass = () => {
//       const root = window.document.documentElement;
//       const operatingSystemLanguageDark = window.matchMedia('(prefers-color-scheme: dark)');

//       if (storedLanguage === 'russian' || (storedLanguage === null && operatingSystemLanguageDark.matches)) {
//         root.classList.add('russian');
//       } else {
//         root.classList.remove('russian');
//       }
//     };

//     setLanguageClass();
//     console.log(`${storedLanguage} selected`);
//   }, [storedLanguage]);

//   const toggleLanguage = () => {
//     if (Language === 'english') {
//       setLanguage('russian');
//       window.localStorage.setItem('my-Language', 'russian');
//     } else {
//       setLanguage('english');
//       window.localStorage.setItem('my-Language', 'english');
//     }
//   };

  function onSubmit(data: z.infer<typeof LanguageSchema>) {
    console.log(data.language)
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Russian">Russian</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="sm" variant="default" type="submit">Save</Button>
      </form>
    </Form>
  );
}
