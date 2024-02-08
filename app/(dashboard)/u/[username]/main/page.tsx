import { Button } from "@/components/ui/button";



const MainPage = () => {


    return (

        <main className="m-10">
            <div className="container grid md:grid-cols-3 gap-8 px-4 md:px-6">
                <div className="space-y-4 md:col-span-2">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Breaking News: The Oscars 2023</h1>
                        <p className="text-gray-500 dark:text-gray-400">Posted on August 23, 2023</p>
                    </div>
                    <img
                        alt="The Oscars 2023"
                        className="aspect-video overflow-hidden rounded-lg object-cover"
                        height={400}
                        src="/placeholder.svg"
                        width={800}
                    />
                    <div className="prose max-w-none">
                        <p>
                            The 95th Academy Awards ceremony, presented by the Academy of Motion Picture Arts and Sciences, honored
                            the best films of 2022 and took place at the Dolby Theatre in Hollywood, Los Angeles.
                        </p>
                        <p>
                            The ceremony was held on March 27, 2023, and was hosted by actor and comedian Kevin Hart. The event was
                            attended by various celebrities and industry professionals, and it celebrated the art of filmmaking with
                            live performances, emotional speeches, and the presentation of the iconic golden Oscar statuettes.
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="rounded-xl border border-l-muted">
                        <img
                            className="aspect-thumb rounded-t-lg object-cover"
                            height={200}
                            src="/placeholder.svg"
                            width={400}
                        />
                        <div className="p-4">
                            <div className="mb-2">
                                <div className="text-sm font-medium leading-none">The Oscars 2023</div>
                                <div className="text-sm">The highlights, the winners, and the surprises!</div>
                            </div>
                            <Button size="sm" variant="ghost">
                                Read more
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-xl border border-l-muted">
                        <img
                            className="aspect-thumb rounded-t-lg object-cover"
                            height={200}
                            src="/placeholder.svg"
                            width={400}
                        />
                        <div className="p-4">
                            <div className="mb-2">
                                <div className="text-sm font-medium leading-none">The Oscars 2023</div>
                                <div className="text-sm">The highlights, the winners, and the surprises!</div>
                            </div>
                            <Button size="sm" variant="ghost">
                                Read more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main >

    );
}

export default MainPage;