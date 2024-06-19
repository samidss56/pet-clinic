import appLogo from "../../../public/AppLogo.png";

export default function Guest({ children }) {
    return (
        <div className="p-0 min-h-screen flex flex-col bg-primary-color">
            <div className="flex flex-col md:flex-row md:justify-between flex-grow">
                <div className="hidden md:block md:w-1/2">
                    <img
                        src="https://bluepet.com/wp-content/uploads/2021/10/veterinarian-near-studio-city-ca.jpg"
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="w-full p-6 md:w-1/2 flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-3 items-center w-full">
                        <div className="flex justify-center items-center gap-3">
                            <img
                                src={appLogo}
                                alt="App Logo"
                                className="w-16"
                            />
                            <p className="text-3xl font-bold text-primary-red">
                                Pawana Jiwa
                            </p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
