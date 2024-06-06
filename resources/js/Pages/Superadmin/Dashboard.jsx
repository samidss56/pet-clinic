import BarChart from "@/Components/Dashboard/BarChart";
import BarChartSuperadmin from "@/Components/Dashboard/BarChartSuperadmin";
import CardDataStats from "@/Components/Dashboard/CardDataStats";
import LineChart from "@/Components/Dashboard/LineChart";
import LineChartSuperadmin from "@/Components/Dashboard/LineChartSuperadmin";
import { DoctorsIcon, PendapatanIcon, TransactionsIcon, UsersIcon } from "@/Components/Icons/Index";
import AdminLayout from "@/Layouts/AdminLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { formatCurr } from "@/Utils/FormatPrice";
import { Head } from "@inertiajs/react";

const Dashboard = ({ auth, title, docter, pendapatan, transaction, transactionPerbulan, owner, appointmentsAdmin  }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const chartData = {
        categories: months,
        series: [
            {
                name: "Total",
                data: Array(12).fill(0)
            },
            {
                name: "Total Transactions",
                data: Array(12).fill(0)
            }
        ]
    };

    transactionPerbulan.forEach(transaction => {
        chartData.series[0].data[transaction.month - 1] = transaction.total;
        chartData.series[1].data[transaction.month - 1] = transaction.count;
    });

    chartData.series.forEach(series => {
        series.data = series.data.map(value => value || 0);
    });

    return (
        <Authenticated
            user={auth}
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
                        title="Total Pendapatan"
                        total={formatCurr(pendapatan ?? 0) }
                        rate="2.43%"
                    >
                        <PendapatanIcon color={"stroke-primary-red"} />
                    </CardDataStats>
                    <CardDataStats
                        title="Total Transaction"
                        total={transaction ?? 0}
                        rate="2.43%"
                    >
                        <TransactionsIcon color={"stroke-primary-red"} />
                    </CardDataStats>
                    <CardDataStats
                        title="Total Docter"
                        total={docter ?? 0}
                        rate="2.43%"
                    >
                        <DoctorsIcon color={"stroke-primary-red"} />
                    </CardDataStats>
                    <CardDataStats
                        title="Total Owner"
                        total={owner ?? 0}
                        rate="2.43%"
                    >
                        <DoctorsIcon color={"stroke-primary-red"} />
                    </CardDataStats>
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-3">
                    <LineChartSuperadmin chartData={chartData}/>
                    <BarChartSuperadmin appointmentsAdmin={appointmentsAdmin}/>
                </div>
            </AdminLayout>
        </Authenticated>
    );
};

export default Dashboard;
