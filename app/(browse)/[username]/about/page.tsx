import {AboutCard} from "./_components/about-card";
import {getUserByUsername} from "@/lib/user-service";

interface AboutPageProps {
    params: {
        username: string
    };
}

const AboutPage = async ({params}: AboutPageProps) => {

    const user = await getUserByUsername(params.username);

    return (
        <div className="flex flex-col">
            <AboutCard
                hostName={user?.username!}
                hostIdentity={user?.id!}
                bio={user?.bio!}
                createdAt={user?.createdAt!}
                followedByCount={user?._count.followedBy!}/>
        </div>);
}

export default AboutPage;