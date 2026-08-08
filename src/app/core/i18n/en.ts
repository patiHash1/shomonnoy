import { EBOOK_LINKS } from './resource-links';

export interface UpdateItem {
  date: string;
  tag: string;
  tagLabel: string;
  title: string;
  desc: string;
  image?: string;
}

export interface NetworkItem {
  cat: string;
  title: string;
  icon: string;
  grad: string;
  image?: string;
}

export const EN = {
  meta: {
    title: "Project Shomonnoy Balancing Screen Time & Real Life",
    description: "Project Shomonnoy is a student-led Teach For Bangladesh capstone helping Grade 6-7 students build a healthy balance between screen time and real life."
  },

  nav: {
    brand: "Shomonnoy",
    links: {
      about: "About",
      vision: "Vision & Mission",
      updates: "Club Updates",
      network: "Network",
      ebooks: "Resources",
      messages: "Messages"
    },
    cta: "Get Involved",
    hamburgerLabel: "Toggle menu"
  },

  hero: {
    eyebrow: "A Teach For Bangladesh student led capstone project",
    titleHtml: "Balancing the <span class=\"accent\">Screen Time</span> & Real Life",
    lead: "Project Shomonnoy meaning \"balance\" is a student-led initiative helping Grade 6 and 7 students trade a little scrolling for a lot more living: creativity, hobbies, friendships, and community, one small habit at a time.",
    ctaPartner: "Partner With Us",
    ctaResources: "Explore Resources"
  },

  stats: {
    students: { value: "500+", label: "Stakeholders Reached" },
    workshops: { value: "12+", label: "Inhouse Workshops" },
    screenFreeHours: { value: "40+ hrs", label: "Screen-Free Play Logged" },
    sustainabilityPartners: { value: "3", label: "Sustainability Partners" }
  },

  about: {
    eyebrow: "About the Project",
    heading: "Why Shomonnoy exists",
    intro: "Every capstone starts with a real problem. Ours was sitting in plain sight, on the desks of the very students we teach.",
    cards: {
      background: {
        title: "Background",
        text: "Project Shomonnoy was designed and built by a Teach For Bangladesh Fellow as a student-facing capstone, developed together with Grade 6–7 students, teachers, and school leadership to be practical, playful, and genuinely useful."
      },
      problem: {
        title: "The Problem",
        text: "Screen time among 11–14 year-olds has climbed sharply, often crowding out sleep, outdoor play, reading, and face-to-face friendships with real effects on attention, mood, and physical activity."
      },
      whyItMatters: {
        title: "Why It Matters",
        text: "The goal isn't to villainize screens it's to help students build a healthy, self-aware relationship with technology, so it supports their curiosity and creativity instead of replacing it."
      }
    }
  },

  vision: {
    eyebrow: "Vision & Mission",
    heading: "What we're building toward",
    visionCard: {
      label: "Vision",
      title: "A generation that chooses balance, not restriction.",
      text: "We imagine students who use technology with intention confident enough to put the phone down and pick up a paintbrush, a football, or a friend."
    },
    missionCard: {
      label: "Mission",
      title: "Equip students with habits, not just warnings.",
      text: "Through workshops, challenges, and peer clubs, we give students practical tools to notice their screen habits and replace them with things they genuinely enjoy."
    },
    values: {
      curiosity: { title: "Curiosity", text: "Redirecting screen time energy into asking bigger questions." },
      balance: { title: "Balance", text: "Not zero screens the right amount, at the right time." },
      community: { title: "Community", text: "Habits stick best when built alongside friends, not alone." },
      creativity: { title: "Creativity", text: "Offline hobbies as the reward, not homework in disguise." }
    }
  },

  updates: {
    eyebrow: "Club Updates",
    heading: "What's happening lately",
    intro: "A running log of workshops, milestones, and what's coming next. New entries get added straight to the list below.",
    loadMore: "Load more updates",
    items: [
      { date: "JUN\n2026", tag: "milestone", tagLabel: "Milestone", title: "Project Shomonnoy", desc: "" },
      { date: "JUN\n2026", tag: "event", tagLabel: "Event", title: "Expert-Led Workshop on Screen Dependency", desc: "" },
      { date: "JUL\n2026", tag: "milestone", tagLabel: "Milestone", title: "67+ Students maintaining a digital tracking log", desc: "" },
      { date: "JUL\n2026", tag: "milestone", tagLabel: "Milestone", title: "RFZ Digital welfare club launched", desc: "" },
      { date: "JUL\n2026", tag: "event", tagLabel: "Event", title: "Vibe-coding guidebook launched", desc: "" },
      { date: "JUL\n2026", tag: "partnership", tagLabel: "Partnership", title: "3 Partners joined", desc: "" },
      { date: "AUG\n2026", tag: "milestone", tagLabel: "Milestone", title: "500+ stakeholders reached", desc: "" },
      { date: "AUG\n2026", tag: "event", tagLabel: "Event", title: "Student-initiated creative fest organized by RFZ digital wellbeing club", desc: "" }
    ] as UpdateItem[]
  },

  network: {
    eyebrow: "Shomonnoy Network",
    heading: "Collaborations, campaigns & workshops",
    intro: "Photos and moments from schools, partners, and volunteers building the balance movement together.",
    items: [
      { cat: "Workshop", title: "Digital Wellbeing 101 session", icon: "presentation", grad: "linear-gradient(135deg, var(--blue), var(--blue-dark))" },
      { cat: "Campaign", title: "Awareness campaign - in the community", icon: "camera", grad: "linear-gradient(135deg, var(--mint), var(--teal-ink))" },
      { cat: "Partnership", title: "MoU signing with partners", icon: "handshake", grad: "linear-gradient(135deg, var(--orange), var(--orange-press))" },
      { cat: "Workshop", title: "Vibe coding training", icon: "paintbrush", grad: "linear-gradient(135deg, var(--blue), var(--mint))" },
      { cat: "Campaign", title: "Student magazine", icon: "heart-handshake", grad: "linear-gradient(135deg, var(--mint), var(--blue))" },
      { cat: "Workshop", title: "Leadership - RFZ Digital Welfare Club", icon: "book-open", grad: "linear-gradient(135deg, var(--orange), var(--blue))" }
    ] as NetworkItem[]
  },

  ebooks: {
    eyebrow: "E-Book Resource Center",
    heading: "Guidebooks & downloadable resources",
    intro: "Free materials for students, parents, and teachers more titles are added here as they're published.",
    downloadLabel: "Download",
    items: [
      { title: "The Shomonnoy Guidebook", desc: "A grade 6–7 companion guide for building balanced digital habits.", size: "4.2 MB · PDF", icon: "book-marked", grad: "linear-gradient(160deg, var(--blue), var(--blue-dark))", link: EBOOK_LINKS.shomonnoyGuidebook },
      { title: "Parent's Quick Reference", desc: "Conversation starters and screen-time tips for guardians.", size: "1.1 MB · PDF", icon: "file-text", grad: "linear-gradient(160deg, var(--mint), var(--teal-ink))", link: EBOOK_LINKS.parentsQuickReference },
      { title: "Classroom Activity Pack", desc: "Ready-to-run activities for teachers introducing the program.", size: "3.5 MB · PDF", icon: "clipboard-list", grad: "linear-gradient(160deg, var(--orange), var(--orange-press))", link: EBOOK_LINKS.classroomActivityPack }
    ]
  },

  messages: {
    eyebrow: "Messages",
    heading: "A word from our supporters",
    quotes: [
      {
        quote: "নতুন দিনের মিছিলে শামিল হওয়ার জন্য প্রয়োজন নিজেকে প্রতিনিয়ত গড়ে তোলা, প্রযুক্তির এই অগ্রযাত্রায় উন্নত বিশ্বের সাথে তাল মিলিয়ে চলার প্রথম পদক্ষেপ শুরু হোক এখানেই!",
        lang: "bn",
        translation: "To join the march of a new era, you need to keep growing every day — in this age of technological progress, let the first step toward keeping pace with the developed world begin right here!",
        initials: "MP",
        avatarColor: "var(--orange)",
        name: "Mutakabbirul Islam Pranto",
        role: "Co-Founder and Chief Executive Officer, patiHash Creative"
      },
      {
        quote: "প্রজেক্ট সমন্বয় একটি সহজ বিশ্বাস থেকে জন্ম নিয়েছে—প্রযুক্তি যেন শিশু-কিশোরদের নিয়ন্ত্রণ না করে, বরং তাদের ক্ষমতায়ন করে। আমাদের লক্ষ্য প্রযুক্তি ব্যবহার নিরুৎসাহিত করা নয়; বরং স্ক্রিনে কাটানো সময়কে শেখা, সৃজনশীলতা এবং ব্যক্তিগত বিকাশের সুযোগে রূপান্তর করতে সহায়তা করা। আমার বিশ্বাস, এই উদ্যোগ শিক্ষার্থী, অভিভাবক ও শিক্ষকদের এমন একটি ভবিষ্যৎ গড়ে তুলতে অনুপ্রাণিত করবে, যেখানে প্রযুক্তি মানুষের সেবায় কাজ করবে, মানুষ প্রযুক্তির নয়।",
        lang: "bn",
        translation: "Project Shomonnoy was born out of a simple belief — that technology should not control children and teenagers, but rather empower them. Our goal is not to discourage technology use; instead, we want to help transform screen time into opportunities for learning, creativity, and personal growth. I believe this initiative will inspire students, parents, and teachers to build a future where technology works for people, not people for technology.",
        initials: "NAC",
        avatarColor: "var(--blue)",
        name: "Nishat Azad Chua",
        role: "Project Lead, Project Shomonnoy"
      }
    ]
  },

  contact: {
    eyebrow: "Contact & Partnership",
    heading: "Let's build the balance together",
    partnerBox: {
      title: "Partner with Shomonnoy",
      text: "Schools, NGOs, and donors are welcome to collaborate from hosting a workshop to sponsoring the next guidebook print run.",
      cta: "Start a Conversation"
    },
    socialPrompt: "Prefer social media? Find us here links are placeholders, ready to connect.",
    qrTitle: "Visit patiHash",
    qrDesc: "Scan to check patiHash",
    social: {
      facebook: "Facebook",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      email: "Email"
    },
    form: {
      fullName: { label: "Full name", placeholder: "e.g. Ayesha Rahman" },
      email: { label: "Email address", placeholder: "you@example.com" },
      role: {
        label: "I am a...",
        options: {
          parent: "Parent / Guardian",
          teacher: "Teacher / School Leader",
          ngo: "NGO Partner",
          donor: "Donor / Supporter",
          student: "Student",
          other: "Other"
        }
      },
      message: { label: "Message", placeholder: "Tell us how you'd like to get involved..." },
      submit: "Send Message",
      note: "This form is a front-end placeholder connect it to your email service or backend of choice to receive submissions.",
      success: "Thanks! Your message has been noted."
    }
  },

  footer: {
    brand: "Project Shomonnoy",
    links: {
      about: "About",
      vision: "Vision & Mission",
      updates: "Club Updates",
      ebooks: "Resources",
      contact: "Contact"
    },
    copyrightHtml: "© 2026 Project Shomonnoy · A Teach For Bangladesh Student Capstone powered by <a href=\"https://www.patihash.com/\" target=\"_blank\" rel=\"noopener noreferrer\">patiHash</a> with ❤️",
    tagline: "Build by patiHash with ❤️",
    qrLabel: "Scan to visit patiHash.com"
  }
};

export type TranslationType = typeof EN;
