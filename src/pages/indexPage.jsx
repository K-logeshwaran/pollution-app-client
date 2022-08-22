import { useNavigate } from "react-router-dom";
import Title from "../components/title";
function dum () {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    }
    else if (Notification.permission === "granted") {
        navigator.serviceWorker.ready
            .then(function (registration) {
                /**
                 * Notifying the user with a sample notification
                 * Can be a greeting :)
                 */
                registration.showNotification("Sample Push Notification.")
            });
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                navigator.serviceWorker.ready
                    .then(function (registration) {
                        /**
                        * Notifying the user with a sample notification
                        * Can be a greeting :)
                        */
                        registration.showNotification("Sample Push Notification.")
                        console.log("msg pushed");
                    });
            }
        });
    }
}
function IndexPage() {
    const navigator = useNavigate();
    return ( 
        <>
            <Title/>
            <div className="indexpg">
                <h1 className="heading">Login / New User </h1>
                <button className="options"
                    onClick={()=>navigator('/login')}
                >
                    
                    Login 
                </button>
                <button 
                    className="options"
                    onClick={()=>navigator('/register')} 
                >
                    New Register 
                </button>
            </div> 
        </>
    );
}

export default IndexPage;
