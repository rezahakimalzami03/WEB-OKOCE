import { React, useEffect } from "react";
import Youtube from "@components/Youtube";
import FloatingMenu from "../components/FloatingMenu";

const Anniversary = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Gulir ke atas setiap kali halaman berubah
    });
    return (
        <>
            <div class="mt-[6rem] bg-gray-400 w-full h-[20rem] grid justify-center content-center">
                <h1 class="font-extrabold text-4xl text-center">Anniversary</h1>
                <p class="text-center mt-6 px-2">Gerakan sosial OK OCE Indonesia mengadvokasi pertumbuhan ekonomi yang didorong oleh kreativitas dan kolaborasi. <br /> Dengan mengutamakan inovasi, kerjasama antarindividu, dan keterlibatan penuh dalam berbagai sektor ekonomi, <br /> OK OCE membuka pintu bagi kemajuan yang berkelanjutan dan inklusif bagi seluruh masyarakat Indonesia.</p>
            </div>
            <div class="flex justify-center m-12">
                <Youtube src="https://www.youtube.com/embed/avA0_NJK5mU" />
            </div>
            <FloatingMenu />{" "}
        </>
    );
}

export default Anniversary;