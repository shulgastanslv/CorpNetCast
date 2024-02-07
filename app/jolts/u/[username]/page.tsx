"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { FilesIcon, HelpCircleIcon, ImportIcon, KeyIcon, SettingsIcon, UserIcon } from "lucide-react";


const MainPage = () => {

  return (

    <div>
      <div className="w-full py-12 lg:py-16 xl:py-24">
        <div className="container grid gap-12 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:gap-16">
          <div className="space-y-4 md:col-span-2 md:space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Subscribe for a Month</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Get access to our amazing components for a month. After your subscription, you can copy and paste these
                components into your apps. Accessible. Customizable. Open Source.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <HelpCircleIcon className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Premium Support</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Access to our premium support team who can help you with any issues you encounter.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <SettingsIcon className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Regular Updates</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You'll receive regular updates with new components and features.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <UserIcon className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Access to the Community</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Join our community of developers and designers to share ideas and best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 md:space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Features</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <ImportIcon className="w-6 h-6" />
                    <div>
                      <h4 className="font-semibold">Premium Support</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Access to our premium support team who can help you with any issues you encounter.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <KeyIcon className="w-6 h-6" />
                    <div>
                      <h4 className="font-semibold">Regular Updates</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        You'll receive regular updates with new components and features.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FilesIcon className="w-6 h-6" />
                    <div>
                      <h4 className="font-semibold">Access to the Community</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Join our community of developers and designers to share ideas and best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <details>
                    <summary className="font-semibold">What's included in my subscription?</summary>
                    <p>
                      You'll get access to our library of components, which you can use in your web projects. This includes
                      buttons, forms, navigation elements, and more. You'll also get access to any new components we add
                      during your subscription period.
                    </p>
                  </details>
                  <details>
                    <summary className="font-semibold">Can I use the components in commercial projects?</summary>
                    <p>
                      Yes, you can use the components in personal, open source, and commercial projects. There are no
                      limitations on usage.
                    </p>
                  </details>
                  <details>
                    <summary className="font-semibold">What happens if I cancel my subscription?</summary>
                    <p>
                      If you cancel your subscription, you'll retain access to the components until the end of your current
                      subscription period. After that, you won't be able to access new components, and any components you've
                      customized will remain in your projects.
                    </p>
                  </details>
                </div>
              </div>
              <div className="space-y-4">
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
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" required />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;