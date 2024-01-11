import { getUserByUsername } from '@/lib/user-service';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
Chart.register(...registerables);
import { Link } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import FollowersChart from './_components/followers-chart';
import { getFollowedUsers, getFollowedUsersByDate } from '@/lib/follow-service';


interface AnalyticsPageProps {
    params: {
        username: string;
    };
};

const AnalyticsPage = async ({ params }: AnalyticsPageProps) => {

    const user = await getUserByUsername(params.username);
    const followers = (await getFollowedUsers()).length

    const datesToQuery = ['2024-01-01', '2022-02-01', '2024-06-01'];
    const followedUsersByDate = await getFollowedUsersByDate(datesToQuery);

    const subscriberChartData: ChartData<'line'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Subscriber Count',
                data: followedUsersByDate,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const chartOptions: ChartOptions<'line'> = {
        scales: {
            x: {
                type: 'category',
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            },
            y: {
                type: 'linear',
                beginAtZero: true,
            },
        },
    };

    return (

        <div className="container mx-auto p-10">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Your Analytics</h1>
                <p className="text-gray-500">Track your Ambient performance</p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Account Details</h2>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Followers</span>
                        <span className="text-2xl font-bold">{followers}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-gray-600">Account Created</span>
                        <span className="text-2xl font-bold">{user?.createdAt.toDateString()}</span>
                    </div>
                </div>

                <FollowersChart data={subscriberChartData} options={chartOptions} />
            </section>
        </div>


    );
}

export default AnalyticsPage;