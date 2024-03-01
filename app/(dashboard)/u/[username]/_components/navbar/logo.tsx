import Link from "next/link";
import Image from "next/image";
import {Poppins} from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center marker:hover:opacity-75 transition">
                <div className="color-fill-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
                    <Image
                        src="/logo.svg"
                        alt="CorpNetCast"
                        height="22"
                        width="22"
                    />
                </div>
            </div>
        </Link>
    );
};