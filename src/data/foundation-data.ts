const basePath = process.env.NODE_ENV === 'production' ? '/mudaprogresifbangsa' : '';

export interface PillarItem {
  id: string;
  slug: string;
  nameOnly: string;
  number: string;
  title: string;
  subtitle: string;
  basisLabel: string;
  basisValue: string;
  heroDesc: string;
  accentColor: "sky" | "amber" | "emerald" | "orange";
  themeBorder: string;
  themeText: string;
  themeBg: string;
  themeBadge: string;
  image: string;
  imageAlt: string;
  tags: string[];
  programs: {
    title: string;
    desc: string;
    highlight?: string;
  }[];
  impactMetrics: {
    label: string;
    value: string;
  }[];
}

export const FOUNDATION_INFO = {
  name: "Muda Progresif Bangsa Foundation",
  legalName: "Yayasan Muda Progresif Bangsa",
  shortName: "MPB Foundation",
  established: 2025,
  tagline: "Dari Pengetahuan, Menjadi Gagasan, Berdampak Pada Aksi.",
  address: "Jl. Borneo Raya D1/7 RT. 009 RW. 009, Kel. Bekasijaya, Kec. Bekasi Timur, Kota Bekasi, Jawa Barat",
  phone: "+62 812-8888-2025",
  email: "sekretariat@mudaprogresifbangsa.org",
  legal: {
    deedNumber: "Akta Notaris No. 14",
    deedDate: "17 Desember 2025",
    notary: "Karina Kahayanti, S.H., M.Kn.",
    notarySk: "AHU-00072.AH.02.02.Tahun 2025",
    registrationNumber: "5025122232102365",
    kemenkumhamSk: "AHU-0031979.AH.01.04.Tahun 2025",
    kemenkumhamDate: "23 Desember 2025",
    foundationRegistry: "AHU-0049054.AH.01.12.Tahun 2025",
    dirjenAhu: "Widodo",
    npwp: "1000 0000 0842 6981",
    kpp: "KPP Pratama Bekasi Utara • 24 Feb 2026",
    npwpCardImage: `${basePath}/images/kartu-npwp.jpg`
  },
  governance: {
    pembina: { name: "M. Arifin Kadafi", role: "Pendiri & Ketua Dewan Pembina" },
    pengawas: { name: "Imam Syafi'i", role: "Ketua Dewan Pengawas" },
    eksekutif: [
      { name: "Ahmad Fahrurozi", role: "Ketua Pengurus", code: "KP" },
      { name: "Muhammad Zulfikar", role: "Wakil Ketua Pengurus", code: "WK" },
      { name: "Ridha Ramadhanty", role: "Sekretaris", code: "SEK" },
      { name: "Mahdia Qurrota Aini Arifin", role: "Wakil Sekretaris", code: "WSEK" },
      { name: "Kokom Nur Komariah", role: "Bendahara", code: "BEN" }
    ]
  }
};

export const PILLARS_DATA: PillarItem[] = [
  {
    id: "akademi-progresif",
    slug: "akademi-progresif",
    nameOnly: "Akademi Progresif",
    number: "01",
    title: "Akademi Progresif",
    subtitle: "Pusat Riset, Pemikiran Kritis & Sekolah Rakyat",
    basisLabel: "Basis:",
    basisValue: "PKBM & Sekolah Pemikiran",
    heroDesc: "Menumbuhkan tradisi intelektual, dialektika pemikiran kebangsaan, dan membuka akses pendidikan kesetaraan berkualitas tinggi bagi anak bangsa.",
    accentColor: "sky",
    themeBorder: "border-sky-500",
    themeText: "text-sky-400",
    themeBg: "bg-sky-500/10",
    themeBadge: "text-sky-300 bg-sky-950/60 border border-sky-400/30",
    image: `${basePath}/images/pilar-akademi.jpg`,
    imageAlt: "Akademi Progresif - Diskusi Pemikiran dan Riset Kebijakan",
    tags: ["Pusat Riset", "PKBM Berdaya", "Sekolah Pemikiran", "Advokasi"],
    programs: [
      {
        title: "Progresif Academy & PKBM",
        desc: "Penyelenggaraan pendidikan non-formal dan kesetaraan (Paket A, B, dan C) yang kontekstual, inklusif, dan berorientasi kecakapan hidup modern.",
        highlight: "Kurikulum Terbuka"
      },
      {
        title: "Progresif Forum",
        desc: "Ruang dialektika dan mimbar terbuka membedah isu-isu strategis kebangsaan, tantangan sosio-ekonomi, dan masa depan generasi muda.",
        highlight: "Dialektika Kritis"
      },
      {
        title: "Progresif Research",
        desc: "Unit kajian empiris dan analisis kebijakan publik berbasis bukti (evidence-based) untuk melahirkan rekomendasi solutif bagi stakeholder.",
        highlight: "Evidence-Based"
      },
      {
        title: "Progresif Action Lab & Publikasi",
        desc: "Laboratorium penerjemah riset menjadi aksi advokasi nyata di lapangan, diperkuat penerbitan modul, buku, dan jurnal pemikiran.",
        highlight: "Aksi Terukur"
      }
    ],
    impactMetrics: [
      { label: "Modul & Kajian Riset", value: "12+" },
      { label: "Target Warga Belajar PKBM", value: "500+" },
      { label: "Sesi Forum Kebangsaan", value: "24/Thn" }
    ]
  },
  {
    id: "vokasi-progresif",
    slug: "vokasi-progresif",
    nameOnly: "Vokasi Progresif",
    number: "02",
    title: "Vokasi Progresif",
    subtitle: "Pemberdayaan Keahlian & Kemandirian Finansial",
    basisLabel: "Basis:",
    basisValue: "Siap Kerja & Mandiri Finansial",
    heroDesc: "Mencetak generasi muda mandiri dengan keahlian teknis terapan, sertifikasi kompetensi industri, dan inkubasi wirausaha yang berdaya saing.",
    accentColor: "amber",
    themeBorder: "border-amber-500",
    themeText: "text-amber-400",
    themeBg: "bg-amber-500/10",
    themeBadge: "text-amber-300 bg-amber-950/60 border border-amber-400/30",
    image: `${basePath}/images/pilar-vokasi.jpg`,
    imageAlt: "Vokasi Progresif - Pelatihan Keterampilan dan Sertifikasi Kerja",
    tags: ["Digital Skills", "Sertifikasi Kerja", "Inkubasi UMKM", "Kewirausahaan"],
    programs: [
      {
        title: "Sekolah & Kelas Keahlian Terapan",
        desc: "Pelatihan intensif bidang teknologi digital, desain kreatif, administrasi modern, dan keahlian teknis bernilai tambah tinggi di pasar kerja.",
        highlight: "Kurikulum Industri"
      },
      {
        title: "Upskilling & Reskilling Terpadu",
        desc: "Peningkatan kecakapan kerja dan fasilitasi sertifikasi profesi guna memperkuat daya tawar pemuda produktif di dunia industri.",
        highlight: "Siap Kerja"
      },
      {
        title: "Inkubasi Wirausaha & Akselerasi UMKM",
        desc: "Pendampingan inkubasi bisnis rintisan pemuda, mulai dari validasi model, perizinan legalitas dasar, hingga pembukaan akses pasar.",
        highlight: "Mandiri Usaha"
      }
    ],
    impactMetrics: [
      { label: "Alumni Terlatih", value: "350+" },
      { label: "Tingkat Serapan Kerja & Usaha", value: "82%" },
      { label: "Mitra Industri & Bengkel Kerja", value: "18+" }
    ]
  },
  {
    id: "progresif-care",
    slug: "progresif-care",
    nameOnly: "Progresif Care",
    number: "03",
    title: "Progresif Care",
    subtitle: "Kesehatan Preventif & Jaring Pengaman Sosial",
    basisLabel: "Basis:",
    basisValue: "Keluarga Rentan & Anak Sekolah",
    heroDesc: "Menghadirkan layanan kesehatan promotif-preventif komunitas, aksi pemenuhan gizi seimbang, dan beasiswa pendidikan bagi keluarga rentan.",
    accentColor: "emerald",
    themeBorder: "border-emerald-500",
    themeText: "text-emerald-400",
    themeBg: "bg-emerald-500/10",
    themeBadge: "text-emerald-300 bg-emerald-950/60 border border-emerald-400/30",
    image: `${basePath}/images/pilar-care.jpg`,
    imageAlt: "Progresif Care - Pemeriksaan Kesehatan dan Solidaritas Sosial",
    tags: ["Kesehatan Preventif", "Beasiswa Binaan", "Gizi Anak", "Solidaritas"],
    programs: [
      {
        title: "Literasi Kesehatan Preventif",
        desc: "Kampanye edukasi gaya hidup sehat, sanitasi air bersih keluarga, kesadaran gizi seimbang balita, dan pendampingan kesehatan mental remaja.",
        highlight: "Edukasi Promotif"
      },
      {
        title: "Layanan Pemeriksaan Komunitas",
        desc: "Pelaksanaan pos pelayanan kesehatan gratis berkala, skrining tensi, gula darah, dan konsultasi medis langsung ke permukiman padat.",
        highlight: "Layanan Gratis"
      },
      {
        title: "Aksi Solidaritas & Beasiswa Sosial",
        desc: "Penyaluran beasiswa santunan pendidikan, pengadaan perlengkapan sekolah, dan paket pangan nutrisi untuk menopang ketahanan keluarga duafa.",
        highlight: "Jaring Pengaman"
      }
    ],
    impactMetrics: [
      { label: "Penerima Manfaat Medis", value: "1,200+" },
      { label: "Beasiswa Anak Sekolah", value: "150+" },
      { label: "Titik Posko Komunitas", value: "8 Wilayah" }
    ]
  },
  {
    id: "tanggap-progresif",
    slug: "tanggap-progresif",
    nameOnly: "Tanggap Progresif",
    number: "04",
    title: "Tanggap Progresif",
    subtitle: "Relawan Kemanusiaan & Respons Cepat Bencana",
    basisLabel: "Basis:",
    basisValue: "Cepat, Tepat Sasaran & Kolaboratif",
    heroDesc: "Mobilisasi jejaring relawan muda terdepan dalam mitigasi bencana, respons darurat kemanusiaan, dan pemulihan pasca-krisis berbasis gotong royong.",
    accentColor: "orange",
    themeBorder: "border-orange-500",
    themeText: "text-orange-400",
    themeBg: "bg-orange-500/10",
    themeBadge: "text-orange-300 bg-orange-950/60 border border-orange-400/30",
    image: `${basePath}/images/pilar-tanggap.jpg`,
    imageAlt: "Tanggap Progresif - Mobilisasi Relawan Kemanusiaan",
    tags: ["Kesiapsiagaan", "Bantuan Darurat", "Trauma Healing", "Kelas Darurat"],
    programs: [
      {
        title: "Mitigasi & Korps Relawan Muda",
        desc: "Pemberdayaan korps relawan pemuda melalui pelatihan manajemen bencana berbasis komunitas, pertolongan pertama, dan pemetaan risiko lokal.",
        highlight: "Kesiapsiagaan"
      },
      {
        title: "Respons Darurat & Distribusi Logistik",
        desc: "Aksi taktis penyaluran bantuan primer, air bersih, tenda darurat, dan makanan bernutrisi secara tepat sasaran tanpa birokrasi berbelit.",
        highlight: "Respons Taktis"
      },
      {
        title: "Pemulihan & Ruang Belajar Darurat",
        desc: "Dukungan pemulihan trauma (trauma healing) bagi anak-anak dan pendirian tenda sekolah darurat pasca-bencana agar pendidikan tidak terputus.",
        highlight: "Trauma Healing"
      }
    ],
    impactMetrics: [
      { label: "Relawan Terlatih", value: "120+" },
      { label: "Waktu Respon Darurat", value: "< 24 Jam" },
      { label: "Penyaluran Bantuan Bencana", value: "100% Sasaran" }
    ]
  }
];

export const VALUES_DATA = {
  principles: [
    {
      title: "Dari Pengetahuan",
      desc: "Setiap langkah dan program berakar pada riset ilmiah, data empiris yang terverifikasi, dan pemikiran kritis yang mencerahkan.",
      icon: "BookOpen"
    },
    {
      title: "Menjadi Gagasan",
      desc: "Menerjemahkan wawasan intelektual ke dalam formulasi kebijakan solutif, konsep gerakan terarah, dan model kerja teruji.",
      icon: "Lightbulb"
    },
    {
      title: "Berdampak Pada Aksi",
      desc: "Bermuara pada tindakan konkret di tengah masyarakat demi memutus mata rantai kemiskinan dan meningkatkan martabat kemanusiaan.",
      icon: "Sparkles"
    }
  ],
  coreValues: [
    {
      name: "Integrity",
      title: "Integritas & Akuntabilitas",
      desc: "Beroperasi dengan kepatuhan hukum total (SK Menkumham & NPWP), tata kelola transparan, dan kejujuran nurani demi menjaga amanah publik.",
      color: "sky"
    },
    {
      name: "Progressive Thinking",
      title: "Pikiran Berkemajuan",
      desc: "Menolak kejumudan berpikir; senantiasa terbuka pada ide-ide visioner, teknologi terkini, dan metode baru yang mempercepat kemajuan bangsa.",
      color: "blue"
    },
    {
      name: "Evidence-Based",
      title: "Berbasis Data & Riset",
      desc: "Menyandarkan setiap kebijakan intervensi pada fakta lapangan, pemetaan kebutuhan riil, serta metodologi evaluasi dampak yang terukur.",
      color: "amber"
    },
    {
      name: "Social Impact",
      title: "Dampak Sosial Berkelanjutan",
      desc: "Bukan sekadar kegiatan seremonial sesaat, namun berorientasi pada transformasi sistemik kualitas hidup anak bangsa secara jangka panjang.",
      color: "orange"
    }
  ]
};

export const ABOUT_FOCUS_DATA = [
  {
    title: "Pendidikan Kebangsaan & Kepemudaan",
    desc: "Membangun wawasan negarawan muda yang berkarakter, cinta tanah air, dan berpikiran terbuka terhadap dinamika global.",
    icon: "GraduationCap"
  },
  {
    title: "Pengentasan Kemiskinan Berkelanjutan",
    desc: "Memutus mata rantai kemiskinan antar-generasi melalui akses pendidikan kesetaraan, pelatihan vokasi kerja, dan inkubasi usaha.",
    icon: "TrendingUp"
  },
  {
    title: "Riset Kebijakan & Sinergi Kolaboratif",
    desc: "Menyediakan data advokasi kepemudaan yang presisi dan menggalang kemitraan multi-sektor demi keberlanjutan perubahan sosial.",
    icon: "Network"
  }
];

export const VISION_MISSION_DATA = {
  vision: "Membangun ekosistem intelektual dan kepemudaan yang progresif, inklusif, dan berkeadaban untuk melahirkan generasi penggerak bangsa yang mandiri, berkarakter, serta berdampak nyata bagi kedaulatan Indonesia.",
  missions: [
    {
      number: "01",
      title: "Pendidikan Alternatif & Kesetaraan",
      desc: "Menyelenggarakan ekosistem pendidikan non-formal (PKBM) yang inklusif, bermutu tinggi, dan dapat diakses setara oleh seluruh lapisan masyarakat rentan."
    },
    {
      number: "02",
      title: "Kecakapan Vokasional & Wirausaha",
      desc: "Membekali generasi muda dengan kompetensi vokasional terapan, keterampilan digital, dan pendampingan kewirausahaan berbasis keunggulan lokal."
    },
    {
      number: "03",
      title: "Jaring Pengaman & Pelayanan Komunitas",
      desc: "Menghadirkan layanan kesehatan preventif, jaring pengaman sosial, dan beasiswa berkelanjutan untuk memperkuat daya lentur keluarga prasejahtera."
    },
    {
      number: "04",
      title: "Jejaring Relawan & Tanggap Bencana",
      desc: "Menggalang jejaring pemuda terdepan yang tanggap, berintegritas, dan terampil dalam mitigasi bencana serta aksi kemanusiaan cepat tanggap."
    }
  ]
};

export interface CollaborationTrack {
  id: string;
  category: string;
  shortLabel: string;
  title: string;
  tagline: string;
  desc: string;
  badges: string[];
  schemes: {
    name: string;
    description: string;
    targetPillar: string;
  }[];
  mutualBenefits: string[];
  accent: "amber" | "sky" | "blue" | "orange";
  partnerTypes: string;
}

export interface WorkflowStep {
  step: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  actions: string[];
  deliverable: string;
  slaTag: string;
}

export const COLLABORATION_DATA: CollaborationTrack[] = [
  {
    id: "swasta",
    category: "Sektor Swasta & CSR",
    shortLabel: "Swasta & Korporasi",
    title: "Investasi Dampak Sosial, CSR & Penyerapan Kerja",
    tagline: "Kemitraan Strategis Berkelanjutan dengan Insentif Pengurang Pajak (Super Tax Deduction)",
    desc: "Membuka ruang kolaborasi bagi perusahaan multinasional, BUMN, dan korporasi swasta untuk mengarahkan alokasi CSR pada program pendidikan vokasi siap kerja, beasiswa berdikari, dan infrastruktur pelatihan digital yang akuntabel.",
    badges: ["Program CSR", "Bursa Kerja Vokasi", "Sponsor Beasiswa", "Alat Pelatihan", "Super Tax Deduction"],
    accent: "amber",
    partnerTypes: "Perusahaan Swasta, BUMN, Family Office & Venture Filantropi",
    schemes: [
      {
        name: "Co-Funding Kelas Vokasi Industri",
        description: "Pendanaan kelas keahlian terapan (coding, desain, teknisi) dengan kurikulum industri dan sertifikasi resmi BNSP.",
        targetPillar: "Vokasi Progresif"
      },
      {
        name: "Beasiswa Asuh Paket Kesetaraan",
        description: "Adopsi pembiayaan 100% bebas biaya bagi anak putus sekolah hingga tuntas meraih ijazah resmi negara Paket A/B/C.",
        targetPillar: "Akademi Progresif"
      },
      {
        name: "Hibah Sarana Lab Komputer & Alat Kerja",
        description: "Pengadaan perangkat laptop, workstation, atau peralatan bengkel kerja demi kemandirian wirausaha binaan.",
        targetPillar: "Vokasi & Care"
      },
      {
        name: "Penyaluran Tenaga Kerja Muda Terlatih",
        description: "Perekrutan langsung lulusan berprestasi program vokasi MPB untuk magang industri atau staf operasional perusahaan.",
        targetPillar: "Vokasi Progresif"
      }
    ],
    mutualBenefits: [
      "Hak pemanfaatan fasilitas insentif pajak Super Tax Deduction hingga 200% (PP No. 45/2019).",
      "Laporan keberlanjutan siap audit sesuai standar GRI 413 (Local Communities) & SDGs.",
      "Dokumentasi lengkap, Berita Acara Serah Terima (BAST), dan eksposur publikasi reputasi CSR.",
      "Keterlibatan karyawan melalui program employee volunteering yang terorganisir rapi."
    ]
  },
  {
    id: "kampus",
    category: "Perguruan Tinggi & Riset",
    shortLabel: "Kampus & Akademia",
    title: "Kolaborasi Kampus Merdeka, Riset & Pengabdian Masyarakat",
    tagline: "Hilirisasi Riset Empiris & Penguatan Tri Dharma Perguruan Tinggi Berdampak",
    desc: "Menggandeng universitas terkemuka, fakultas, dan lembaga riset independen untuk menghidupkan ekosistem MBKM yang bermakna: menempatkan mahasiswa sebagai agen perubahan riil di PKBM, memproduksi kajian kebijakan publik, dan menguji intervensi sosial berbasis data presisi.",
    badges: ["Magang Bersertifikat", "Riset Bersama", "KKN Tematik", "Dosen Tamu", "Indikator Kinerja Utama (IKU)"],
    accent: "blue",
    partnerTypes: "Universitas Negeri/Swasta, Politeknik, Lembaga Riset & Think Tank",
    schemes: [
      {
        name: "Magang Berdampak & Asistensi Mengajar PKBM",
        description: "Penempatan mahasiswa untuk mengajar logika, filsafat, dan bahasa bagi peserta didik non-formal dengan konversi SKS.",
        targetPillar: "Akademi Progresif"
      },
      {
        name: "Penyusunan Riset Kebijakan (Joint Policy Brief)",
        description: "Kajian bersama mengenai pengentasan kemiskinan, tren ketenagakerjaan pemuda, dan efektivitas pendidikan alternatif.",
        targetPillar: "Akademi & Riset"
      },
      {
        name: "KKN Tematik Transformasi Komunitas",
        description: "Pengiriman kontingen mahasiswa lintas disiplin untuk memetakan potensi ekonomi desa dan pos kesehatan keluarga.",
        targetPillar: "Care & Tanggap"
      },
      {
        name: "Program Dosen Pakar & Kuliah Tamu",
        description: "Keterlibatan akademisi dalam pengujian kurikulum serta pembekalan wawasan kebangsaan pemuda daerah binaan.",
        targetPillar: "Akademi Progresif"
      }
    ],
    mutualBenefits: [
      "Kontribusi langsung terhadap pencapaian Indikator Kinerja Utama Perguruan Tinggi (IKU 2 & IKU 7).",
      "Akses basis data primer lapangan dan komunitas dampingan untuk kebutuhan publikasi ilmiah.",
      "Laboratorium sosial hidup bagi mahasiswa untuk mengasah empati dan kepemimpinan negarawan.",
      "Sertifikat kemitraan Tri Dharma dan pelaporan formal kemahasiswaan."
    ]
  },
  {
    id: "pemerintah",
    category: "Pemerintah & Regulator",
    shortLabel: "Pemerintah & Dinas",
    title: "Kemitraan Instansi Pemerintah & Lembaga Negara",
    tagline: "Sinergi Kebijakan Publik untuk Pengentasan Anak Putus Sekolah dan Penguatan IPM",
    desc: "Menjalin kemitraan kolaboratif dengan Kementerian Pendidikan Dasar & Menengah, Kemenpora, Kementerian Sosial, Dinas Pendidikan Daerah, dan Bappeda guna mempercepat penurunan angka anak tidak sekolah (ATS) serta memperkuat jaring pengaman sosial pemuda rentan.",
    badges: ["Dinas Pendidikan", "Kemenpora", "Dinas Sosial", "Bappeda", "Dapodik Terintegrasi"],
    accent: "sky",
    partnerTypes: "Kementerian RI, Pemerintah Daerah (Pemda), Dinas Pendidikan, Dispora & Dinsos",
    schemes: [
      {
        name: "Penuntasan Anak Putus Sekolah (ATS Terpadu)",
        description: "Penyisiran dan rekrutmen anak usia sekolah rentan di wilayah padat untuk dimasukkan ke data Dapodik PKBM resmi.",
        targetPillar: "Akademi Progresif"
      },
      {
        name: "Sentra Inkubasi Wirausaha Pemuda Daerah",
        description: "Kolaborasi pembinaan pemuda usia produktif dengan pelatihan keterampilan praktis dan akses permodalan mikro.",
        targetPillar: "Vokasi Progresif"
      },
      {
        name: "Pilot Project Pendidikan Berbasis Logika & AI",
        description: "Pengembangan model kurikulum inovatif yang memadukan pendidikan karakter Pancasila dengan kecakapan digital masa depan.",
        targetPillar: "Akademi Progresif"
      },
      {
        name: "Unit Kesiapsiagaan Bencana Daerah",
        description: "Pemberdayaan jejaring pemuda tanggap darurat sebagai garda depan penanganan krisis sosial dan evakuasi lokal.",
        targetPillar: "Tanggap Progresif"
      }
    ],
    mutualBenefits: [
      "Membantu pencapaian target Indeks Pembangunan Manusia (IPM) dan Angka Partisipasi Kasar (APK) daerah.",
      "Model intervensi non-APBD yang meringankan beban anggaran sosial daerah melalui gotong royong nirlaba.",
      "Legalitas formal yayasan berizin operasional Kemenkumham dengan tata kelola transparan.",
      "Sinkronisasi data terverifikasi yang meminimalisir tumpang tindih program bansos pemerintah."
    ]
  },
  {
    id: "komunitas",
    category: "Komunitas & Gerakan Sipil",
    shortLabel: "Komunitas & Filantropi",
    title: "Koalisi Gerakan Sipil, Filantropi & Organisasi Kepemudaan",
    tagline: "Gotong Royong Multi-Pihak Melipatgandakan Jangkauan Kemanusiaan",
    desc: "Membangun simpul solidaritas dengan lembaga amil zakat/wakaf, organisasi kepemudaan, komunitas lingkungan, pegiat literasi, dan relawan kemanusiaan. Bersama-sama memastikan setiap inisiatif memiliki daya tahan akar rumput yang kokoh tanpa sekat birokrasi berbelit.",
    badges: ["Aksi Relawan", "Forum Pemuda", "Posko Darurat", "Pemberdayaan Desa", "ZISWAF Programatis"],
    accent: "orange",
    partnerTypes: "Lembaga ZISWAF, BEM/Organisasi Kepemudaan, Komunitas Sosial, NGO & Relawan",
    schemes: [
      {
        name: "Penyaluran ZISWAF Programatis & Tepat Sasaran",
        description: "Pengelolaan dana infak, sedekah, dan wakaf produktif untuk biaya operasional PKBM gratis dan sarana vokasi mustahik.",
        targetPillar: "Akademi & Vokasi"
      },
      {
        name: "Posko Kesehatan Keliling & Skrining Komunitas",
        description: "Kolaborasi tenaga medis muda relawan untuk pemeriksaan berkala, pembagian vitamin, dan sanitasi lingkungan.",
        targetPillar: "Progresif Care"
      },
      {
        name: "Aksi Cepat Tanggap Darurat Bencana",
        description: "Mobilisasi relawan gabungan dan logistik darurat dalam 1x24 jam ke titik wilayah terdampak bencana alam.",
        targetPillar: "Tanggap Progresif"
      },
      {
        name: "Kampanye Literasi Kritis & Forum Diskusi Pemuda",
        description: "Festival buku, workshop pemikiran kebangsaan, dan ruang temu inklusif anak muda se-Jabodetabek.",
        targetPillar: "Akademi Progresif"
      }
    ],
    mutualBenefits: [
      "Jejaring relawan lapangan yang militan, terlatih, dan siap diterjunkan dalam waktu singkat.",
      "Penyaluran titipan donasi secara amanah dengan dokumentasi foto, video, dan laporan tertulis akurat.",
      "Sinergi sumber daya yang mencegah duplikasi posko dan pemborosan logistik di wilayah krisis.",
      "Penguatan daya tawar pemuda dalam menyuarakan isu-isu sosial strategis di ruang publik."
    ]
  }
];

export const PARTNERSHIP_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    phase: "Fase Inisiasi",
    title: "Konsultasi & Penjajakan Awal",
    duration: "1–2 Hari Kerja",
    slaTag: "Respon Cepat 1x24 Jam",
    description: "Mitra memilih jalur sinergi (Swasta/CSR, Kampus, Pemerintah, Komunitas) dan menyampaikan gambaran rencana kolaborasi melalui formulir daring atau penjadwalan audiensi langsung.",
    actions: [
      "Pengisian formulir minat kemitraan atau kontak hotline WhatsApp sekretariat.",
      "Tim kemitraan MPB mengirimkan profil resmi yayasan dan proposal program terkait.",
      "Penetapan jadwal pertemuan audiensi pendahuluan (daring via Zoom atau tatap muka di sekretariat)."
    ],
    deliverable: "Dokumen Penjajakan Minat (Expression of Interest) & Agenda Audiensi Resmi"
  },
  {
    step: "02",
    phase: "Fase Perancangan",
    title: "Asesmen Kebutuhan & Penyusunan KAK",
    duration: "3–5 Hari Kerja",
    slaTag: "Co-Design Bersama",
    description: "Kedua belah pihak menyelaraskan objektif strategis dengan kebutuhan riil di lapangan. Bersama-sama merumuskan sasaran penerima manfaat, lokasi, jadwal, serta rincian pembiayaan.",
    actions: [
      "Pemaparan data calon penerima manfaat (profil siswa PKBM, peserta vokasi, atau titik posko).",
      "Penyusunan draf Kerangka Acuan Kerja (KAK / Terms of Reference) dan target indikator SMART.",
      "Penyusunan Rencana Anggaran Biaya (RAB) yang transparan, rinci, dan terverifikasi."
    ],
    deliverable: "Draf Final Kerangka Acuan Kerja (KAK) & Rencana Anggaran Biaya (RAB) Terverifikasi"
  },
  {
    step: "03",
    phase: "Fase Legalitas",
    title: "Penandatanganan MoU & PKS",
    duration: "3–7 Hari Kerja",
    slaTag: "Landasan Hukum Kuat",
    description: "Memformalkan komitmen melalui Nota Kesepahaman (MoU) sebagai payung kesepakatan strategis dan Perjanjian Kerja Sama (PKS) operasional yang mengikat hak, kewajiban, dan termin pelaksanaan.",
    actions: [
      "Review hukum oleh tim legal masing-masing instansi guna memastikan kepatuhan regulasi.",
      "Penandatanganan MoU oleh pimpinan instansi dan Ketua Yayasan MPB.",
      "Penandatanganan PKS operasional yang memuat jadwal termin penyaluran dana ke rekening resmi yayasan."
    ],
    deliverable: "Dokumen MoU Resmi & Kontrak PKS Operasional Ber-eMeterai Sah"
  },
  {
    step: "04",
    phase: "Fase Implementasi",
    title: "Eksekusi Program & Co-Delivery",
    duration: "Sesuai Jadwal Program",
    slaTag: "Kolaborasi Lapangan",
    description: "Penyaluran dana/sarana sesuai termin dan pelaksanaan program di lapangan oleh Tim MPB dengan pemantauan berkala bersama PIC mitra, termasuk opsi program employee volunteering.",
    actions: [
      "Pencairan termin bantuan langsung ke rekening giro resmi kelembagaan yayasan.",
      "Kick-off pelaksanaan kegiatan lapangan (kelas belajar, pelatihan vokasi, atau posko kesehatan).",
      "Keterlibatan langsung mitra (site visit, kuliah tamu, pengajar industri, atau relawan karyawan)."
    ],
    deliverable: "Logbook Aktivitas, Laporan Progres Mingguan, & Dokumentasi Resolusi Tinggi"
  },
  {
    step: "05",
    phase: "Fase Akuntabilitas",
    title: "Monitoring, Audit & Serah Terima (BAST)",
    duration: "10–14 Hari Pasca Program",
    slaTag: "Akuntabel & Tuntas",
    description: "Pengukuran capaian dampak riil terhadap KPI yang ditetapkan, penyerahan Laporan Pertanggungjawaban (LPJ) keuangan terperinci, penerbitan BAST resmi, dan evaluasi perpanjangan.",
    actions: [
      "Pengukuran metrik dampak (angka kelulusan, sertifikasi kerja, penerima bantuan nutrisi).",
      "Penyerahan LPJ keuangan lengkap disertai seluruh lampiran kuitansi dan bukti transfer sah.",
      "Penandatanganan Berita Acara Serah Terima (BAST) dan penyerahan Sertifikat Mitra Dampak Sosial.",
      "Penyediaan dokumen pendukung pemanfaatan insentif pajak Super Tax Deduction (bila relevan)."
    ],
    deliverable: "Laporan Pertanggungjawaban (LPJ), BAST Resmi, Social Impact Report & Sertifikat Mitra"
  }
];

export const PARTNERSHIP_VALUE_PROPS = [
  {
    title: "Insentif Pajak Super (Super Tax Deduction)",
    desc: "Mitra korporasi berhak mendapatkan pengurangan penghasilan bruto hingga 200% atas pembiayaan program vokasi terapan (PP No. 45/2019).",
    badge: "Fiskal Nasional",
    icon: "ReceiptPercent"
  },
  {
    title: "Legalitas Terdaftar & Rekening Resmi",
    desc: "Memiliki SK Kemenkumham RI resmi, NPWP yayasan terverifikasi, dan rekening giro atas nama lembaga tanpa rekening perorangan.",
    badge: "Kepatuhan Hukum",
    icon: "ShieldCheck"
  },
  {
    title: "Akuntabilitas & Audit Berkelanjutan",
    desc: "Seluruh alokasi dana dan program tercatat dalam sistem akuntansi nirlaba yang transparan, dapat diaudit secara independen kapan saja.",
    badge: "Transparansi 100%",
    icon: "FileCheck2"
  },
  {
    title: "Dukungan Laporan Standar ESG & SDGs",
    desc: "Menyediakan metrik dampak sosial terstandarisasi untuk memperkaya Sustainability Report perusahaan sesuai kerangka GRI 413.",
    badge: "Standar Global",
    icon: "BarChart3"
  }
];

