import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Stellar UI - Component Library",
        template: `%s | Stellar UI`
    },
    description: "Unlock the power of modern design with our lightweight and versatile UI library.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Stellar UI - Component Library",
        description: "Unlock the power of modern design with our lightweight and versatile UI library.",
    },
    metadataBase: new URL("https://stellarui.vercel.app"),
};