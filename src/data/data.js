import htmlImage from '../assets/html.png'
import cssImage from '../assets/css.png'
import reactImage from '../assets/react.png'
import javascriptImage from '../assets/javascript.png'
import figmaImage from '../assets/figma.png'
import javaImage from '../assets/java.png'
import cImage from '../assets/c.png'
import portraitAboutMe from '../assets/portrait.jpg'

const imageList = [
  {
    name: 'HTML',
    path: htmlImage,
  },
  {
    name: 'CSS',
    path: cssImage,
  },
  {
    name: 'React',
    path: reactImage,
  },
  {
    name: 'JavaScript',
    path: javascriptImage,
  },
  {
    name: 'Figma',
    path: figmaImage,
  },
  {
    name: 'Java',
    path: javaImage,
  },
  {
    name: 'C',
    path: cImage,
  },
]

export const portrait = {
  path: portraitAboutMe,
  alt: 'photo portrait',
}

export default imageList

export const projects = [
  {
    title: 'Transformez une maquette en site web avec HTML & CSS',
    tags: ['HTML', 'CSS', 'Maquette', 'Web', 'OpenClassroom'],
    text: 'Ce projet utilise les langages HTML et CSS pour transformer une maquette graphique en un site web interactif et esthétique.',
    photo: 'maquette.jpg',
  },
  {
    title: 'Dynamisez une page web avec des animations CSS',
    tags: ['CSS', 'Animations', 'Web', 'OpenClassroom'],
    text: 'Ce projet utilise les animations CSS pour ajouter du dynamisme à vos pages web, créant ainsi des expériences utilisateur engageantes.',
    photo: 'animations.jpg',
  },
  {
    title: 'Créez une landing page avec Javascript',
    tags: ['Javascript', 'Landing Page', 'OpenClassroom'],
    text: 'Ce projet utilise JavaScript pour créer une landing page interactive et réactive, offrant ainsi une expérience utilisateur fluide et moderne.',
    photo: 'landing.jpg',
  },
  {
    title: 'Testez vos compétences : les langages du Web',
    tags: ['Test', 'Compétences', 'Web', 'OpenClassroom'],
    text: 'Ce projet évalue vos compétences en HTML, CSS et JavaScript à travers une série de tests pratiques et théoriques.',
    photo: 'test.jpg',
  },
  {
    title: 'Créez un site accessible pour une plateforme de photographes',
    tags: ['Site', 'Accessible', 'Photographes', 'OpenClassroom'],
    text: 'Ce projet développe un site web accessible aux photographes en utilisant des techniques avancées de HTML, CSS et JavaScript pour garantir une accessibilité optimale.',
    photo: 'photographes.jpg',
  },
  {
    title: 'Développez un algorithme de recherche en JavaScript',
    tags: ['Algorithme', 'Recherche', 'Javascript', 'OpenClassroom'],
    text: "Ce projet guide dans la création d'un algorithme de recherche efficace en JavaScript, en mettant en œuvre des concepts de programmation avancés.",
    photo: 'recherche.jpg',
  },
  {
    title: 'Testez vos compétences : les algorithmes en JavaScript',
    tags: ['Test', 'Compétences', 'Javascript', 'Algorithmes', 'OpenClassroom'],
    text: 'Ce projet propose de tester vos compétences en résolvant des problèmes algorithmiques complexes en utilisant le langage JavaScript.',
    photo: 'test_algo.jpg',
  },
  {
    title: 'Débuggez et testez un SaaS RH',
    tags: ['Débogage', 'Test', 'SaaS', 'RH', 'OpenClassroom'],
    text: 'Ce projet met en pratique vos compétences en matière de débogage et de test sur un logiciel en tant que service (SaaS) dédié aux ressources humaines (RH).',
    photo: 'saas_rh.jpg',
  },
]

export const socialMediaPlatforms = [
  { name: 'Facebook', logo: 'facebook_logo.jpg' },
  { name: 'Twitter', logo: 'twitter_logo.jpg' },
  { name: 'LinkedIn', logo: 'linkedin_logo.jpg' },
  { name: 'WhatsApp', logo: 'whatsapp_logo.jpg' },
  { name: 'Telegram', logo: 'telegram_logo.jpg' },
  { name: 'Skype', logo: 'skype_logo.jpg' },
]
