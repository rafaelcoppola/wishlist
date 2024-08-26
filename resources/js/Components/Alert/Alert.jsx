import AppContext from "@/Context/AppContext";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";

export function Alert() {
    const { contentAlerts, setShowAlerts } = useContext(AppContext);

    function closeAlert() {
        setShowAlerts(false)
    }

    if (contentAlerts.alert_type === "success") {
        return (
            <div className='relative top-[100px] flex items-center flex-col '>
                <div id="alert-3" className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <div className="ms-3 text-sm font-medium">
                        {contentAlerts.message}
                    </div>
                    <button type="button" onClick={closeAlert} className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                        <IoMdClose />
                    </button>
                </div>
            </div>
        );
    }

    if (contentAlerts.alert_type === "error") {
        return (
            <div className='relative top-[100px] flex items-center flex-col '>
                <div class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <div class="ms-3 text-sm font-medium">
                        {contentAlerts.message}
                    </div>
                    <button type="button" onClick={closeAlert} class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                        <IoMdClose />
                    </button>
                </div>
            </div>
        );
    }



}