import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChartAdmin = ({ appointments }) => {
    const categories = appointments.map(appointment => appointment.name);
    const data = appointments.map(appointment => appointment.total_appointments);

    const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: categories,
        },
        yaxis: {
            title: {
                text: 'Appointments'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " appointments";
                }
            }
        }
    };

    const series = [
        {
            name: 'Total Appointments',
            data: data
        }
    ];

    return (
        <div className="border bg-white p-4 shadow-md rounded-md">
            <div>
                <h5 className="text-xl mb-2 font-semibold text-black">
                    Appointments per Doctor
                </h5>
            </div>
            <div id="chartThree">
                <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
        </div>
    );
};

export default BarChartAdmin;
