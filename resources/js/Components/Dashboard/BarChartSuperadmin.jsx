import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = ({ appointmentsAdmin }) => {
    const [seriesData, setSeriesData] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const admin = appointmentsAdmin.map(appointment => appointment.name);
        const data1 = appointmentsAdmin.map(appointment => appointment.total_transaction);
        const data2 = appointmentsAdmin.map(appointment => appointment.total);

        setSeriesData([
            { name: "Transaction", data: data1 },
            { name: "Subtotal", data: data2 }
        ]);

        setCategories(admin);
    }, [appointmentsAdmin]);

    const options = {
        colors: ["#3C50E0", "#80CAEE"],
        chart: {
            fontFamily: "Satoshi, sans-serif",
            type: "bar",
            height: 335,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        responsive: [
            {
                breakpoint: 1536,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            columnWidth: "25%",
                        },
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                columnWidth: "25%",
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "last",
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: categories,
        },
        legend: {
            position: "top",
            horizontalAlign: "left",
            fontFamily: "Satoshi",
            fontWeight: 500,
            fontSize: "14px",
            markers: {
                radius: 99,
            },
        },
        fill: {
            opacity: 1,
        },
    };

    return (
        <div className="border bg-white p-4 shadow-md rounded-md">
            <div className="mb-4 justify-between gap-4 sm:flex">
                <div>
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Profit this week
                    </h4>
                </div>
            </div>

            <div>
                <div id="chartTwo" className="-ml-5 -mb-9">
                    <ReactApexChart
                        options={options}
                        series={seriesData}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
};

export default BarChart;
