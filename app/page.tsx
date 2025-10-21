import dynamic from "next/dynamic";
const FendoLandingPage=dynamic(()=>import("../components/FendoLandingPage"),{ssr:false});
export default function Page(){return <FendoLandingPage/>}
