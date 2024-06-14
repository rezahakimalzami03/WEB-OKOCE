import React from "react";
import Header from "@img/headermasjidpemberdaya.png";
import Kmp from "@img/kmp.png";
import Tujuan1 from "@img/tujuan1.png";
import Tujuan2 from "@img/tujuan2.png";
import Tujuan3 from "@img/tujuan3.png";
import Output1 from "@img/output1.png";
import Output2 from "@img/output2.png";
import Output3 from "@img/output3.png";
import Pelaksana1 from "@img/pelaksana1.png";
import Pelaksana2 from "@img/pelaksana2.png";
import Pelaksana3 from "@img/pelaksana3.png";
import Peserta1 from "@img/peserta1.png";
import Peserta2 from "@img/peserta2.png";
import Peserta3 from "@img/peserta3.png";
import Peserta4 from "@img/peserta4.png";
import Peserta5 from "@img/peserta5.png";
import Peserta6 from "@img/peserta6.png";
import Durasi1 from "@img/durasi1.png";
import Durasi2 from "@img/durasi2.png";
import Durasi3 from "@img/durasi3.png";
import Durasi4 from "@img/durasi4.png";
import Tahapan1 from "@img/tahapan1.png";
import Tahapan2 from "@img/tahapan2.png";
import Tahapan3 from "@img/tahapan3.png";
import Tahapan4 from "@img/tahapan4.png";
import Tahapan5 from "@img/tahapan5.png";
import Tahapan6 from "@img/tahapan6.png";
import Timeline1 from "@img/timeline1.png";
import Timeline2 from "@img/timeline2.png";
import Timeline3 from "@img/timeline3.png";
import Timeline4 from "@img/timeline4.png";
import Materi from "@img/materi1.png";
import Key1 from "@img/key1.png";
import Key2 from "@img/key2.png";
import Key3 from "@img/key3.png";
import Key4 from "@img/key4.png";
import Key5 from "@img/key5.png";
import FloatingMenu from "../components/FloatingMenu";

const Masjidpemberdaya = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[678px] max-md:px-5 max-md:max-w-full shadow-lg bg-white rounded-3xl">
          <img
            loading="lazy"
            src={Header}
            className="object-cover absolute inset-0 w-full h-full" alt=""
          />
          <div className="relative mt-16 mb-28 w-full max-w-[1174px] max-md:my-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow text-2xl font-bold leading-7 text-center text-white max-md:mt-10">
                  <img
                    loading="lazy"
                    src={Kmp}
                    className="w-full aspect-[1.92]" alt=""
                  />
                  <a href="https://masjidpemberdaya.org/" className="justify-center bg-green-700 rounded-3xl max-md:px-5 mobile:px-4 mobile:py-4 mobile:mt-4 lg:px-12 lg:py-7 lg:mt-7">Pelajari Selengkapnya</a>
                </div>
              </div>
              <div className="flex flex-col mt-12 mobile:w-full lg:ml-7 lg:w-[57%]">
                <div className="flex flex-col mt-8 text-white max-md:mt-10 max-md:max-w-full">
                  <div className="mb-3 mt-10 text-4xl font-bold leading-10 max-md:max-w-full mobile:ml-4 lg:ml-8">
                    KOLABORASI MASJID PEMBERDAYA
                  </div>
                  <div className="mt-5 text-lg leading-7 text-justify mobile:ml-4 mobile:pr-4 lg:ml-10" style={{ hyphens: 'auto', wordBreak: 'break-word' }}>
                    KMP adalah himpunan masjid- masjid yang bergabung atas dasar
                    visi yang sama dalam mewujudkan peran masjid dalam
                    mengentaskan KEMISKINAN. KMP adalah entitas berbadan hukum
                    perkumpulan yang beranggotakan para perwakilan pengurus
                    masjid pemberdaya di Indonesia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 mb-5 px-20 py-7 text-center text-black bg-white rounded-3xl max-md:px-5 mobile:w-80 lg:w-4/5"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <div className="self-center text-5xl font-bold max-md:max-w-full max-md:text-4xl">
            PROGRAM MASJID PEMBERDAYA
          </div>
          <div className="mt-4 text-xl leading-8 max-md:max-w-full">
            Merupakan Pengembangan Kewirausahaan Terpadu Menggunakan Kurikulum 7
            Top Berbasis Masjid
          </div>
        </div>

        {/* Content tujuan masjid pemberdaya */}

        <div className="flex flex-col mt-20 mb-5 w-full max-w-[1217px] max-md:max-w-full mobile:px-6">
          <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Tujuan/Outcome
          </div>
          <div className="text-lg text-neutral-700 max-md:mt-10 mobile:leading-7 mobile:mt-3 mobile:px-2 lg:leading-4 lg:mt-12">
            Yuk upgrade Wirausaha Masjid Kamu Bergabung Dengan OK OCE!
          </div>
          <div className="max-md:mt-10 max-md:max-w-full mobile:mt-2 lg:lg:mt-11">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-10 py-11 w-full text-xl leading-8 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={Tujuan1}
                    className="w-10 aspect-square" alt=""
                  />
                  <div className="mt-4 max-md:max-w-full">
                    Menjadikan masjid memiliki kemampuan membiayai operasional
                    dan menciptakan lapangan kerja dari usaha yang dimiliki oleh
                    masjid
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-10 pt-9 pb-16 w-full text-xl leading-8 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={Tujuan2}
                    className="aspect-square w-[50px]" alt=""
                  />
                  <div className="mt-4 max-md:max-w-full">
                    Membantu masjid untuk meningkatkan pendapatan
                    karyawan/ imam/ muadzin/ marbot, minimal setara UMR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col self-center px-10 py-14 mt-14 max-w-full text-xl leading-8 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm w-[581px] max-md:px-5 max-md:mt-10">
            <img loading="lazy" src={Tujuan3} className="w-10 aspect-square" alt="" />
            <div className="mt-4 max-md:max-w-full">
              Menjadikan masjid sebagai pusat pengembangan ekonomi jamaah dan
              masyarakat sekitar.
            </div>
          </div>
        </div>

        {/* Content tujuan masjid pemberdaya end */}

        {/* OUTPUT Content */}

        <div class="flex flex-col items-center p-4 bg-zinc-100">
          <h2 class="text-4xl font-bold mb-6">OUTPUT</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <img src={Output1} alt="Icon1" class="mb-4 mb-4 mobile:w-24 lg:w-36 h-auto" />
              <p class="text-center text-zinc-800">Masjid Memiliki Usaha</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <img src={Output2} alt="Icon2" class="mb-4 mb-4 mobile:w-24 lg:w-36 h-auto" />
              <p class="text-center text-zinc-800">Jamaah Memiliki Usaha</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <img src={Output3} alt="Icon3" class="mb-4 mb-4 mobile:w-24 lg:w-36 h-auto" />
              <p class="text-center text-zinc-800">
                Usaha Yang Telah Dimiliki Jamaah Naik Kelas
              </p>
            </div>
          </div>
        </div>

        {/* Output Content end */}

        {/* pelaksana */}
        <div class="flex flex-col items-center p-4 bg-zinc-100">
          <h2 class="text-4xl font-bold text-center mb-6">PELAKSANA DAN PENDUKUNG</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <img src={Pelaksana1} alt="Icon1" class="mb-4 mobile:w-24 lg:w-32 h-auto" />
              <p class="text-center text-zinc-800">Dapat Berkolaborasi Dengan Investor, Sponsor atau Lembaga Lain</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <img src={Pelaksana2} alt="Icon2" class="mb-4 mobile:w-24 lg:w-32 h-auto" />
              <p class="text-center text-zinc-800">Penggerak OK OCE Berkolaborasi Dengan Masjid Sekitar</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <img src={Pelaksana3} alt="Icon3" class="mb-4 mobile:w-24 lg:w-32 h-auto" />
              <p class="text-center text-zinc-800">
                Dukungan Dari OK OCE
              </p>
            </div>
          </div>
        </div>
        {/* pelaksana */}

        {/* PESERTA CONTENT  */}
        <div class="container mx-auto p-4">
          <h2 class="text-center text-4xl font-bold mb-8">PESERTA</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div class="card flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
              <img src={Peserta1} alt="Location Icon" class="mb-4 mobile:w-24 lg:w-28 h-auto" />
              <p class="text-center">
                Pengurus/Jamaah masjid atau masyarakat dalam radius 40 rumah dari sekitar masjid
              </p>
            </div>
            <div class="card flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
              <img src={Peserta2} alt="Group Icon" class="mb-4 mobile:w-24 lg:w-28 h-auto" />
              <p class="text-center">Satu Kelompok Maksimal 20 Orang</p>
            </div>
            <div class="card flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
              <img src={Peserta3} alt="Gender Icon" class="mb-4 mobile:w-24 lg:w-28 h-auto" />
              <p class="text-center">Laki-laki atau Perempuan</p>
            </div>
            <div class="card flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
              <img src={Peserta4} alt="Age Icon" class="mb-4 mobile:w-24 lg:w-28 h-auto" />
              <p class="text-center">Usia 18 - 50 Tahun</p>
            </div>
            <div class="card flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
              <img src={Peserta5} alt="Member Icon" class="mb-4 mobile:w-24 lg:w-28 h-auto" />
              <p class="text-center">Anggota OK OCE/didaftarkan Menjadi OK OCE</p>
            </div>
            <div class="card flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
              <img src={Peserta6} alt="Business Icon" class="mb-4 mobile:w-24 lg:w-28 h-auto" />
              <p class="text-center">Belum Memiliki Usaha Atau Usaha Mikro</p>
            </div>
          </div>
        </div>

        {/* PESERTA CONTENT END */}

        {/* DURASI CONTENT */}
        <div class="bg-zinc-100 p-6">
          <h2 class="text-center text-4xl font-bold mb-6 text-black">DURASI</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={Durasi1} alt="hourglass" class="mb-4 mobile:w-24 lg:w-30 h-auto" />
              <p class="text-center text-zinc-900">Setiap Kelas Berdurasi 6 Bulan</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={Durasi2} alt="calendar" class="mb-4 mobile:w-24 lg:w-30 h-auto" />
              <p class="text-center text-zinc-900">Pertemuan 2 Pekan Sekali</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={Durasi3} alt="clock" class="mb-4 mobile:w-24 lg:w-30 h-auto" />
              <p class="text-center text-zinc-900">12 Sesi Pertemuan</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={Durasi4} alt="meeting" class="mb-4 mobile:w-24 lg:w-30 h-auto" />
              <p class="text-center text-zinc-900">2 Jam Pertemuan</p>
            </div>
          </div>
        </div>

        {/* DURASI CONTENT END */}

        {/* TAHAPAN CONTENT */}

        <div class="bg-zinc-100 flex flex-col items-center py-8">
          <h1 class="text-4xl font-bold mb-8">TAHAPAN</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
            <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={Tahapan1} alt="Sosialisasi" class="mb-4 mobile:w-24 lg:w-30 h-auto" />
              <p class="text-center">Sosialisasi</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={Tahapan2} alt="Pendaftaran" class="mb-4 mobile:w-24 lg:w-30 h-auto" />
              <p class="text-center">Pendaftaran</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={Tahapan3} alt="Pelatihan" class="mb-4 mobile:w-24 lg:w-30 h-auto" />
              <p class="text-center">Pelatihan</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={Tahapan4} alt="Wisuda/Launching Usaha" class="mb-4 mobile:w-20 lg:w-30 h-auto" />
              <p class="text-center">Wisuda/Launching Usaha</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={Tahapan5}
                alt="Pendampingan Selama dan Setelah Pelatihan"
                class="mb-4 mobile:w-24 lg:w-20 h-auto"
              />
              <p class="text-center">Pendampingan Selama dan Setelah Pelatihan</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={Tahapan6}
                alt="Penghargaan Setahun Sekali Masjid Pemberdaya Dari OK OCE"
                class="mb-4 mobile:w-20 lg:w-16 h-auto"
              />
              <p class="text-center">Penghargaan Setahun Sekali Masjid Pemberdaya Dari OK OCE</p>
            </div>
          </div>
        </div>

        {/* TAHAPAN CONTENT END */}

        {/* TIME LINE CONTENT */}
        <div class="flex flex-col items-center p-4 bg-zinc-100">
          <h2 class="text-4xl font-bold mb-4">TIMELINE</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={Timeline1} alt="icon 1" class="mb-2 mobile:w-24 lg:w-[5.7rem] h-auto" />
              <p class="font-semibold">MINGGU KE -1</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={Timeline2} alt="icon 2" class="mb-2 mobile:w-24 lg:w-[10rem] h-auto" />
              <p class="font-semibold">MINGGU KE -2</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={Timeline3} alt="icon 3" class="mb-2 mobile:w-24 lg:w-[5.5rem] h-auto" />
              <p class="font-semibold text-center">MINGGU KE-3 SAMPAI 24</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={Timeline4} alt="icon 4" class="mb-2 mobile:w-24 lg:w-[5.6rem] h-auto" />
              <p class="font-semibold">MINGGU KE-25</p>
            </div>
          </div>
        </div>

        {/* TIME LINE CONTENT END */}

        {/* MATERI CONTENT */}
        <div class="mx-auto p-4 mobile:w-full lg:w-3/5">
          <h1 class="text-4xl mobile:text-center lg:text-start font-bold mb-2">MATERI</h1>
          <p class="text-zinc-600 mb-6">Yuk upgrade Wirausaha Masjid Kamu Bergabung Dengan OK OCE</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Membangun Pola Pikir dan Mental Wirausaha</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Kepemimpinan dan Membangun Tim Pemenang</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Menggali Ide dan Menetapkan Target Usaha</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Menyusun Business Model Canvas</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Legalitas dan Perizinan</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Keuangan Dasar (Modal, HPP dan Laba Rugi)</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Strategi Mendapatkan Modal Usaha</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Membangun Merk yang Kuat</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Pemasaran Digital</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Kerampilan Menjual</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Strategi Meningkatkan Omset</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Materi} alt="icon" class="mr-4" />
              <span>Keuangan Lanjutan (Arus Kas, Neraca dan Investasi)</span>
            </div>
          </div>
        </div>
        {/* MATERI CONTENT */}

        {/* KUNCI SUKSES */}
        <div class="mx-auto p-4 mobile:w-full lg:w-3/5">
          <h1 class="text-4xl mobile:text-center lg:text-start font-bold mb-2">Kunci Sukses/Key Succes Factor</h1>
          <p class="text-zinc-600 mb-6">Yuk upgrade Wirausaha Masjid Kamu Bergabung Dengan OK OCE</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Key1} alt="icon" class="mr-4" />
              <span>Keuangan Lanjutan (Arus Kas, Neraca dan Investasi)</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Key2} alt="icon" class="mr-4" />
              <span>Sumber daya yang memadai</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Key3} alt="icon" class="mr-4" />
              <span>Materi yang mudah dipahami</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Key4} alt="icon" class="mr-4" />
              <span>Relawan Trainer dan Mentor</span>
            </div>
            <div class="border border-blue-500 rounded-lg p-4 flex items-center hover:bg-white">
              <img src={Key5} alt="icon" class="mr-4" />
              <span>Pendampingan berkelanjutan</span>
            </div>
          </div>
        </div>

      </div>
      <FloatingMenu />{" "}
    </>
  );
};

export default Masjidpemberdaya;
