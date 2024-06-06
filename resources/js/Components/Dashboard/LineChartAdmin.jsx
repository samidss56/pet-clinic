import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChartAdmin = ({ chartData }) => {
    const options = {
        legend: {
            show: false,
            position: "top",
            horizontalAlign: "left",
        },
        colors: ["#3C50E0", "#80CAEE"],
        chart: {
            fontFamily: "Satoshi, sans-serif",
            height: 335,
            type: "area",
            dropShadow: {
                enabled: true,
                color: "#623CEA14",
                top: 10,
                blur: 4,
                left: 0,
                opacity: 0.1,
            },
            toolbar: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 350,
                    },
                },
            },
        ],
        stroke: {
            width: [2, 2],
            curve: "straight",
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 4,
            colors: "#fff",
            strokeColors: ["#3056D3", "#80CAEE"],
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            hover: {
                size: undefined,
                sizeOffset: 5,
            },
        },
        xaxis: {
            type: "category",
            categories: chartData.categories,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            title: {
                style: {
                    fontSize: "0px",
                },
            },
            min: 0,
            max: Math.max(...chartData.series[0].data, ...chartData.series[1].data) + 10,
        },
    };

    const series = chartData.series;

    return (
        <div className="border bg-white p-4 shadow-md rounded-md">
            <div>
                <h5 className="text-xl mb-2 font-semibold text-black">
                 Transaction
                </h5>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                <div className="flex w-full flex-wrap gap-3 sm:gap-5">
                    <div className="flex min-w-full">
                        <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                            <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-primary">
                                Total Transaction
                            </p>
                            <p className="text-sm font-medium">
                                1.01.2024 - 30.12.2024
                            </p>
                        </div>
                    </div>
                    {/* <div className="flex min-w-47.5">
                        <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
                            <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-secondary">
                                Total Sales
                            </p>
                            <p className="text-sm font-medium">
                                1.01.2024 - 30.12.2024
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div>
                <div id="chartOne" className="-ml-5">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="area"
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
};

export default LineChartAdmin;
