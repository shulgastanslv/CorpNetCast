import { Suspense } from "react";
import Navbar from "./_components/navbar";

const UpgradeLayout = (
    { children
    }: {
        children: React.ReactNode
    }) => {

    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default UpgradeLayout;