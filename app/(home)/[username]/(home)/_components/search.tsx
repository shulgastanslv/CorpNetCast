"use client";

import qs from "query-string";
import {useState} from "react";
import {SearchIcon, X} from "lucide-react";
import {usePathname, useRouter} from "next/navigation";

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export const Search = () => {

    const router = useRouter();
    const [value, setValue] = useState("");
    const pathname = usePathname()!; 

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!value) return;

        let searchUrl = pathname + "/search/";

        const url = qs.stringifyUrl({
            url: searchUrl,
            query: {term: value},
        }, {skipEmptyString: true});

        router.push(url);
    };

    const onClear = () => {
        setValue("");
    };

    return (
        <form
            onSubmit={onSubmit}
            className="relative w-full lg:w-[400px] flex items-center"
        >
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Введите название предмета"
                className="rounded-r-none
        bg-transparent p-5
        focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
            />
            {value && (
                <X
                    className="absolute top-2.5 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
                    onClick={onClear}
                />
            )}
            <Button
                type="submit"
                size="sm"
                variant="secondary"
                className="ml-2"
            >
                Искать
            </Button>
        </form>
    );
};