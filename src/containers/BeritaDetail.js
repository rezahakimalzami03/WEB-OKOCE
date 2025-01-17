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
                const response = await fetch(`https://cms-okoce-6629e06db84b.herokuapp.com/api/beritas/${id}?populate=*`);
                if (!response.ok) {
                    throw new Error('Gagal mengambil data berita');
                }
                const data = await response.json();
                setNewsData(data.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setIsLoading(false); // Set loading ke false setelah fetch selesai
            }
        };

        fetchData();
        setIsLoading(false);
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
                            <h1 className="font-bold text-3xl">{newsData.attributes.judul_berita}</h1>
                            <div className="flex mt-5">
                                <div className="flex justify-items-center">
                                    <div className="mt-1">
                                        <img src={iconCal} alt=""></img>
                                    </div>
                                    <div className="ml-2">
                                        <h3>{newsData.attributes.tanggal_berita}</h3>
                                    </div>
                                </div>
                                <div className="flex justify-items-center ml-5">
                                    <div className="mt-1">
                                        <img src={iconAuth} alt=""></img>
                                    </div>
                                    <div className="ml-2">
                                        <h3 className="text-black">{newsData.attributes.autor_berita}</h3>
                                    </div>
                                </div>
                            </div>
                            <img className="mt-10 object-cover w-full h-full" src={newsData.attributes?.foto_content?.data[0]?.attributes?.url}
                                alt={newsData.attributes?.judul_berita || "Gambar Berita"} />
                            <div className="w-full mt-14 mx-auto border-blue-400">
                                <p className="text-lg text-black text-justify pb-4">{newsData.attributes?.deskripsi_berita}
                                </p>
                                <p className="mt-2 text-lg text-black text-justify pb-4">{newsData.attributes?.deskripsi_berita_2}
                                </p>
                                <p className="mt-2 text-lg text-black text-justify pb-4">{newsData.attributes?.deskripsi_berita_3}
                                </p>
                                <p className="mt-2 text-lg text-black text-justify pb-4">{newsData.attributes?.deskripsi_berita_4}
                                </p>
                                <p className="mt-2 text-lg text-black text-justify pb-4">{newsData.attributes?.deskripsi_berita_5}
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <FloatingMenu />{" "}
        </>
    );
};

export default BeritaDetail;
