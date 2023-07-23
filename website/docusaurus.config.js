// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "ChatLab",
    tagline: "Chat Experiments, Simplified",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://chatlab.dev",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "rgbkrk", // Usually your GitHub org/user name.
    projectName: "chatlab", // Usually your repo name.

    deploymentBranch: "gh-pages",
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // TODO: Change this link to point to the repo's inner docs contents
                    editUrl:
                        "https://github.com/rgbkrk/chatlab/tree/main/site/docs",
                },
                blog: {
                    showReadingTime: true,
                    // Change this to point to the repo's inner blog contents
                    editUrl:
                        "https://github.com/rgbkrk/chatlab-docs/tree/main/site/blog",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/chatlab-social-card.jpg",
            navbar: {
                title: "ChatLab",
                logo: {
                    alt: "My Site Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Tutorial",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/rgbkrk/chatlab",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            // {
                            //   label: "Stack Overflow",
                            //   href: "https://stackoverflow.com/questions/tagged/chatlab",
                            // },
                            // {
                            //   label: "Discord",
                            //   href: "https://discordapp.com/invite/chatlab",
                            // },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/chatlablib",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/rgbkrk/chatlab",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} ChatLab Contributors. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;