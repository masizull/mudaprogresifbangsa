const basePath = process.env.NODE_ENV === 'production' ? '/mudaprogresifbangsa' : '';

export interface PillarItem {
  id: string;
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
    themeBadge: "bg-sky-500/15 text-sky-300 border-sky-400/30",
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
    themeBadge: "bg-amber-500/15 text-amber-300 border-amber-400/30",
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
    themeBadge: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
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
    themeBadge: "bg-orange-500/15 text-orange-300 border-orange-400/30",
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

export const COLLABORATION_DATA = [
  {
    id: "pemerintah",
    category: "Pemerintah & Regulator",
    title: "Kemitraan Instansi Pemerintah & Lembaga Negara",
    desc: "Sinergi perumusan program pemberdayaan pemuda, penyelarasan PKBM dengan regulasi pendidikan nasional, dan implementasi program publik di tingkat daerah.",
    badges: ["Dinas Pendidikan", "Kemenpora", "Dinas Sosial", "Bappeda"],
    accent: "sky"
  },
  {
    id: "kampus",
    category: "Perguruan Tinggi & Riset",
    title: "Kolaborasi Kampus Merdeka & Pusat Penelitian",
    desc: "Penyelenggaraan riset kebijakan kepemudaan bersama, program magang berdampak, KKN tematik, serta publikasi jurnal kajian sosio-ekonomi.",
    badges: ["Magang Bersertifikat", "Riset Bersama", "KKN Tematik", "Dosen Tamu"],
    accent: "blue"
  },
  {
    id: "swasta",
    category: "Sektor Swasta & CSR",
    title: "Investasi Dampak Sosial, CSR & Penyerapan Kerja",
    desc: "Penyaluran dana CSR korporasi untuk beasiswa pendidikan, penyediaan mentor industri kelas vokasi, dan penyaluran tenaga kerja muda kompeten.",
    badges: ["Program CSR", "Bursa Kerja Vokasi", "Sponsor Beasiswa", "Alat Pelatihan"],
    accent: "amber"
  },
  {
    id: "komunitas",
    category: "Komunitas & Gerakan Sipil",
    title: "Koalisi Akar Rumput & Organisasi Kepemudaan",
    desc: "Gerakan bersama organisasi mahasiswa, relawan lingkungan, komunitas pengajar muda, dan pegiat kesehatan masyarakat demi jangkauan aksi lebih luas.",
    badges: ["Aksi Relawan", "Forum Pemuda", "Posko Darurat", "Pemberdayaan Desa"],
    accent: "orange"
  }
];
