import React, { useState, useEffect, useRef } from "react";
import BgEvent from "../asset/img/bg-event.webp";
import { Link } from "react-router-dom";
import FloatingMenu from "../components/FloatingMenu";
import ModalLoading from "../components/modalLoading";

const ITEMS_PER_PAGE = 9;

const Event = () => {
    const [datas, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const contentRef = useRef(null); // Tambahkan useRef untuk elemen utama

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Gulir ke atas setiap kali halaman berubah
    }, [currentPage]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/data/event.json'); // Mengambil data berita dari file lokal
            if (!response.ok) {
                throw new Error("Gagal mengambil data berita");
            }
            const data = await response.json();

            // Mengurutkan berita berdasarkan ID terbaru
            const sortedData = data.sort((a, b) => a.id - b.id);

            setData(sortedData); // Menyimpan data ke state
        } catch (error) {
            console.error("Error fetching berita:", error);
            setData([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePageChange = (page) => {
        setIsLoading(true);
        setTimeout(() => {
            setCurrentPage(page);
            setIsLoading(false);

        }, 500);
    };

    const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = datas.slice(startIndex, endIndex);

    return (
        <>
            <ModalLoading isOpen={isLoading} />
            <div className="block w-full mt-32">
                <img className="mobile:w-full mobile:h-[12rem] lg:w-9/12 lg:h-[23rem] mx-auto" src={BgEvent} alt="header"></img>
            </div>
            <div ref={contentRef} className="grid mb-20 mobile:grid-cols-1 mobile:grid-flow-row lg:w-11/12 lg:mx-auto lg:grid-cols-3 lg:grid-flow-row lg:gap-y-12 lg:gap-x-0 lg:mt-24">
                {currentItems.map((data, index) => (
                    <div
                        key={index}
                        className="flex flex-col mx-auto w-5/6 max-md:ml-0 drop-shadow-xl max-md:w-full mobile:p-6 lg:p-0"
                    >
                        <div className="flex flex-col grow max-md:mt-10">
                            <img className="w-full shadow-sm aspect-square"
                                src={data.foto_event}
                                alt={data.judul_event || "Gambar Berita"}
                            />
                            <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                <div className="relative group mb-2 mt-2 h-10">
                                    <div className="text-base leading-7 text-black font-bold text-xl overflow-hidden line-clamp-2">
                                        {data.judul_event}
                                    </div>
                                    <div className="absolute left-0 bottom-full mb-2 hidden w-full text-xs text-white bg-black p-2 rounded group-hover:block">
                                        {data.judul_event}
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                    <div className="flex flex-col">
                                        <div className="text-neutral-400">
                                            {data.tanggal_event}
                                        </div>
                                        <div className="mt-2.5 text-sky-700">
                                            {data.harga_event}
                                        </div>
                                    </div>
                                    <div className="self-start mt-8 text-right text-red-600">
                                        {data.point_event} Points
                                    </div>
                                </div>
                                <Link to={`/event/${data.id}`}>
                                    <div className="justify-center items-center mt-6 px-16 py-5 text-base leading-5 text-center text-white bg-green-600 rounded-lg border-t border-dashed shadow-sm border-neutral-400 hover:bg-green-500 max-md:px-5">
                                        Read More
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8 py-8 mx-auto rounded-xl mobile:w-3/4 lg:w-1/2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mx-1 py-2 border rounded bg-white text-blue-500 mobile:w-full lg:w-8/12 hover:bg-blue-500 hover:text-white"
                >
                    Sebelumnya
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="mx-1 py-2 border rounded bg-white text-blue-500 mobile:w-full lg:w-8/12 hover:bg-blue-500 hover:text-white"
                >
                    Selanjutnya
                </button>
            </div>
            <FloatingMenu />
        </>
    );
};

export default Event;
