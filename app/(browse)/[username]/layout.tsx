import {notFound} from "next/navigation";
import {getUserByUsername} from "@/lib/user-service";
import {UserBanner} from "./_components/banner";
import {NavMenu} from "./_components/navMenu";
import {Header} from "./_components/header";
import React, {ReactNode} from 'react';

interface UserLayoutProps {
    username: string;
};

interface UserLayoutContainerProps {
    children: ReactNode;
    params: UserLayoutProps;
}

export default async function UserLayout({
                                             children,
                                             params,
                                         }: UserLayoutContainerProps) {

    const user = await getUserByUsername(params.username)!;

    if (!user || !user.stream) {
        notFound();
    }

    return (
        <div>
            <UserBanner imageUrl={user?.imageUrl!}  username={user?.username!}/>
            <div className="flex flex-col h-screen z-10">
                <div className="pt-5 px-5 bg-background">
                    <Header username={user?.username!} bio={user?.bio!} imageUrl={user?.imageUrl!}/>
                    <NavMenu username={user?.username!}/>
                    <div className="pt-5">
                        {React.Children.map(children, (child) =>
                            React.cloneElement(child as React.ReactElement, {username: params.username})
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
