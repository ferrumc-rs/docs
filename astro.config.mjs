// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "FerrumC Docs",
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/qT5J8EMjwk",
        },
        {
          icon: "github",
          label: "Git",
          href: "https://github.com/ferrumc-rs/ferrumc",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Getting Started", slug: "start/getting_started" },
            { label: "Migrate", slug: "start/migrate" },
          ],
        },
        {
          label: "About",
          items: [
            { label: "Introduction", slug: "about/introduction" },
            { label: "FAQ", slug: "about/faq" },
            { label: "Comparison", slug: "about/comparison" },
          ],
        },
        {
          label: "Internal Documentation",
          items: [
            { label: "Getting Started", slug: "internal/getting_started" },
            { label: "Database", slug: "internal/database" },
            { label: "Caching", slug: "internal/caching" },
          ],
        },
        {
          label: "APIs",
          items: [
            { label: "Commands", slug: "api/commands" }
          ]
        }
      ],
      favicon: "/favicon.ico",
      customCss: ["src/style/theme.css"],
    }),
  ],
});
