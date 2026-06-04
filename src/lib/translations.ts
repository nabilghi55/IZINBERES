export type Language = 'id' | 'en' | 'zh';

export interface TranslationType {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      fast: string;
      expert: string;
      legal: string;
      support: string;
    };
  };
  services: {
    badge: string;
    title: string;
    description: string;
    viewAll: string;
    learnMore: string;
    category: string;
    available: string;
    customTitle: string;
    customDesc: string;
    customButton: string;
    stats: {
      consultation: string;
      success: string;
      time: string;
      lawyers: string;
    };
  };
  serviceList: {
    category: string;
    services: {
      title: string;
      description: string;
      href: string;
    }[];
  }[];
  serviceDetails: {
    included: string;
    requirements: string;
    timeline: string;
    needHelp: string;
    helpDesc: string;
    consultNow: string;
    requestQuote: string;
    back: string;
    data: Record<string, {
      title: string;
      description: string;
      features: string[];
      timeline: string;
      requirements: string[];
    }>;
  };
  about: {
    heroTitle: string;
    heroAccent: string;
    heroDesc: string;
    whoTitle: string;
    whoDesc1: string;
    whoDesc2: string;
    stats: {
      founded: string;
      satisfaction: string;
      issued: string;
      experts: string;
    };
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    trustTitle: string;
  };
  whyChooseUs: {
    title: string;
    titleAccent: string;
    items: {
      title: string;
      desc: string;
    }[];
    testimonial: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    about: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, TranslationType> = {
  id: {
    nav: {
      home: 'Beranda',
      services: 'Layanan',
      about: 'Tentang Kami',
      contact: 'Kontak',
      cta: 'Mulai Sekarang',
    },
    hero: {
      badge: 'Dipercaya oleh 1000+ Pengusaha',
      title: 'Urus Perizinan Bisnis',
      titleAccent: 'Jadi Lebih Mudah.',
      description: 'IzinBeres hadir untuk membantu Anda mengurus legalitas usaha di Indonesia. Mulai dari pendirian PT hingga sertifikasi produk, kami bereskan semua urusan birokrasi Anda.',
      ctaPrimary: 'Lihat Layanan',
      ctaSecondary: 'Konsultasi Gratis',
      stats: {
        fast: 'Proses Cepat',
        expert: 'Tim Ahli',
        legal: '100% Legal',
        support: 'Full Support',
      }
    },
    services: {
      badge: 'Layanan Kami',
      title: 'Solusi Legalitas Terpopuler',
      description: 'Kami menyediakan berbagai layanan legalitas dan perizinan bisnis yang disesuaikan dengan kebutuhan spesifik usaha Anda.',
      viewAll: 'Lihat Semua Layanan',
      learnMore: 'Selengkapnya',
      category: 'Kategori',
      available: 'Layanan Tersedia',
      customTitle: 'Tidak Menemukan Izin yang Dicari?',
      customDesc: 'Regulasi di Indonesia sangat dinamis. Hubungi tim ahli kami untuk konsultasi khusus mengenai kebutuhan spesifik bisnis Anda.',
      customButton: 'Tanya Ahli Kami',
      stats: {
        consultation: 'Konsultasi Gratis',
        success: 'Tingkat Keberhasilan',
        time: 'Waktu Proses',
        lawyers: 'Konsultan Ahli'
      }
    },
    serviceList: [
      {
        category: "Pendirian Badan Usaha",
        services: [
          { title: 'Pendirian PT', description: 'Legalitas lengkap PT Lokal (Akta, SK, NIB, NPWP).', href: '/services/pendirian-pt' },
          { title: 'Pendirian PT PMA', description: 'Solusi investasi asing dengan kepatuhan BKPM.', href: '/services/pt-pma' },
          { title: 'Pendirian CV', description: 'Legalitas untuk usaha persekutuan komanditer.', href: '/services/cv' },
          { title: 'Yayasan & Perkumpulan', description: 'Pendaftaran entitas non-profit dan sosial.', href: '/services/yayasan' },
        ]
      },
      {
        category: "Sertifikasi & Perizinan Khusus",
        services: [
          { title: 'Izin BPOM', description: 'Registrasi pangan olahan, kosmetik, dan obat.', href: '/services/bpom' },
          { title: 'Sertifikasi Halal', description: 'Pengurusan sertifikat resmi BPJPH/MUI.', href: '/services/halal' },
          { title: 'HAKI / Merek', description: 'Perlindungan merek dagang dan hak cipta.', href: '/services/haki' },
          { title: 'Izin Alkes', description: 'Penyaluran alat kesehatan dan PKRT.', href: '/services/alkes' },
        ]
      },
      {
        category: "Kepatuhan & Operasional",
        services: [
          { title: 'Manajemen OSS RBA', description: 'Update data NIB dan sistem OSS terbaru.', href: '/services/oss' },
          { title: 'SBU & SIUJK', description: 'Sertifikat badan usaha jasa konstruksi.', href: '/services/siujk' },
          { title: 'Izin Lingkungan', description: 'Pengurusan dokumen SPPL, UKL-UPL, Amdal.', href: '/services/lingkungan' },
          { title: 'Sertifikasi ISO', description: 'Standar manajemen mutu internasional.', href: '/services/iso' },
        ]
      }
    ],
    serviceDetails: {
      included: "Apa Saja yang Didapat?",
      requirements: "Persyaratan Dokumen",
      timeline: "Estimasi Waktu",
      needHelp: "Butuh Bantuan?",
      helpDesc: "Bingung dengan aturan terbaru? Konsultasikan kebutuhan Anda dengan tim ahli kami secara gratis.",
      consultNow: "Konsultasi Gratis",
      requestQuote: "Hubungi Sekarang",
      back: "Kembali ke Semua Layanan",
      data: {
        'pendirian-pt': {
          title: 'Pendirian PT (Perseroan Terbatas)',
          description: 'Solusi lengkap pendirian PT Lokal untuk UMKM hingga Perusahaan Besar. Proses cepat, transparan, dan sesuai regulasi terbaru.',
          features: ['Booking Nama PT', 'Akta Notaris', 'SK Kemenkumham', 'NIB', 'NPWP Badan', 'Izin Usaha'],
          timeline: '3-5 Hari Kerja',
          requirements: ['KTP & NPWP Pengurus', 'Alamat Kantor', 'Rincian Modal', 'Bidang Usaha (KBLI)']
        },
        'pt-pma': {
          title: 'Pendirian PT PMA',
          description: 'Layanan khusus untuk investor asing yang ingin mendirikan perusahaan di Indonesia dengan kepatuhan penuh BKPM.',
          features: ['Konsultasi Investasi', 'Akta Notaris PMA', 'NIB & Izin Operasional', 'NPWP PMA', 'Akses OSS RBA'],
          timeline: '10-15 Hari Kerja',
          requirements: ['Paspor WNA', 'Rencana Investasi (10M+)', 'Alamat Domisili', 'Struktur Saham']
        },
        'bpom': {
          title: 'Izin Edar BPOM',
          description: 'Pengurusan izin edar untuk produk Pangan Olahan, Kosmetik, and Obat agar layak dipasarkan di Indonesia.',
          features: ['Akun Portal BPOM', 'Audit Fasilitas (PSB)', 'Uji Lab Produk', 'E-Registration', 'Nomor Izin Edar (NIE)'],
          timeline: '30-60 Hari Kerja',
          requirements: ['Legalitas NIB', 'Data Komposisi', 'Desain Label', 'Proses Produksi']
        },
        'halal': {
          title: 'Sertifikasi Halal',
          description: 'Dapatkan sertifikat Halal resmi untuk meningkatkan kepercayaan konsumen dan memenuhi regulasi BPJPH/MUI.',
          features: ['Penyusunan SJPH', 'Pendaftaran SIHALAL', 'Koordinasi LPH', 'Audit Kehalalan', 'Sertifikat Resmi'],
          timeline: '21-45 Hari Kerja',
          requirements: ['Daftar Bahan Baku', 'Manual SJPH', 'NIB Perusahaan', 'Foto Produk']
        }
      }
    },
    about: {
      heroTitle: 'Memudahkan Legalitas',
      heroAccent: 'Bisnis di Indonesia.',
      heroDesc: 'Didirikan dengan misi untuk mempercepat pertumbuhan kewirausahaan, IzinBeres menyediakan dukungan hukum end-to-end untuk bisnis lokal maupun internasional.',
      whoTitle: 'Siapa Kami',
      whoDesc1: 'IzinBeres adalah tim konsultan hukum, pakar bisnis, and spesialis regulasi yang berdedikasi untuk membantu perusahaan menavigasi kompleksitas hukum Indonesia. Kami memahami bahwa birokrasi seringkali menjadi penghambat inovasi.',
      whoDesc2: 'Apakah Anda seorang pengusaha pertama yang mendirikan PT Lokal atau perusahaan multinasional yang meluncurkan lini produk baru, kami menyediakan keahlian dan pengetahuan lokal yang diperlukan untuk memastikan kepatuhan penuh dan masuk ke pasar dengan cepat.',
      stats: { founded: 'Berdiri Sejak', satisfaction: 'Kepuasan Klien', issued: 'Izin Terbit', experts: 'Konsultan Ahli' },
      missionTitle: 'Misi Kami',
      missionDesc: 'Memberdayakan pemilik bisnis dengan menyediakan layanan hukum yang mudah diakses, transparan, dan efisien, menghilangkan hambatan birokrasi yang menghalangi pertumbuhan ekonomi.',
      visionTitle: 'Visi Kami',
      visionDesc: 'Menjadi mitra legalitas digital-first paling tepercaya di Asia Tenggara, yang dikenal karena integritas, kecepatan, dan keunggulan dalam kepatuhan bisnis.',
      trustTitle: 'Diakui & Terdaftar Di'
    },
    whyChooseUs: {
      title: 'Kenapa Ribuan Pengusaha',
      titleAccent: 'Memilih IzinBeres?',
      items: [
        { title: 'Transparansi Penuh', desc: 'Tidak ada biaya tersembunyi. Kami memberikan rincian harga dan estimasi waktu yang jelas sejak awal.' },
        { title: 'Konsultan Ahli', desc: 'Tim kami terdiri dari pakar hukum dan praktisi perizinan yang memahami regulasi terbaru di Indonesia.' },
        { title: 'Efisiensi Tinggi', desc: 'Kami menggunakan sistem digital untuk mempercepat proses pengurusan dokumen Anda secara signifikan.' },
        { title: 'Dukungan End-to-End', desc: 'Dari konsultasi awal hingga sertifikat terbit, kami mendampingi Anda di setiap langkah.' }
      ],
      testimonial: '"Prosesnya sangat cepat dan profesional. IzinBeres membantu kami mendirikan PT PMA hanya dalam waktu kurang dari 2 minggu."',
    },
    cta: {
      title: 'Siap Meluncurkan Bisnis Anda?',
      description: 'Dapatkan konsultasi gratis selama 30 menit dengan pakar legalitas kami hari ini.',
      button: 'Hubungi Kami Sekarang',
    },
    footer: {
      about: 'Mitra terpercaya Anda untuk pengurusan izin usaha dan kepatuhan hukum di Indonesia. Kami menyederhanakan birokrasi agar Anda bisa fokus membesarkan bisnis.',
      navTitle: 'Navigasi',
      servicesTitle: 'Layanan Utama',
      contactTitle: 'Hubungi Kami',
      copyright: 'Seluruh hak cipta dilindungi.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      cta: 'Get Started',
    },
    hero: {
      badge: 'Trusted by 1000+ Entrepreneurs',
      title: 'Business Licensing',
      titleAccent: 'Made Simple & Fast.',
      description: 'IzinBeres helps you navigate the complex Indonesian regulatory landscape. From company formation to product certifications, we handle the paperwork while you grow your business.',
      ctaPrimary: 'Explore Services',
      ctaSecondary: 'Free Consultation',
      stats: {
        fast: 'Fast Process',
        expert: 'Expert Team',
        legal: '100% Legal',
        support: 'Full Support',
      }
    },
    services: {
      badge: 'Our Services',
      title: 'Popular Legal Solutions',
      description: 'We offer a wide range of legal and business services tailored to your specific needs.',
      viewAll: 'View All Services',
      learnMore: 'Learn More',
      category: 'Category',
      available: 'Services Available',
      customTitle: "Can't Find the License?",
      customDesc: 'Regulations are dynamic. Contact our expert team for specific consultation regarding your business needs.',
      customButton: 'Ask Our Expert',
      stats: {
        consultation: 'Free Consultation',
        success: 'Success Rate',
        time: 'Processing Time',
        lawyers: 'Expert Lawyers'
      }
    },
    serviceList: [
      {
        category: "Business Entity Formation",
        services: [
          { title: 'PT Formation', description: 'Complete local PT legality (Deed, SK, NIB, NPWP).', href: '/services/pendirian-pt' },
          { title: 'PT PMA Formation', description: 'Foreign investment solutions with BKPM compliance.', href: '/services/pt-pma' },
          { title: 'CV Formation', description: 'Legality for limited partnership businesses.', href: '/services/cv' },
          { title: 'Foundations & Associations', description: 'Registration of non-profit and social entities.', href: '/services/yayasan' },
        ]
      },
      {
        category: "Certification & Special Licensing",
        services: [
          { title: 'BPOM Permit', description: 'Registration for food, cosmetics, and drugs.', href: '/services/bpom' },
          { title: 'Halal Certification', description: 'Official BPJPH/MUI certificate processing.', href: '/services/halal' },
          { title: 'IPR / Trademark', description: 'Trademark and copyright protection.', href: '/services/haki' },
          { title: 'Medical Device Permit', description: 'Distribution of medical devices and PKRT.', href: '/services/alkes' },
        ]
      },
      {
        category: "Compliance & Operations",
        services: [
          { title: 'OSS RBA Management', description: 'Update NIB data and latest OSS systems.', href: '/services/oss' },
          { title: 'SBU & SIUJK', description: 'Construction service business certificates.', href: '/services/siujk' },
          { title: 'Environmental Permits', description: 'SPPL, UKL-UPL, and Amdal documents.', href: '/services/lingkungan' },
          { title: 'ISO Certification', description: 'International quality management standards.', href: '/services/iso' },
        ]
      }
    ],
    serviceDetails: {
      included: "What's Included?",
      requirements: "Document Requirements",
      timeline: "Estimated Timeline",
      needHelp: "Need Help?",
      helpDesc: "Unsure about regulations? Consult our experts for free.",
      consultNow: "Consult Now",
      requestQuote: "Request Quote",
      back: "Back to All Services",
      data: {
        'pendirian-pt': {
          title: 'PT Formation (Local LLC)',
          description: 'Complete solution for local company setup in Indonesia. Fast, transparent, and compliant with the latest regulations.',
          features: ['Name Booking', 'Notary Deed', 'Ministry Approval', 'NIB Registration', 'Tax ID (NPWP)', 'Business License'],
          timeline: '3-5 Working Days',
          requirements: ['KTP & NPWP of Directors', 'Office Address', 'Capital Details', 'Business Activities']
        },
        'pt-pma': {
          title: 'PT PMA Formation',
          description: 'Specialized services for foreign investors to establish a presence in Indonesia with full BKPM compliance.',
          features: ['Investment Consulting', 'PMA Notary Deed', 'NIB & Operational Permits', 'Tax ID (NPWP)', 'OSS RBA Access'],
          timeline: '10-15 Working Days',
          requirements: ['Foreign Passport', 'Investment Plan (10B+)', 'Domicile Address', 'Shareholding Structure']
        },
        'bpom': {
          title: 'BPOM Distribution Permit',
          description: 'Obtain distribution permits for food, cosmetics, and drugs to legally enter the Indonesian market.',
          features: ['BPOM Portal Account', 'Facility Audit (PSB)', 'Lab Testing Support', 'E-Registration', 'Permit Number (NIE)'],
          timeline: '30-60 Working Days',
          requirements: ['Business Legality (NIB)', 'Composition Data', 'Label Design', 'Production Process']
        },
        'halal': {
          title: 'Halal Certification',
          description: 'Get your official Halal certificate to build consumer trust and meet BPJPH/MUI regulations.',
          features: ['SJH System Setup', 'SIHALAL Registration', 'LPH Coordination', 'Halal Audit', 'Official Certificate'],
          timeline: '21-45 Working Days',
          requirements: ['Ingredient List', 'SJH Manual', 'Company NIB', 'Product Photos']
        }
      }
    },
    about: {
      heroTitle: 'Simplifying Business',
      heroAccent: 'Legality in Indonesia.',
      heroDesc: 'Founded with the mission to accelerate entrepreneurship, providing end-to-end legal support for local and international businesses.',
      whoTitle: 'Who We Are',
      whoDesc1: 'IzinBeres is a team of legal consultants, business experts, and regulatory specialists dedicated to helping companies navigate Indonesian law.',
      whoDesc2: 'We provide local expertise and knowledge to ensure full compliance and rapid market entry.',
      stats: { founded: 'Founded Since', satisfaction: 'Client Satisfaction', issued: 'Permits Issued', experts: 'Expert Consultants' },
      missionTitle: 'Our Mission',
      missionDesc: 'To empower business owners by providing accessible, transparent, and efficient legal services.',
      visionTitle: 'Our Vision',
      visionDesc: 'To become the most trusted digital-first legal partner in Southeast Asia.',
      trustTitle: 'Recognized & Registered At'
    },
    whyChooseUs: {
      title: 'Why Thousands of',
      titleAccent: 'Entrepreneurs Choose Us',
      items: [
        { title: 'Full Transparency', desc: 'No hidden fees. We provide clear pricing and timelines from day one.' },
        { title: 'Expert Consultants', desc: 'Our team consists of legal experts who understand the latest Indonesian laws.' },
        { title: 'High Efficiency', desc: 'We utilize digital tools to speed up the application process significantly.' },
        { title: 'End-to-End Support', desc: 'From initial consultation to the final certificate, we are with you.' }
      ],
      testimonial: '"The fastest and most professional service I have encountered in Indonesia. They handled our PT PMA setup in record time."',
    },
    cta: {
      title: 'Ready to Start Your Business?',
      description: 'Get a free 30-minute consultation with our legal experts today.',
      button: 'Contact Us Now',
    },
    footer: {
      about: 'Your trusted partner for business licensing and legal compliance in Indonesia. We simplify the complexity of permits so you can focus on growth.',
      navTitle: 'Navigation',
      servicesTitle: 'Primary Services',
      contactTitle: 'Contact Us',
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    }
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务项目',
      about: '关于我们',
      contact: '联系我们',
      cta: '立即开始',
    },
    hero: {
      badge: '超过1000位企业家的信任',
      title: '商业执照办理',
      titleAccent: '简单高效',
      description: 'IzinBeres 致力于帮助您处理印度尼西亚的商业合法化。从公司成立到产品认证，我们为您处理所有手续。',
      ctaPrimary: '查看服务',
      ctaSecondary: '免费咨询',
      stats: {
        fast: '快速办理',
        expert: '专家团队',
        legal: '100% 合法',
        support: '全面支持',
      }
    },
    services: {
      badge: '我们的服务',
      title: '热门法律解决方案',
      description: '我们提供广泛的法律和商务服务，根据您的具体需求量身定制。',
      viewAll: '查看所有服务',
      learnMore: '了解更多',
      category: '类别',
      available: '可选服务',
      customTitle: '找不到所需的许可证？',
      customDesc: '印度尼西亚的法规非常动态。联系我们的专家团队，针对您的具体业务需求进行咨询。',
      customButton: '咨询我们的专家',
      stats: {
        consultation: '免费咨询',
        success: '成功率',
        time: '处理时间',
        lawyers: '专家律师'
      }
    },
    serviceList: [
      {
        category: "企业设立",
        services: [
          { title: '本地 PT 设立', description: '完整的本地 PT 合法化（契约、SK、NIB、NPWP）。', href: '/services/pendirian-pt' },
          { title: 'PT PMA 设立', description: '符合 BKPM 标准的外资投资解决方案。', href: '/services/pt-pma' },
          { title: 'CV 设立', description: '有限合伙企业的合法化。', href: '/services/cv' },
          { title: '基金会与协会', description: '非营利和社交实体的注册。', href: '/services/yayasan' },
        ]
      },
      {
        category: "认证与特殊许可",
        services: [
          { title: 'BPOM 许可证', description: '食品、化妆品和药品的注册。', href: '/services/bpom' },
          { title: '清真认证', description: '官方 BPJPH/MUI 证书办理。', href: '/services/halal' },
          { title: '知识产权 / 商标', description: '商标和版权保护。', href: '/services/haki' },
          { title: '医疗器械许可', description: '医疗器械和 PKRT 的分销。', href: '/services/alkes' },
        ]
      },
      {
        category: "合规与运营",
        services: [
          { title: 'OSS RBA 管理', description: '更新 NIB 数据和最新的 OSS 系统。', href: '/services/oss' },
          { title: 'SBU & SIUJK', description: '建筑服务行业执照。', href: '/services/siujk' },
          { title: '环境许可', description: 'SPPL, UKL-UPL 和 Amdal 文件。', href: '/services/lingkungan' },
          { title: 'ISO 认证', description: '国际质量管理标准。', href: '/services/iso' },
        ]
      }
    ],
    serviceDetails: {
      included: "包含内容",
      requirements: "文件要求",
      timeline: "预计时间",
      needHelp: "需要帮助？",
      helpDesc: "对法规不确定？免费咨询我们的专家。",
      consultNow: "立即咨询",
      requestQuote: "联系我们",
      back: "返回所有服务",
      data: {
        'pendirian-pt': {
          title: 'PT 设立 (本地有限公司)',
          description: '印度尼西亚本地公司设立的完整解决方案。快速、透明，符合最新法规。',
          features: ['名称预订', '公证契约', '部级批准', 'NIB 注册', '税务登记 (NPWP)', '营业执照'],
          timeline: '3-5 个工作日',
          requirements: ['董事 KTP 和 NPWP', '办公室地址', '资本细节', '经营范围']
        },
        'pt-pma': {
          title: 'PT PMA 设立 (外资公司)',
          description: '为希望在印度尼西亚建立机构的外资投资者提供的专业服务，完全符合 BKPM 标准。',
          features: ['投资咨询', 'PMA 公证契约', 'NIB 和运营许可', '税务登记 (NPWP)', 'OSS RBA 访问'],
          timeline: '10-15 个工作日',
          requirements: ['外国护照', '投资计划 (100亿+)', '住所地址', '持股结构']
        },
        'bpom': {
          title: 'BPOM 分销许可证',
          description: '获得食品、化妆品和药品的销售许可，合法进入印度尼西亚市场。',
          features: ['BPOM 门户账户', '设施审计 (PSB)', '实验室测试支持', '电子注册', '许可编号 (NIE)'],
          timeline: '30-60 个工作日',
          requirements: ['企业合法化 (NIB)', '成分数据', '标签设计', '生产流程']
        },
        'halal': {
          title: '清真认证',
          description: '获得正式的清真证书，建立消费者信任并满足 BPJPH/MUI 法规要求。',
          features: ['SJH 系统建立', 'SIHALAL 注册', 'LPH 协调', '清真审计', '正式证书'],
          timeline: '21-45 个工作日',
          requirements: ['原料清单', 'SJH 手册', '公司 NIB', '产品照片']
        }
      }
    },
    about: {
      heroTitle: '简化业务',
      heroAccent: '在印尼的合法化',
      heroDesc: '我们的使命是加速创业，为本地和国际企业提供端到端的法律支持。',
      whoTitle: '关于我们',
      whoDesc1: 'IzinBeres 是一支由法律顾问、商业专家和监管专家组成的团队，致力于帮助企业应对印度尼西亚法律。',
      whoDesc2: '我们提供本地专业知识，确保完全合规并快速进入市场。',
      stats: { founded: '成立于', satisfaction: '客户满意度', issued: '已颁发许可证', experts: '专家顾问' },
      missionTitle: '我们的使命',
      missionDesc: '通过提供易于访问、透明且高效的法律服务，为企业主赋能。',
      visionTitle: '我们的愿景',
      visionDesc: '成为东南亚最受信任的数字化优先法律合作伙伴。',
      trustTitle: '认可与注册'
    },
    whyChooseUs: {
      title: '为什么成千上万的',
      titleAccent: '企业家选择 IzinBeres?',
      items: [
        { title: '完全透明', desc: '没有隐藏费用。我们从第一天起就提供明确的定价和时间表。' },
        { title: '专家顾问', desc: '我们的团队由了解印度尼西亚最新法律的法律专家组成。' },
        { title: '高效处理', desc: '我们利用数字化工具显著加快申请流程。' },
        { title: '端到端支持', desc: '从最初的咨询到最后的证书签发，我们全程陪伴。' }
      ],
      testimonial: '"这是我在印度尼西亚遇到的最快、最专业的服务。他们在创纪录的时间内处理了我们的 PT PMA 设立。"',
    },
    cta: {
      title: '准备好开始您的业务了吗？',
      description: '立即获得我们法律专家 30 分钟的免费咨询。',
      button: '立即联系我们',
    },
    footer: {
      about: '您在印度尼西亚的商业执照和法律合规合作伙伴。我们简化许可证的复杂性，让您可以专注于增长。',
      navTitle: '导航',
      servicesTitle: '主要服务',
      contactTitle: '联系我们',
      copyright: '版权所有。',
      privacy: '隐私政策',
      terms: '条款和条件',
    }
  }
};
