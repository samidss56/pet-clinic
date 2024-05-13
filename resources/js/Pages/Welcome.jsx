import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    const user = auth?.user?.name;
    return (
        <Authenticated user={user}>
            <Head title="Welcome" />
            {/* <div className={`${darkMode && "dark"}`}> */}
            <div className="py-12 px-4 bg-gray-100 dark:bg-light-gray ">
                <div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
                    {/* <Hero />
                    <SearchBar />
                    <CarsList cars={cars} />
                    <WhyUs />
                    <CTA /> */}
                </div>
            </div>
            {/* <Footer /> */}
            {/* </div> */}
        </Authenticated>
    );
}
