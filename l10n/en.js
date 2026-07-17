/* =========================================================
   ENGLISH TEXT — every user-facing string on the site.
   This is the source of truth for site copy: edit here,
   not in the HTML. To add another language, copy this file
   (e.g. l10n/bn.js), translate the values, keep the keys
   identical, assign the result to window.I18N, and swap
   which l10n/*.js file the page loads.
   ========================================================= */
window.I18N_EN = {
  meta: {
    title: "Project Shomonnoy — Balancing Screen Time & Real Life",
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
    eyebrow: "A Teach For Bangladesh Student Capstone",
    titleHtml: "Balancing the <span class=\"accent\">Screen Time</span> & Real Life",
    lead: "Project Shomonnoy — meaning \"balance\" — is a student-led initiative helping Grade 6 and 7 students trade a little scrolling for a lot more living: creativity, hobbies, friendships, and community, one small habit at a time.",
    ctaPartner: "Partner With Us",
    ctaResources: "Explore Resources"
  },

  stats: {
    students: { value: "500+", label: "Students Reached" },
    workshops: { value: "12", label: "Workshops Run" },
    screenFreeHours: { value: "40+ hrs", label: "Screen-Free Play Logged" },
    partnerSchools: { value: "3", label: "Partner Schools" }
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
        text: "Screen time among 11–14 year-olds has climbed sharply, often crowding out sleep, outdoor play, reading, and face-to-face friendships — with real effects on attention, mood, and physical activity."
      },
      whyItMatters: {
        title: "Why It Matters",
        text: "The goal isn't to villainize screens — it's to help students build a healthy, self-aware relationship with technology, so it supports their curiosity and creativity instead of replacing it."
      }
    }
  },

  vision: {
    eyebrow: "Vision & Mission",
    heading: "What we're building toward",
    visionCard: {
      label: "Vision",
      title: "A generation that chooses balance, not restriction.",
      text: "We imagine students who use technology with intention — confident enough to put the phone down and pick up a paintbrush, a football, or a friend."
    },
    missionCard: {
      label: "Mission",
      title: "Equip students with habits, not just warnings.",
      text: "Through workshops, challenges, and peer clubs, we give students practical tools to notice their screen habits and replace them with things they genuinely enjoy."
    },
    values: {
      curiosity: { title: "Curiosity", text: "Redirecting screen time energy into asking bigger questions." },
      balance: { title: "Balance", text: "Not zero screens — the right amount, at the right time." },
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
      { date:"MAR\n2026", tag:"event", tagLabel:"Event", title:"Screen-Free Saturday Challenge", desc:"120+ students logged a full day without personal devices — highlights and photos coming soon." },
      { date:"FEB\n2026", tag:"partnership", tagLabel:"Partnership", title:"New school joins the network", desc:"A third partner school signed on to run the Shomonnoy club curriculum this term." },
      { date:"FEB\n2026", tag:"milestone", tagLabel:"Milestone", title:"500 students reached", desc:"Across three schools, Shomonnoy workshops have now reached over 500 Grade 6–7 students." },
      { date:"JAN\n2026", tag:"event", tagLabel:"Event", title:"Guidebook launch workshop", desc:"Students received their first print copies of the Shomonnoy guidebook in a hands-on session." },
      { date:"DEC\n2025", tag:"milestone", tagLabel:"Milestone", title:"Project Shomonnoy kicks off", desc:"The capstone officially launched with its first cohort of student ambassadors." }
      // Add future updates here, e.g.:
      // { date:"APR\n2026", tag:"event", tagLabel:"Event", title:"...", desc:"..." },
    ]
  },

  network: {
    eyebrow: "Shomonnoy Network",
    heading: "Collaborations, campaigns & workshops",
    intro: "Photos and moments from schools, partners, and volunteers building the balance movement together.",
    items: [
      { cat:"Workshop", title:"Digital Wellbeing 101 session", icon:"presentation", grad:"linear-gradient(135deg, #3B82C4, #245A85)" },
      { cat:"Campaign", title:"Screen-Free Saturday photo wall", icon:"camera", grad:"linear-gradient(135deg, #45B996, #1F7A5C)" },
      { cat:"Partnership", title:"MoU signing with partner school", icon:"handshake", grad:"linear-gradient(135deg, #F4A340, #C97A1E)" },
      { cat:"Workshop", title:"Hobby swap-meet afternoon", icon:"paintbrush", grad:"linear-gradient(135deg, #3B82C4, #45B996)" },
      { cat:"Campaign", title:"Balance Pledge wall", icon:"heart-handshake", grad:"linear-gradient(135deg, #45B996, #3B82C4)" },
      { cat:"Workshop", title:"Storytelling without screens", icon:"book-open", grad:"linear-gradient(135deg, #F4A340, #3B82C4)" }
      // Add future gallery items here, following the same shape.
    ]
  },

  ebooks: {
    eyebrow: "E-Book Resource Center",
    heading: "Guidebooks & downloadable resources",
    intro: "Free materials for students, parents, and teachers — more titles are added here as they're published.",
    downloadLabel: "Download",
    items: [
      { title:"The Shomonnoy Guidebook", desc:"A grade 6–7 companion guide for building balanced digital habits.", size:"4.2 MB · PDF", icon:"book-marked", grad:"linear-gradient(160deg, #3B82C4, #245A85)" },
      { title:"Parent's Quick Reference", desc:"Conversation starters and screen-time tips for guardians.", size:"1.1 MB · PDF", icon:"file-text", grad:"linear-gradient(160deg, #45B996, #1F7A5C)" },
      { title:"Classroom Activity Pack", desc:"Ready-to-run activities for teachers introducing the program.", size:"3.5 MB · PDF", icon:"clipboard-list", grad:"linear-gradient(160deg, #F4A340, #C97A1E)" }
      // Add future downloadable resources here, following the same shape.
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
      }
    ]
  },

  contact: {
    eyebrow: "Contact & Partnership",
    heading: "Let's build the balance together",
    partnerBox: {
      title: "Partner with Shomonnoy",
      text: "Schools, NGOs, and donors are welcome to collaborate — from hosting a workshop to sponsoring the next guidebook print run.",
      cta: "Start a Conversation"
    },
    socialPrompt: "Prefer social media? Find us here — links are placeholders, ready to connect.",
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
      note: "This form is a front-end placeholder — connect it to your email service or backend of choice to receive submissions.",
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
    copyrightHtml: "© 2026 Project Shomonnoy · A Teach For Bangladesh Student Capstone powered by <a href=\"https://www.patihash.com/\" target=\"_blank\" rel=\"noopener noreferrer\">patiHash</a>",
    tagline: "Built with balance, for balance.",
    qrLabel: "Scan to visit patiHash.com"
  }
};
