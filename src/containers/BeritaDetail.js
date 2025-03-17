// EventDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import iconCal from "@img/calendar.png";
import iconAuth from "@img/writer.png";
import FloatingMenu from '../components/FloatingMenu';
import ModalLoading from '../components/modalLoading';

const BeritaDetail = () => {
    const { id } = useParams();
    const [newsData, setNewsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch('/data/berita.json'); // Mengambil data berita dari file lokal
                if (!response.ok) {
                    throw new Error("Gagal mengambil data berita");
                }
                const data = await response.json();

                // Cari berita berdasarkan ID yang dipilih dari useParams
                const selectedNews = data.find((item) => item.id === parseInt(id));

                if (!selectedNews) {
                    throw new Error("Berita tidak ditemukan");
                }

                setNewsData(selectedNews); // Menyimpan data berita yang ditemukan
            } catch (error) {
                console.error("Error fetching berita:", error);
                setNewsData(null);
            } finally {
                setIsLoading(false); // Set loading ke false setelah fetch selesai
            }
        };
        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    if (!newsData) {
        return <p>Event tidak ditemukan</p>;
    }

    return (
        <>
            <ModalLoading isOpen={isLoading} />
            <div className="bg-gray-200">
                <div className="max-w-4xl mx-auto mt-24 p-4">
                    <div className="bg-white shadow-md rounded-lg p-10">
                        <div className="w-[90%] mx-auto">
                            <h1 className="font-bold text-3xl">{newsData.judul_berita}</h1>
                            <div className="flex mt-5">
                                <div className="flex items-center">
                                    <img src={iconCal} alt="Calendar Icon" className="w-5 h-5" />
                                    <h3 className="ml-2">{newsData.tanggal_berita}</h3>
                                </div>
                                <div className="flex items-center ml-5">
                                    <img src={iconAuth} alt="Author Icon" className="w-5 h-5" />
                                    <h3 className="ml-2 text-black">{newsData.autor_berita}</h3>
                                </div>
                            </div>
                            <img
                                className="mt-10 object-cover w-full h-full"
                                src={newsData.foto_berita.startsWith('/')
                                    ? newsData.foto_berita
                                    : `/assets/${newsData.foto_berita}`}
                                alt={newsData.judul_berita}
                            />
                            <div className="w-full mt-14 mx-auto border-blue-400">
                                <p className="text-lg text-black text-justify pb-4">{newsData.deskripsi_berita}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FloatingMenu />{" "}
        </>
    );
};

export default BeritaDetail;
