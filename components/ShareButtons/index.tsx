"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

interface ShareButtonsProps {
  title: string;
}

const ShareButtons = ({ title }: ShareButtonsProps) => {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(window.location.href)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${title} - ${window.location.href}`
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(title)}`,
  };

  return (
    <div className="mt-8 border-t pt-4">
      <h3 className="font-bold text-xl mb-4">Share this recipe:</h3>
      <div className="flex gap-4">
        <button
          onClick={() => window.open(shareUrls.facebook, "_blank")}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label="Share on Facebook"
        >
          <FacebookIcon sx={{ fontSize: 24 }} />
        </button>

        <button
          onClick={() => window.open(shareUrls.twitter, "_blank")}
          className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
          aria-label="Share on Twitter"
        >
          <TwitterIcon sx={{ fontSize: 24 }} />
        </button>

        <button
          onClick={() => window.open(shareUrls.whatsapp, "_blank")}
          className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon sx={{ fontSize: 24 }} />
        </button>

        <button
          onClick={() => window.open(shareUrls.linkedin, "_blank")}
          className="p-2 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <LinkedInIcon sx={{ fontSize: 24 }} />
        </button>
        <button
          onClick={() => window.open(shareUrls.telegram, "_blank")}
          className="p-2 rounded-full bg-[#0088cc] text-white hover:bg-[#0077b5] transition-colors"
          aria-label="Share on Telegram"
        >
          <TelegramIcon sx={{ fontSize: 24 }} />
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
