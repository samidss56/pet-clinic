import { useEffect } from "react";
import { toast } from "react-toastify";

const useToastNotification = (notification) => {
    useEffect(() => {
        if (notification) {
            toast.success(notification);
        }
    }, [notification]);
};

export default useToastNotification;
