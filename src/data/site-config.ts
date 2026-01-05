export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Abbas Hayder',
    // subtitle: 'Product Developer | GNU/Linux Enthusiast | Avid Runner',
    description: 'Blog and Portfolio by Abbas Hayder',
    // image: {
    //     src: '/dante-preview.jpg',
    //     alt: 'Dante - Astro.js and Tailwind CSS theme'
    // },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Writing',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/Aquabbas'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/abbas-hayder'
        }
    ],
    hero: {
        // title: 'Hello & welcome to my little corner of the internet.',
        text: '\n\nI\'m a FinTech Software Engineer currently working at <a href="https://odevo.com/" target="_blank" rel="noopener noreferrer">Odevo</a>, where I help build and maintain a SaaS platform for property managers. Here, I write about Software and Product Development, among other topics. I also do long distance running in nature reserves and practice ring gymnastics.',
        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        // image: {
        //     src: '/home.jpeg',
        //     alt: 'At Home'
        // },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
