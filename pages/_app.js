import { useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);

    return (
        <>
            {loader && <PreLoader />}
            <div>
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
