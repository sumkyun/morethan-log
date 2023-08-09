const CONFIG = {
  // profile setting (required)
  profile: {
    name: "SeomKyun",
    image: "/avatar.svg" // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "송섬균",
    bio: "수학, 코딩, 암호, 블록체인, 경제 관련 공부하고 있습니다",
    email: "tndyd0706@gmail.com",
    linkedin: "",
    github: "sumkyun",
    instagram: "sigmagerm",
  },
  projects: [
    {
      name: ``,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "sumkyun-log",
    description: "sumkyun-log에 오신 것을 환영합니다",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: "69314205e6384ef4b64133c799c0e2b8",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 30, // revalidate time for [slug], index
}

module.exports = { CONFIG }
