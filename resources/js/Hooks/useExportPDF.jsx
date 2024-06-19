import { useState, useEffect } from "react";

const useExportPDF = (routeName, params) => {
    const [exportReset, setExportReset] = useState(false);

    useEffect(() => {
        if (exportReset) {
            const url = route(routeName, params);
            window.location.href = url;
            setExportReset(false);
        }
    }, [exportReset, routeName, params]);

    const handleDownloadPDF = () => {
        setExportReset(true);
    };

    return handleDownloadPDF;
};

export default useExportPDF;
