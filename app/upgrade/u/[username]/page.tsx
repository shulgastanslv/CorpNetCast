"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { ArrowLeftIcon, CheckIcon, ChevronLeftIcon, FilesIcon, HelpCircleIcon, ImportIcon, KeyIcon, SettingsIcon, UserIcon } from "lucide-react";
import { PaymentMethodsModal } from "./_components/payment-methods-modal";

const MainPage = () => {

  return (
    <>
      <main className="grid w-full flex-1 min-h-screen gap-4 mt-5">
        <section className="flex flex-col gap-2 m-5 p-10 items-center">
          <div className="flex items-center flex-col">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose your plan</h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 mt-5">
              Start your subscription today. You can cancel at any time.
            </p>
            <div className="flex items-center gap-10">
              <div className="mt-5 border flex flex-col gap-5 border-gray-200 border-gray-200 rounded-xl bg-white shadow-sm sm:order-2 sm:p-6 sm:gap-3 sm:border sm:border-gray-200 sm:rounded-xl sm:bg-gray-50 md:order-1 lg:order-1 xl:order-1 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:sm:border-gray-200 dark:sm:bg-gray-50 dark:md:border-gray-800 dark:lg:border-gray-800 dark:xl:border-gray-800">
                <h2 className="font-bold">Basic</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Some description about the plan.</p>
                <h3 className="font-bold">$0/month</h3>
                <Button>Subscribe</Button>
              </div>
              <div className="mt-5 border flex flex-col gap-5 border-gray-200 border-gray-200 rounded-xl bg-white shadow-sm sm:order-2 sm:p-6 sm:gap-3 sm:border sm:border-gray-200 sm:rounded-xl sm:bg-gray-50 md:order-1 lg:order-1 xl:order-1 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:sm:border-gray-200 dark:sm:bg-gray-50 dark:md:border-gray-800 dark:lg:border-gray-800 dark:xl:border-gray-800">
                <h2 className="font-bold">Standart</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Some description about the plan.</p>
                <h3 className="font-bold">$10/month</h3>
                <Button>Subscribe</Button>
              </div>
              <div className="mt-5 border flex flex-col gap-5 border-gray-200 border-gray-200 rounded-xl bg-white shadow-sm sm:order-2 sm:p-6 sm:gap-3 sm:border sm:border-gray-200 sm:rounded-xl sm:bg-gray-50 md:order-1 lg:order-1 xl:order-1 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:sm:border-gray-200 dark:sm:bg-gray-50 dark:md:border-gray-800 dark:lg:border-gray-800 dark:xl:border-gray-800">
                <h2 className="font-bold">Premium</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Some description about the plan.</p>
                <h3 className="font-bold">$20/month</h3>
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2 m-0 items-center bg-gray-100 dark:bg-gray-800">
          <div className="space-y-4 p-10">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contact Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Have a question about your subscription? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" required type="email" />
              </div>
              <div className="space-y-2 md:col-span-2 items-center">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" required />
              </div>
            </form>
          </div>
          <Button className="m-5" size="lg" type="submit">Submit</Button>
        </section>
      </main>
    </>
  );
}

export default MainPage;