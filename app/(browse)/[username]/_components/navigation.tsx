"use client"
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { cn } from "@/lib/utils";

const navigation = {
    tabs: [
        {
            id: 'home',
            name: 'Home',
        },
        {
            id: 'about',
            name: 'About',
        },
    ],
}

const NavMenu = () => {
    return (
        <div className="w-min items-center">
            <Tab.Group as="div" className="mt-2">
                <Tab.List className="-mb-px flex space-x-8 px-4">
                    {navigation.tabs.map((i) => (
                        <Tab
                            key={i.name}
                            className={({ selected }) =>
                                cn(
                                    selected ? 'border-white text-white' : 'border-transparent text-gray-400',
                                    'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                )
                            }
                        >
                            {i.name}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>

        </div>
    );
}

export default NavMenu;