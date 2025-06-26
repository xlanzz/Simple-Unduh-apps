export const runtime = "nodejs" 
export const dynamic = "force-dynamic" 

export async function GET() {
  const data = {
    name: "FF BETA",
    authors: "Garena",
    listapps: [
      {
        name: "FF BETA ASTUTE V1",
        icon: "https://files.catbox.moe/6aginb.webp",
        thumb: "https://files.catbox.moe/x880u6.jpg",
        desk: "FF BETA adalah versi uji coba Free Fire yang sudah dimodifikasi dengan fitur Unlock All Skin, performa ringan, dan fitur premium. Akun langsung jadi sultan!",
        version: "1.95.2",
        size: "125 MB",
        download: "https://example.com/ff-beta-astute-v1.apk",
        unlock_steps: [
          {
            title: "Subscribe YouTube",
            url: "https://youtube.com/subscribe-astute",
            icon: "youtube",
          },
          {
            title: "Join Telegram",
            url: "https://t.me/astute-channel",
            icon: "telegram",
          },
          {
            title: "Follow Instagram",
            url: "https://instagram.com/astute-gaming",
            icon: "instagram",
          },
          {
            title: "Visit Website",
            url: "https://astute-gaming.com/unlock",
            icon: "website",
          },
          {
            title: "Support me",
            url: "https://support.astute-gaming.com",
            icon: "survey",
          },
        ],
      },
      {
        name: "FF BETA ULTRA V2",
        icon: "https://files.catbox.moe/6aginb.webp",
        thumb: "https://files.catbox.moe/x880u6.jpg",
        desk: "FF BETA adalah versi uji coba Free Fire yang sudah dimodifikasi dengan fitur Unlock All Skin, performa ringan, dan fitur premium. Akun langsung jadi sultan!",
        version: "1.96.0",
        size: "180 MB",
        download: "https://example.com/ff-beta-ultra-v2.apk",
        unlock_steps: [
          {
            title: "Subscribe YouTube",
            url: "https://youtube.com/subscribe-ultra",
            icon: "youtube",
          },
          {
            title: "Join Telegram",
            url: "https://t.me/ultra-channel",
            icon: "telegram",
          },
          {
            title: "Follow Instagram",
            url: "https://instagram.com/ultra-gaming",
            icon: "instagram",
          },
          {
            title: "Visit Website",
            url: "https://ultra-gaming.com/unlock",
            icon: "website",
          },
          {
            title: "Support me",
            url: "https://support.ultra-gaming.com",
            icon: "survey",
          },
        ],
      },
      {
        name: "FF BETA LITE",
        icon: "https://files.catbox.moe/6aginb.webp",
        thumb: "https://files.catbox.moe/x880u6.jpg",
        desk: "FF BETA adalah versi uji coba Free Fire yang sudah dimodifikasi dengan fitur Unlock All Skin, performa ringan, dan fitur premium. Akun langsung jadi sultan!",
        version: "1.94.8",
        size: "85 MB",
        download: "https://example.com/ff-beta-lite.apk",
        unlock_steps: [
          {
            title: "Subscribe YouTube",
            url: "https://youtube.com/subscribe-lite",
            icon: "youtube",
          },
          {
            title: "Join Telegram",
            url: "https://t.me/lite-channel",
            icon: "telegram",
          },
          {
            title: "Follow Instagram",
            url: "https://instagram.com/lite-gaming",
            icon: "instagram",
          },
          {
            title: "Visit Website",
            url: "https://lite-gaming.com/unlock",
            icon: "website",
          },
          {
            title: "Support me",
            url: "https://support.lite-gaming.com",
            icon: "survey",
          },
        ],
      },
      {
        name: "FF BETA PRO MAX",
        icon: "https://files.catbox.moe/6aginb.webp",
        thumb: "https://files.catbox.moe/x880u6.jpg",
        desk: "FF BETA adalah versi uji coba Free Fire yang sudah dimodifikasi dengan fitur Unlock All Skin, performa ringan, dan fitur premium. Akun langsung jadi sultan!",
        version: "1.97.1",
        size: "220 MB",
        download: "https://example.com/ff-beta-pro-max.apk",
        unlock_steps: [
          {
            title: "Subscribe YouTube",
            url: "https://youtube.com/subscribe-pro",
            icon: "youtube",
          },
          {
            title: "Join Telegram",
            url: "https://t.me/pro-channel",
            icon: "telegram",
          },
          {
            title: "Follow Instagram",
            url: "https://instagram.com/pro-gaming",
            icon: "instagram",
          },
          {
            title: "Visit Website",
            url: "https://pro-gaming.com/unlock",
            icon: "website",
          },
          {
            title: "Support me",
            url: "https://support.pro-gaming.com",
            icon: "survey",
          },
        ],
      },
    ],
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
