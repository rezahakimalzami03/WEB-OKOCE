/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import FloatingMenu from "../components/FloatingMenu";

const Donasi = () => {
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://cms-okoce-6629e06db84b.herokuapp.com/api/donasis?populate=*"
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data donasi");
            }
            const data = await response.json();
            const donasiData = data.data;
            console.log(donasiData);
            setData(donasiData);
        } catch (error) {
            console.error("Error fetching donasi:", error);
            // Jika terjadi kesalahan, pastikan untuk mengatur data donasi menjadi array kosong
            setData([]);
        }
    };

    return (
        <>
            {/* <!-- Jumbotron --> */}
            <div className="w-full grid justify-items-center items-center">
                <div className="w-full my-36 max-w-6xl rounded-lg p-6 text-surface shadow-lg">
                    <h2 className="mb-5 text-4xl font-extrabold text-center pt-10">Qris Donasi OK OCE INDONESIA</h2>
                    <p className="text-center text-xl px-12">
                        OK OCE adalah Gerakan Sosial Penciptaan Lapangan Kerja Berbasis Wirausaha. Kami membuka <br />bagi siapapun yang memiliki kesamaan visi, nilai dan perjuangan untuk mendukung gerakan ini dengan berdonasi melalui : <br /><br />
                        <span className="font-bold text-2xl">Bank Syariah Indonesia (ex-BSM) </span> <br />
                        an. OK OCE INDONESIA No. Rekening 7148254367 <br /><br />
                        Scan QRIS melalui Aplikasi Payment dan Mobile Banking Melalui :
                    </p>
                    <div className="flex flex-col px-5">
                        {datas.map((data, index) => (
                            <div key={index} className="mt-36 w-full max-md:mt-10 max-md:max-w-full" >
                                <div className="flex gap-b-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            src={`https://websapa.biz.id${data.attributes?.foto_donasi?.data[0]?.attributes?.url}`}
                                            onError={(e) => {
                                                e.target.onerror = null; // Mencegah infinite loop
                                                e.target.src = `https://cms-okoce-6629e06db84b.herokuapp.com${data.attributes?.foto_donasi?.data[0]?.attributes?.url}`;
                                            }}
                                            alt={data.attributes?.judul_berita || "Gambar Berita"}
                                            className="grow w-full h-auto shadow-sm max-md:max-w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow px-12 py-10 w-full text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                                            <div className="text-2xl text-center font-semibold leading-[50px] max-md:max-w-full max-md:text-4xl">
                                                {data.attributes.judul_donasi}
                                            </div>
                                            <div className="mt-2 text-82 leading-8 text-justify max-md:max-w-full">
                                                {data.attributes.deskripsi_donasi}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div >
            {/* <!-- Jumbotron --> */}
            < FloatingMenu /> {" "}
        </>
    )
}

export default Donasi;