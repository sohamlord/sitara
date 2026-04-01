import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sitara Travellers",
    short_name: "Sitara",
    description: "Fast, safe and affordable taxis across Goa",
    start_url: "/",
    display: "standalone",
    background_color: "#020202",
    theme_color: "#F38338",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
