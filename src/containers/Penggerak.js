import React, { useState, useEffect } from "react";
import Header from "../asset/img/PenggerakOkOce.png";

const Penggerak = () => {
    const [penggerak, setPenggerak] = useState([]);

    useEffect(() => {
        fetchPenggerak();
    }, []);

    const fetchPenggerak = async () => {
        try {
            const response = await fetch('https://cms-okoce-6629e06db84b.herokuapp.com/api/penggerak-okoces?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data penggerak');
            }
            const data = await response.json();
            setPenggerak(data.data);
        } catch (error) {
            console.error('Error fetching penggerak:', error);
            setPenggerak([]);
        }
    };

    return (
        <>
            <div className="w-full mt-24">
                <img className="w-full h-auto" alt="" src={Header} />
            </div>
            <div className="bg-gray-300 w-10/12 mx-auto rounded-xl grid content-center mobile:h-full mobile:mt-20 mobile:p-10 lg:mt-[3rem] lg:justify-center lg:h-[22rem]">
                <h1 className="font-extrabold text-4xl text-center">
                    Penggerak <br /> OK OCE Indonesia
                </h1>
                <p className="text-center mt-6 font-medium">
                    Penggerak OK OCE sebagai layer kedua dalam bangunan gerakan sosial penciptaan lapangan kerja <br /> berbasis wirausaha tersebar diberbagai daerah di seluruh Indonesia.
                </p>
                <p className="text-center mt-2 font-medium">
                    Anda dapat bergabung dengan penggerak-penggerak OK OCE di Lokasi terdekat tempat tinggal anda.
                </p>
                <a href="https://ecsys.okoce.net/" className="mx-auto">
                    <button
                        type="button"
                        className="w-[10rem] mt-6 mx-auto text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Penggerak &#10132;
                    </button>
                </a>
            </div>
            <div className="mt-[3rem] mb-[3rem] flex items-center justify-center">
                <div className="container w-4/5 mx-auto p-4">
                    <div className="grid mobile:grid-cols-1 mobile:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-3">
                        {penggerak.map((item) => (
                            <PenggerakCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const PenggerakCard = ({ item }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const primaryUrl = `https://websapa.biz.id${item.attributes?.foto_penggerak?.data?.[0]?.attributes?.url}`;
    const fallbackUrl = `https://cms-okoce-6629e06db84b.herokuapp.com${item.attributes?.foto_penggerak?.data?.[0]?.attributes?.url}`;

    return (
        <div className="bg-white rounded-lg border drop-shadow-xl p-4">
            <div className="relative min-h-60 max-h-60 min-w-40 mx-auto">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        Loading...
                    </div>
                )}
                <img
                    className="min-h-60 max-h-60 min-w-40 mx-auto"
                    src={primaryUrl}
                    alt={item.attributes.nama_penggerak}
                    onLoad={() => setIsLoaded(true)}
                    onError={(e) => {
                        e.target.onerror = null; // Hindari infinite loop
                        e.target.src = fallbackUrl;
                    }}
                />
            </div>
            <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">{item.attributes.nama_penggerak}</div>
                <p className="text-gray-700 text-base">{item.attributes.deskripsi_penggerak}</p>
            </div>
        </div>
    );
};

export default Penggerak;
