const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
];

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Solutions', imgPath: '/images/ideas.svg' },
  { text: 'Visions', imgPath: '/images/concepts.svg' },
  { text: 'Prototypes', imgPath: '/images/designs.svg' },
  { text: 'Applications', imgPath: '/images/code.svg' },
];

const counterItems = [
  { value: 5, suffix: '+', label: 'Years of Experience' },
  { value: 100, suffix: '+', label: 'Website Updates Delivered' },
  { value: 50, suffix: '+', label: 'Completed Projects' },
  { value: 95, suffix: '%', label: 'Client Satisfaction Rate' },
];

const logoIconsList = [
  {
    name: 'S3. Amplify. Elastic Beanstalk.',
    imgPath: '/images/logos/aws.svg',
  },
  {
    name: 'Google Analytics',
    imgPath: '/images/logos/analytics.svg',
  },
  {
    name: 'Next.js',
    imgPath: '/images/logos/next.svg',
  },
  {
    name: 'React.js',
    imgPath: '/images/logos/react.svg',
  },
  {
    name: 'Three.js',
    imgPath: '/images/logos/threejs.svg',
  },
  {
    name: 'Sass',
    imgPath: '/images/logos/sass.svg',
  },
  {
    name: 'Git',
    imgPath: '/images/logos/git.svg',
  },
  {
    name: 'Figma',
    imgPath: '/images/logos/figma.svg',
  },
  {
    name: 'TailwindCSS',
    imgPath: '/images/logos/tailwind.svg',
  },
  {
    name: 'JavaScript',
    imgPath: '/images/logos/javascript.svg',
  },
  {
    name: 'TypeScript',
    imgPath: '/images/logos/typescript.svg',
  },
  {
    name: 'HTML',
    imgPath: '/images/logos/html.svg',
  },
  {
    name: 'CSS',
    imgPath: '/images/logos/css.svg',
  },
  {
    name: 'Bootstrap',
    imgPath: '/images/logos/bootstrap.svg',
  },
  {
    name: 'Ant Design',
    imgPath: '/images/logos/antd.svg',
  },
  {
    name: 'GSAP',
    imgPath: '/images/logos/gsap.svg',
  },
];

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.',
  },
  {
    imgPath: '/images/time.png',
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
  },
];

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg',
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png',
  },
  {
    name: 'Project Manager',
    imgPath: '/images/logos/git.svg',
  },
];

const techStackIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    id: 1,
    review: '',
    imgPath: '/images/exp1.png',
    logoPath: '/images/logos/fresco.png',
    title: 'Frontend Developer',
    date: 'December 2022 - Present',
    responsibilities: [
      'Develop and maintain websites using Three.js, Sass, GSAP, Next.js, React.js, TailwindCSS, and TypeScript.',
      'Collaborated closely with UI/UX designers to ensure seamless user experiences.',
      'Optimized web applications for maximum speed and scalability.',
      'Implemented responsive designs that adapt to various screen sizes.',
      'Manage cloud hosting and serverless deployments using AWS S3, AWS Amplify, and Elastic Beanstalk for Node.js/Express applications.',
      'Create and launch Webflow websites for client projects, ensuring responsive design and smooth user experience.',
      'Build and optimize 3D configurators and viewers for web applications, including modifying existing configurators on Shopify stores to add products and update the custom UI.',
      'Improve website performance and SEO, and configure Google Analytics to track user behavior and optimize content strategy.',
      'Improved app performance and user experience through code optimization and testing.',
      'Coordinated with the product team to implement features based on feedback.',
    ],
  },
  {
    id: 2,
    review: '',
    imgPath: '/images/exp2.png',
    logoPath: '/images/logos/pharol_logo-removebg-preview.png',
    title: 'Frontend Developer',
    date: 'October 2024 - February 2025',
    responsibilities: [
      'Maintained and updated GitLab repositories using Sass, React.js, and Ant Design.',
      'Worked with backend engineers to define and request necessary API endpoints to integrate it seamlessly with the frontend.',
      'Collaborated closely with UI/UX designers to refine requirements and ensure design feasibility.',
    ],
  },
  {
    id: 3,
    review:
      'Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.',
    imgPath: '/images/exp3.png',
    logoPath: '/images/logos/errepar_logo-removebg-preview.png',
    title: 'Frontend Developer',
    date: 'December 2022 - September 2024',
    responsibilities: [
      'Delivered 100+ website updates via Jira and tickets, maintaining consistent UX and meeting deadlines.',
      'Developed new site features with React.js, JavaScript, and Teamsite.',
      'Explored and implemented new tools to enhance the user experience, such as a summarization tool using OpenAI API.',
      'Review designs on Figma and translate them into functional pages.',
      'Coordinated with the product team to implement features based on feedback.',
      'Update and maintain pages on Sharepoint and OpenText using React, HTML, CSS and Bootstrap 5.',
    ],
  },
  {
    id: 4,
    review:
      'Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.',
    imgPath: '/images/exp3.png',
    logoPath: '/images/logos/accionait.png',
    title: 'Frontend Developer',
    date: 'May 2021 - December 2022',
    responsibilities: [
      'Investigated and addressed issues reported through a ticketing system for existing products',
      'Improved web performance and user experience through code optimization and testing.',
      'Utilize Jira to manage and track assignments for new products.',
      'Implemented improvements on existing websites using HTML, CSS, Javascript, Bootstrap, Sass, and Sharepoint.',
    ],
  },
  {
    id: 5,
    review: '',
    imgPath: '/images/exp3.png',
    logoPath: '/images/logos/quantiasa_logo-removebg-preview.png',
    title: 'Electrical Engineer / Frontend Developer',
    date: 'December 2016 - May 2021',
    responsibilities: [
      'Designed Industry 4.0 dashboards for production monitoring.',
      'Created technical documentation for operation and maintenance of industrial systems.',
      'Provided post-sale technical support for proprietary software.',
      'Designed, implemented, and maintained a WordPress website to increase the company’s online presence',
    ],
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const testimonials = [
  {
    name: 'Esther Howard',
    mentions: '@estherhoward',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Guy Hawkins',
    mentions: '@guyhawkins',
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: '/images/client2.png',
  },
  {
    name: 'Marvin McKinney',
    mentions: '@marvinmckinney',
    review:
      'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Albert Flores',
    mentions: '@albertflores',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
    imgPath: '/images/client6.png',
  },
];

const socialImgs = [
  {
    name: 'insta',
    url: 'https://www.instagram.com/',
    imgPath: '/images/insta.png',
  },
  {
    name: 'fb',
    url: 'https://www.facebook.com/',
    imgPath: '/images/fb.png',
  },
  {
    name: 'x',
    url: 'https://www.x.com/',
    imgPath: '/images/x.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/',
    imgPath: '/images/linkedin.png',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
