import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FloatingMenu from '../components/FloatingMenu';

const EventDetail = () => {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch('/data/event.json'); // Mengambil data berita dari file lokal
                if (!response.ok) {
                    throw new Error("Gagal mengambil data berita");
                }
                const data = await response.json();

                // Cari berita berdasarkan ID yang dipilih dari useParams
                const selectedNews = data.find((item) => item.id === parseInt(id));

                if (!selectedNews) {
                    throw new Error("Berita tidak ditemukan");
                }

                setEventData(selectedNews); // Menyimpan data berita yang ditemukan
            } catch (error) {
                console.error("Error fetching berita:", error);
                setEventData(null);
            } finally {
                setLoading(false); // Set loading ke false setelah fetch selesai
            }
        };
        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!eventData) {
        return <p>Event tidak ditemukan</p>;
    }

    return (
        <>
            <div className="max-w-4xl mx-auto mt-24 p-4">
                <div className="bg-white shadow-md rounded-lg lg:p-5">
                    {/* Gambar event */}
                    <img
                        className="object-cover w-full h-full"
                        src={eventData.foto_event}
                        alt={eventData.judul_event || "Gambar Berita"}
                    />

                    {/* Detail Event */}
                    <div className="grid mobile:grid-cols-1 lg:grid-cols-2">
                        <div>
                            <h2 className="font-extrabold text-3xl mb-2 mt-12 mobile:ml-4 lg:ml-10">
                                {eventData.judul_event}
                            </h2>
                        </div>
                        <div>
                            <p className="text-zinc-700 font-medium text-2xl mobile:mt-2 mobile:ml-4 lg:mt-12 lg:ml-64">
                                {eventData.harga_event}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 mb-10 mobile:ml-4 lg:ml-10">
                        <p className="text-lg">Inisiator Event<br /></p>
                        <p className="font-extrabold text-red-500 text-xl">{eventData.contact_person}</p>
                    </div>
                    <div className="w-[90%] mx-auto border-b-2 border-blue-400">
                        <p className="mt-2 text-lg text-black text-justify pb-4">
                            {eventData.deskripsi_event}
                        </p>
                        <p className="mt-2 text-lg text-black text-justify pb-4">
                            {eventData.deskripsi_event_2}
                        </p>
                        <p className="mt-2 text-lg text-black text-justify pb-4">
                            {eventData.deskripsi_event_3}
                        </p>
                        <p className="mt-2 text-lg text-black text-justify pb-4">
                            {eventData.deskripsi_event_4}
                        </p>
                        <p className="mt-2 text-lg text-black text-justify pb-4">
                            {eventData.deskripsi_event_5}
                        </p>
                        <p className="mt-2 text-lg text-black text-justify pb-4">
                            {eventData.deskripsi_event_6}
                        </p>
                    </div>
                    <div className="w-[90%] mx-auto border-b-2 border-blue-400 pt-6 grid justify-between mobile:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-gray-100 rounded-xl mobile:w-full lg:w-48">
                            <h3 className="w-full bg-blue-500 pl-3 text-start py-1 font-semibold text-lg text-white">
                                Tanggal Event
                            </h3>
                            <p className="mt-2 text-black font-bold text-xl pl-3 py-1">
                                {eventData.tanggal_event}
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl mobile:w-full lg:w-48">
                            <h3 className="w-full bg-blue-500 pl-3 text-start py-1 font-semibold text-lg text-white">
                                Waktu
                            </h3>
                            <p className="mt-2 text-black font-bold text-xl pl-3 py-1">
                                {eventData.durasi_event}
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl mobile:w-full lg:w-48">
                            <h3 className="w-full bg-blue-500 pl-3 text-start py-1 font-semibold text-lg text-white">
                                Kuota
                            </h3>
                            <p className="mt-2 text-black font-bold text-xl pl-3 py-1">
                                {eventData.kuota_event}
                            </p>
                        </div>
                        <div className="mt-10 mb-6 bg-gray-100 col-span-2 w-64 rounded-xl my-4">
                            <h3 className="w-full bg-blue-500 pl-3 text-start py-1 font-semibold text-lg text-white">
                                Lokasi
                            </h3>
                            <p className="mt-2 text-black font-bold text-xl pl-3 py-1">
                                {eventData.tempat_event}
                            </p>
                        </div>
                    </div>
                    <div className="w-[90%] mx-auto border-b-2 border-blue-400 pt-4">
                        <h3 className="font-semibold text-xl text-blue-500">Narasumber</h3>
                        <p className="mt-2 text-2xl font-bold text-black text-justify pb-4">
                            {eventData.narasumber_event}
                        </p>
                    </div>
                </div>
            </div>
            <FloatingMenu />
        </>
    );
};

export default EventDetail;
