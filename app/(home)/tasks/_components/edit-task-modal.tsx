"use client";

import React, {
  ElementRef,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NewsScheme, RegisterSchema, TaskScheme } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";
import { createNews } from "@/actions/news";
import Markdown from "react-markdown";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

import * as commands from "@uiw/react-md-editor/commands";
import { Description } from "@radix-ui/react-dialog";
import { createTask, updateTask } from "@/actions/task";
import { Edit, EditIcon } from "lucide-react";
import { getTaskById } from "@/services/task-service";

interface EditTaskModalProps {
  title?: string;
  description?: string | null;
  endTime?: Date | null;
  taskId: string;
}

interface Task {
  id?: string;
  title?: string;
  description?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  timeSpent?: number;
}

export const EditTaskModal = ({ title, description, endTime, taskId }: EditTaskModalProps) => {
  const [task, setTask] = useState(null);
  const closeRef = useRef<ElementRef<"button">>(null);
  const router = useRouter();
  const user = useCurrentUser()!;
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const [value, setValue] = useState("");

  const form = useForm<z.infer<typeof TaskScheme>>({
    resolver: zodResolver(TaskScheme),
    defaultValues: {
      title: title,
      description: description!,
      dueDate: endTime?.toLocaleDateString()!,
    },
  });

  const onSubmit = (values: z.infer<typeof TaskScheme>) => {
    setError("");
    setSuccess("");

    const task: Task = { id: taskId };
    if (values.title) task.title = values.title!;
    if (values.description) task.description = values.description!;
    task.startTime = new Date()!;
    if (values.dueDate) task.endTime = new Date(values.dueDate)!;
    task.timeSpent =
      (task?.endTime!.getTime() - task.startTime.getTime()) / (1000 * 60 * 60); // time in hours

    startTransition(() => {
      updateTask(task).then((data: any) => {
        setError(data.error);
        setSuccess(data.success);
        router.refresh();
      });
    });
  };

  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

  // @ts-ignore
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="ml-auto">
          <Edit className="bg-transparent w-4 h-4 " />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-auto">
        <DialogHeader>
          <DialogTitle>Основная Информация</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Заголовок</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Введите заголовок"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Описание</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Введите описание"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Время выполнения до</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        type="date" 
                        min={getCurrentDate()}
                        value={
                          field.value
                            ? new Date(field.value).toISOString().split("T")[0]
                            : ""
                        }
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Изменить
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
