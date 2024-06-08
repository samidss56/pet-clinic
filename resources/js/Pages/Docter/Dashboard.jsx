import BarChart from "@/Components/Dashboard/BarChart";
import CardDataStats from "@/Components/Dashboard/CardDataStats";
import LineChart from "@/Components/Dashboard/LineChart";
import LineChartDocter from "@/Components/Dashboard/LineChartDocter";
import { AppointmentsIcon, UsersIcon } from "@/Components/Icons/Index";
import AdminLayout from "@/Layouts/AdminLayout";
import AppDocter from "@/Layouts/AppDocter";
import { Head } from "@inertiajs/react";

const Dashboard = ({ docter, title, selesai, cancel, proses, appoitmentsPerbulan, jadwal }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const chartData = {
        categories: months,
        series: [
            {
                name: "Appoitments Selesai ",
                data: Array(12).fill(0)
            },
            {
                name: "Appoitments Proses",
                data: Array(12).fill(0)
            }
        ]
    };

    appoitmentsPerbulan.forEach(transaction => {
        chartData.series[0].data[transaction.month - 1] = transaction.selesai;
        chartData.series[1].data[transaction.month - 1] = transaction.proses;
    });

    chartData.series.forEach(series => {
        series.data = series.data.map(value => value || 0);
    });

    return (
        <AppDocter
            user={docter}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />

            <AdminLayout>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
                    <CardDataStats
                        title="Appoitments Selesai"
                        total={selesai ?? 0}
                        rate="2.43%"
                    >
                        <AppointmentsIcon color={"stroke-primary-red"} />
                    </CardDataStats>
                    <CardDataStats
                        title="Appoitments Cancel"
                        total={cancel ?? 0}
                        rate="2.43%"
                    >
                        <AppointmentsIcon color={"stroke-primary-red"} />
                    </CardDataStats>
                    <CardDataStats
                        title="Appoitments Proses"
                        total={proses ?? 0}
                        rate="2.43%"
                    >
                        <AppointmentsIcon color={"stroke-primary-red"} />
                    </CardDataStats>
                    <CardDataStats
                        title="Jadwal Aktif"
                        total={jadwal ?? 0}
                        rate="2.43%"
                    >
                        <UsersIcon color={"stroke-primary-red"} />
                    </CardDataStats>
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-3">
                    <LineChartDocter chartData={chartData} />
                    {/* <BarChart /> */}
                </div>
            </AdminLayout>
        </AppDocter>
    );
};

export default Dashboard;
