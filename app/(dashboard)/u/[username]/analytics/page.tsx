"use client"

import { getUserByUsername } from '@/lib/user-service';
import { ArrowLeftIcon, CalendarClockIcon, Link } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import FollowersChart from './_components/followers-chart';
import { getFollowedUsers, getFollowedUsersByDate } from '@/lib/follow-service';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveLine } from "@nivo/line"
import CurvedlineChart from './_components/curved-line-chart';
import { TransactionTable } from './_components/transaction-table';
import { columns } from './_components/columns';
import { getBlockedUsers } from '@/lib/block-service';

interface AnalyticsPageProps {
    params: {
        username: string;
    };
};


const AnalyticsPage = ({ params }: AnalyticsPageProps) => {

    return (



        // <div className="container mx-auto p-10">
        //     <header className="text-center mb-8">
        //         <h1 className="text-3xl font-bold">Your Analytics</h1>
        //         <p className="text-gray-500">Track your Ambient performance</p>
        //     </header>

        //     <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        //         <div className="bg-white p-6 rounded-lg shadow-md">
        //             <h2 className="text-xl font-bold mb-4">Account Details</h2>
        //             <div className="flex justify-between">
        //                 <span className="text-gray-600">Followers</span>
        //                 <span className="text-2xl font-bold">{followers}</span>
        //             </div>
        //             <div className="flex justify-between mt-2">
        //                 <span className="text-gray-600">Account Created</span>
        //                 <span className="text-2xl font-bold">{user?.createdAt.toDateString()}</span>
        //             </div>
        //         </div>

        //         <FollowersChart data={subscriberChartData} options={chartOptions} />
        //     </section>
        // </div>

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center gap-4">
                <Button size="icon" variant="outline">
                    <ArrowLeftIcon className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
                <h1 className="font-semibold text-lg md:text-xl">Analytics</h1>
                <div className="ml-auto flex items-center gap-2">
                    <Button className="hidden sm:flex" variant="outline">
                        Today
                    </Button>
                    <Button className="hidden md:flex" variant="outline">
                        This Month
                    </Button>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className="w-auto justify-start text-left font-normal" id="date" variant="outline">
                                <CalendarClockIcon className=" mr-5 h-4 w-4" />
                                {/* {formatDateRange()} */}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-auto p-0">
                            <Calendar initialFocus mode="range" numberOfMonths={2} />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="grid gap-6">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardDescription>Followers</CardDescription>
                        <CardTitle>10.5K</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                        <CurvedlineChart className="h-[200px] w-full aspect-[4/3]" />
                    </CardContent>
                </Card>
            </div>
            <div>
                <p></p>
                <TransactionTable columns={columns} data={[]} />
            </div>
        </main>

    );
}

export default AnalyticsPage;