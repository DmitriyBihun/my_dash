import blogImg from './assets/blog.png'
import mpmImg from './assets/mpm.png'
import engImg from './assets/eng.png'
import cryptoImg from './assets/crypto.png'

const projects = [
    {
        id: 1,
        title: 'English Grammar Quiz',
        description: 'An application for testing your knowledge of English grammar. Graphical display of the history of passing and explanation of mistakes made.',
        stack: ['Redux', 'Firebase', 'Recharts', 'Tailwind'],
        link: 'https://english-gqp.netlify.app/',
        image: engImg,
        bgColor: '#69d2e7'
    },
    
    {
        id: 2,
        title: 'Travel Blog',
        description: 'Travel stories shared by people around the world. Connect with travelers, exchange impressions, and explore together. Your next destination starts here.',
        stack: ['Unsplash', 'Redux', 'Firebase', 'Lenis', 'MUI'],
        link: 'https://modern-travel-blog.netlify.app/',
        image: blogImg,
        bgColor: '#FFC567'
    },
    {
        id: 3,
        title: 'cryptotrade',
        description: 'This is an ideal environment for beginners and those who want to hone their skills before entering the real market.',
        stack: ['Tailwind', 'Redux', 'Firebase', 'i18next', 'Recharts'],
        link: 'https://cryptotrade-2.netlify.app/',
        image: cryptoImg,
        bgColor: '#C4A1FF'
    },
    {
        id: 4,
        title: 'MusicPlaylistMaker',
        description: 'An application that allows you to create your own playlists and share them with friends.',
        stack: ['Vite', 'Redux', 'Firebase', 'deezer'],
        link: 'https://mpm-v2.netlify.app/',
        image: mpmImg,
        bgColor: '#FFB2EF'
    },
    // {
    //     https://herewas.me/
    // }
];

export default projects