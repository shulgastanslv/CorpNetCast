import Head from "next/head";
import FeatureBlock from "./_components/feature-block";
import { BatteryCharging, Users, ArrowUpCircleIcon, ArrowBigLeftIcon } from "lucide-react";
import Link from "next/link";



const JoltsPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center m-10">
            <Head>
                <title>Jolts - Upgrade Your Experience</title>
            </Head>
            <div className="text-center p-8 bg-white rounded-md shadow-lg">
                <h1 className="text-4xl font-extrabold text-black mb-6">Upgrade Your Experience with Jolts</h1>
                <h3 className="text-lg text-gray-700 mb-6">€11.99/month</h3>
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
                <div className="flex justify-center space-x-4 mt-5">
                    <button className="bg-black text-white px-8 py-3 rounded-full focus:outline-none hover:bg-gray-800 transition duration-300">Get Jolts</button>
                    <button className="text-black border border-black px-8 py-3 rounded-full focus:outline-none hover:bg-gray-100 transition duration-300">Learn More</button>
                </div>
            </div>
            <button className="hover:bg-slate-50 mt-5 text-black px-8 py-3 rounded-full focus:outline-none transition duration-300">
                <Link href="/">
                    <ArrowBigLeftIcon></ArrowBigLeftIcon>
                </Link>
            </button>
        </div>
    );
}

export default JoltsPage;