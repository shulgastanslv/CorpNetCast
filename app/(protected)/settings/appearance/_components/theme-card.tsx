"use client"

import {useEffect} from 'react';
import {useTheme} from 'next-themes';
import {Button} from "@/components/ui/button";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Form, FormControl, FormDescription, FormField, FormItem, FormMessage,} from "@/components/ui/form"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

const ThemeSchema = z.object({
    theme: z
        .string({
            required_error: "error ",
        })
})

export default function ThemeForm() {

    const {theme, setTheme} = useTheme();
    const storedTheme = typeof window !== 'undefined' ? window.localStorage.getItem('my-theme') : null;

    const form = useForm<z.infer<typeof ThemeSchema>>({
        resolver: zodResolver(ThemeSchema),
    })

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


    function onSubmit(data: z.infer<typeof ThemeSchema>) {

        if (theme == data.theme) {
            return;
        }

        setTheme(data.theme);

        if (theme == 'light') {
            setTheme('dark');
            window.localStorage.setItem('my-theme', 'dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('my-theme', 'light');
        }
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="theme"
                    render={({field}) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select theme"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="light">Light</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button size="sm" variant="default" type="submit">Save</Button>
            </form>
        </Form>

        // <Card>
        //    <CardHeader>
        //         <CardTitle className="text-base">Customize</CardTitle>
        //     </CardHeader>
        //   <CardContent className="flex items-center justify-center">
        //   <Select aria-labelledby="theme">
        //       <SelectTrigger>
        //         <SelectValue placeholder="Theme" />
        //       </SelectTrigger>
        //       <SelectContent>
        //         <SelectItem value="light" on={setLightTheme}>Light</SelectItem>
        //         <SelectItem value="dark" onClick={setDarkTheme}>Dark</SelectItem>
        //       </SelectContent>
        //     </Select>
        //   </CardContent>
        // </Card>
    );
}
