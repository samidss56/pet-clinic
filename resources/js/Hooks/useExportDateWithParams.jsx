import { useState, useEffect } from "react";

const useExportWithParams = (routeName, startDate, endDate) => {
    const [exportReset, setExportReset] = useState(false);

    useEffect(() => {
        if (exportReset) {
            const params = new URLSearchParams({
                start_date: startDate,
                end_date: endDate,
            });
            const url = route(routeName) + "?" + params.toString();
            window.location.href = url;
            setExportReset(false);
        }
    }, [exportReset, routeName, startDate, endDate]);

    const handleExport = () => {
        setExportReset(true);
    };

    return handleExport;
};

export default useExportWithParams;
