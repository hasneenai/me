const websiteData = {
    personal: {
        name: "Seof",
        title: "Full Stack Developer",
        image: websiteImages.personal.profile,
        logo: websiteImages.personal.logo,
        about: "Professional Software Developer",
        description: "Specialized in developing web and mobile applications using cutting-edge technologies",
        expertise: ["Web Development", "Mobile Development", "UI/UX Design", "Database Management"]
    },

    contact: {
        telegram: {
            channel: "https://t.me/githon",
            personal: "https://t.me/seof88"
        },
        social: {
            github: "https://github.com/seof88",
            telegram: "https://t.me/seof88"
        }
    },

    experience: [],

    skills: [
        { name: "HTML5/CSS3", icon: "fab fa-html5", level: "Expert", percentage: 95 },
        { name: "JavaScript", icon: "fab fa-js", level: "Expert", percentage: 90 },
        { name: "React", icon: "fab fa-react", level: "Advanced", percentage: 85 },
        { name: "Node.js", icon: "fab fa-node-js", level: "Advanced", percentage: 85 },
        { name: "Python", icon: "fab fa-python", level: "Advanced", percentage: 80 },
        { name: "Docker", icon: "fab fa-docker", level: "Intermediate", percentage: 75 }
    ],

    projects: [{
            title: "E-Commerce Platform",
            description: "Full-featured online marketplace with real-time inventory",
            image: websiteImages.projects.project1,
            tags: ["React", "Node.js", "MongoDB", "AWS"],
            link: "#",
            github: "https://github.com/project1",
            featured: true
        },
        {
            title: "AI Task Manager",
            description: "Smart project management with AI-powered insights",
            image: websiteImages.projects.project2,
            tags: ["Python", "TensorFlow", "React", "Docker"],
            link: "#",
            github: "https://github.com/project2",
            featured: true
        },
        {
            title: "Cloud Analytics Dashboard",
            description: "Real-time data visualization platform",
            image: websiteImages.projects.project3,
            tags: ["Vue.js", "D3.js", "AWS", "Firebase"],
            link: "#",
            github: "https://github.com/project3",
            featured: false
        }
    ],

    testimonials: [{
            name: "Sarah Johnson",
            position: "CEO, TechCorp",
            image: websiteImages.testimonials.client1,
            text: "Exceptional development skills and professional attitude"
        },
        {
            name: "Michael Chen",
            position: "CTO, StartupX",
            image: websiteImages.testimonials.client2,
            text: "Delivered our project on time with outstanding quality"
        }
    ]
};
