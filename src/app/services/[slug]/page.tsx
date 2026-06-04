'use client';

import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

// Data layanan berdasarkan izinberes.com
const serviceDetails: Record<string, any> = {
  'pendirian-pt': {
    title: 'Pendirian PT (Perseroan Terbatas)',
    description: 'Solusi lengkap pendirian PT Lokal untuk UMKM hingga Perusahaan Besar. Proses cepat, transparan, dan sesuai regulasi terbaru.',
    features: [
      'Pengecekan dan Booking Nama PT',
      'Akta Pendirian dari Notaris',
      'SK Kemenkumham (Pengesahan)',
      'NIB (Nomor Induk Berusaha)',
      'NPWP Badan & SKT Pajak',
      'Izin Usaha & Izin Lokasi (OSS RBA)',
    ],
    timeline: '3-5 Hari Kerja',
    requirements: [
      'KTP & NPWP Para Pemegang Saham & Pengurus',
      'Alamat Lengkap Kantor (Domisili Usaha)',
      'Rincian Modal Dasar & Modal Disetor',
      'Bidang Usaha (Sesuai KBLI 2020)',
    ]
  },
  'pt-pma': {
    title: 'Pendirian PT PMA (Foreign Investment)',
    description: 'Layanan khusus untuk investor asing yang ingin mendirikan perusahaan di Indonesia dengan kepatuhan penuh terhadap aturan BKPM.',
    features: [
      'Konsultasi Rencana Investasi',
      'Pengecekan Nama & Akta Notaris',
      'Persetujuan Prinsip BKPM',
      'NIB & Izin Operasional',
      'NPWP & SKT PMA',
      'Akses Sistem OSS RBA untuk PMA',
    ],
    timeline: '10-15 Hari Kerja',
    requirements: [
      'Paspor (untuk WNA) atau Dokumen Perusahaan Asing',
      'Rencana Nilai Investasi (Minimal 10M)',
      'Alamat Domisili di Indonesia',
      'Struktur Kepemilikan Saham (DNI)',
    ]
  },
  'bpom': {
    title: 'Izin Edar BPOM',
    description: 'Pengurusan izin edar untuk produk Pangan Olahan, Kosmetik, dan Obat Tradisional agar produk Anda layak dipasarkan di Indonesia.',
    features: [
      'Pendaftaran Akun Perusahaan di portal BPOM',
      'Audit Fasilitas Produksi (PSB)',
      'Analisis Laboratorium Produk',
      'E-Registration Produk (RRA)',
      'Penerbitan Nomor Izin Edar (NIE)',
    ],
    timeline: '30-60 Hari Kerja',
    requirements: [
      'Legalitas Perusahaan (NIB, Izin Industri)',
      'Data Komposisi Produk & Proses Produksi',
      'Desain Label / Kemasan Produk',
      'Sertifikat Halal (Opsional tapi disarankan)',
    ]
  },
  'halal': {
    title: 'Sertifikasi Halal (BPJPH/MUI)',
    description: 'Dapatkan sertifikat Halal resmi untuk meningkatkan kepercayaan konsumen dan memenuhi kewajiban regulasi terbaru di Indonesia.',
    features: [
      'Penyusunan Sistem Jaminan Produk Halal (SJPH)',
      'Pendaftaran Akun SIHALAL (BPJPH)',
      'Koordinasi dengan LPH (Lembaga Pemeriksa Halal)',
      'Pemeriksaan/Audit Kehalalan Produk',
      'Penerbitan Sertifikat Halal Resmi',
    ],
    timeline: '21-45 Hari Kerja',
    requirements: [
      'Daftar Bahan Baku & Matriks Produk',
      'Manual SJPH yang sudah disesuaikan',
      'Izin Usaha (NIB)',
      'Foto Produk & Dokumentasi Produksi',
    ]
  },
  'haki': {
    title: 'Pendaftaran Merek & HAKI',
    description: 'Lindungi aset intelektual dan merek dagang Anda dari klaim pihak lain melalui pendaftaran resmi di DJKI.',
    features: [
      'Penelusuran Merek (Search & Analysis)',
      'Pendaftaran Merek Baru',
      'Pengurusan Hak Cipta & Paten',
      'Monitoring Status Publikasi',
      'Penerbitan Sertifikat HAKI',
    ],
    timeline: '12-24 Bulan (Proses DJKI)',
    requirements: [
      'Logo Merek (High Res)',
      'KTP Pemilik Merek',
      'Tanda Tangan Digital',
      'Detail Kelas Barang/Jasa',
    ]
  },
  'kitas': {
    title: 'Layanan KITAS & Izin Kerja',
    description: 'Solusi imigrasi untuk Tenaga Kerja Asing (TKA) dan Investor agar dapat tinggal dan bekerja secara legal di Indonesia.',
    features: [
      'Pengurusan RPTKA (Rencana Penggunaan TKA)',
      'Notifikasi Kerja & Pembayaran DKP-TKA',
      'E-Visa (VITAS) Approval',
      'Penerbitan Kartu KITAS Digital',
      'Lapor Diri (STM & SKTT)',
    ],
    timeline: '14-21 Hari Kerja',
    requirements: [
      'Paspor TKA (Masa berlaku min. 18 bulan)',
      'Ijazah & CV TKA',
      'Dokumen Perusahaan Sponsor (NIB, Akta)',
      'Foto Latar Belakang Merah',
    ]
  }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="bg-white min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Layanan: {slug?.replace(/-/g, ' ')}</h1>
          <p className="text-xl text-gray-600 mb-8">Informasi detail untuk layanan ini sedang dalam tahap pembaruan.</p>
          <Link href="/services" className="text-primary font-bold flex items-center justify-center hover:underline">
            <ArrowRight className="mr-2 rotate-180" size={20} /> Kembali ke Semua Layanan
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 pt-20 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-sm font-bold text-accent uppercase tracking-wider flex items-center mb-6 hover:underline">
            Layanan / {slug}
          </Link>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="mr-3 text-primary" /> Apa Saja yang Didapat?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                      <span className="font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheck className="mr-3 text-primary" /> Persyaratan Dokumen
                </h2>
                <ul className="space-y-4">
                  {service.requirements.map((req: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-gray-600 text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-1">
               <div className="sticky top-32 space-y-6">
                  <div className="bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <Clock size={24} className="text-accent" />
                      <span className="font-bold text-lg">Estimasi Waktu</span>
                    </div>
                    <p className="text-3xl font-extrabold mb-8">{service.timeline}</p>
                    <Link 
                      href="/contact" 
                      className="btn-white w-full"
                    >
                      Hubungi Sekarang
                    </Link>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                      <HelpCircle className="mr-2 text-accent" size={20} /> Butuh Bantuan?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Bingung dengan aturan terbaru? Konsultasikan kebutuhan Anda dengan tim ahli kami secara gratis.
                    </p>
                    <Link 
                      href="/contact" 
                      className="text-primary font-bold hover:underline flex items-center group"
                    >
                      Konsultasi Gratis <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
