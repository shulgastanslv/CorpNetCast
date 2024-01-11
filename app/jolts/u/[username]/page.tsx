"use client"

import Head from "next/head";
import FeatureBlock from "./_components/feature-block";
import { BatteryCharging, Users, ArrowUpCircleIcon, ArrowBigLeftIcon } from "lucide-react";
import Link from "next/link";
import { JoltsModal } from "./_components/jolts-modal";



const JoltsPage = () => {
    return (
        <div className="bg-gradient-to-rbg-white min-h-screen flex flex-col items-center justify-center">
            <div className="text-center p-8 bg-white rounded-md shadow-2xl">
                <h1 className="text-3xl font-extrabold text-black mt-5 mb-5">Upgrade Your Experience with Jolts</h1>
                <div className="mt-8 flex justify-around">
                    <FeatureBlock
                        icon={BatteryCharging}
                        title="Boost Visibility"
                        description="Increase your online visibility and reach a larger audience with Jolts."
                    />
                    <FeatureBlock
                        icon={Users}
                        title="Attract More Followers"
                        description="Capture the attention of potential followers and grow your audience effortlessly."
                    />
                    <FeatureBlock
                        icon={ArrowUpCircleIcon}
                        title="Enhance Engagement"
                        description="Build stronger connections with your audience through increased engagement."
                    />
                </div>
                <h3 className="text-sm text-gray-700 mt-5">Billed Monthly • Cancel Anytime</h3>
                <div className="flex justify-center space-x-4 mt-5">
                    <JoltsModal></JoltsModal>
                    <button className="text-black border border-black px-8 py-3 rounded-full focus:outline-none hover:bg-gray-100 transition duration-300">Learn More</button>
                </div>
                <button className="hover:bg-slate-100 mt-5 text-black px-8 py-3 rounded-full focus:outline-none transition duration-300">
                    <Link href="/">
                        <ArrowBigLeftIcon></ArrowBigLeftIcon>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default JoltsPage;