import htmlImage from '../assets/html.png'
import cssImage from '../assets/css.png'
import reactImage from '../assets/react.png'
import javascriptImage from '../assets/javascript.png'
import figmaImage from '../assets/figma.png'
import javaImage from '../assets/java.png'
import cImage from '../assets/c.png'
import yamelImage from '../assets/yaml.png'
import sassImage from '../assets/sass.png'
import reduxImage from '../assets/redux.png'

import agentBank from '../assets/img portfolio/agentbank p13/main p13.png'
import billed from '../assets/img portfolio/billed p9/mainp9.png'
import kasa from '../assets/img portfolio/kasa p11/mainp11.png'
import booki from '../assets/img portfolio/booki p2/mainp2.png'
import gameon from '../assets/img portfolio/gameon p4/mainp4.png'
import fisheye from '../assets/img portfolio/frontendfisheye p6/mainp5.png'
import lesPetitsPlats from '../assets/img portfolio/lespetitsplats p7/mainp7.png'
import ohmyfood from '../assets/img portfolio/ohmyfood p3/mainp3.png'
import sportSee from '../assets/img portfolio/sportsee p12/mainp12.png'
import wealthHealth from '../assets/img portfolio/wealth_health p14/mainp14.png'

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
  {
    name: 'Yamel',
    path: yamelImage,
  },
  {
    name: 'Redux',
    path: reduxImage,
  },
  {
    name: 'Sass',
    path: sassImage,
  },
]

export const portrait = {
  path: portraitAboutMe,
  alt: 'photo portrait',
}

export default imageList

export const projects = [
  {
    title: 'booki',
    tags: ['HTML', 'CSS', 'Maquette', 'Web'],
    text: 'Ce projet utilise les langages HTML et CSS pour transformer une maquette graphique en un site web interactif et esthétique.',
    photo: booki,
  },
  {
    title: 'ohmyfood',
    tags: ['CSS', 'Animations', 'Web'],
    text: 'Ce projet utilise les animations CSS pour ajouter du dynamisme à vos pages web, créant ainsi des expériences utilisateur engageantes.',
    photo: ohmyfood,
  },
  {
    title: 'gameon',
    tags: ['Javascript', 'Landing Page'],
    text: 'Ce projet utilise JavaScript pour créer une landing page interactive et réactive, offrant ainsi une expérience utilisateur fluide et moderne.',
    photo: gameon,
  },

  {
    title: 'fisheye',
    tags: ['Site', 'Accessible', 'Photographes'],
    text: 'Ce projet développe un site web accessible aux photographes en utilisant des techniques avancées de HTML, CSS et JavaScript pour garantir une accessibilité optimale.',
    photo: fisheye,
  },
  {
    title: 'Les petits plats',
    tags: ['Algorithme', 'Recherche', 'Javascript'],
    text: "Ce projet guide dans la création d'un algorithme de recherche efficace en JavaScript, en mettant en œuvre des concepts de programmation avancés.",
    photo: lesPetitsPlats,
  },

  {
    title: 'Billed',
    tags: ['Débogage', 'Test', 'RH'],
    text: 'Ce projet met en pratique vos compétences en matière de débogage et de test sur un logiciel en tant que service (SaaS) dédié aux ressources humaines (RH).',
    photo: billed,
  },
  {
    title: 'Kasa',
    tags: ['React', 'Responsive Design', 'SaaS', 'Node.js'],
    text: "Réalisation de la platform Kasa. A l'aide de React et Node.js, j'ai réaliser une platforme de location d'appartement entre particuliers en France.",
    photo: kasa,
  },
  {
    title: 'Sportsee',
    tags: ['Coaching sportif', 'Application web', 'Saas'],
    text: "Conception de la plateforme web de pointe SportSee. Mise en place de fonctionnalités conviviales pour suivre les sessions d'entraînement et les calories brûlées, améliorant ainsi l'expérience utilisateur globale.",
    photo: sportSee,
  },
  {
    title: 'Agent Bank',
    tags: [''],
    text: '',
    photo: agentBank,
  },
  {
    title: 'Wealth Health',
    tags: [''],
    text: '',
    photo: wealthHealth,
  },
]

export const socialMediaPlatforms = [
  { name: 'Facebook', logo: 'facebook_logo.jpg' },
  { name: 'Twitter', logo: 'twitter_logo.jpg' },
  { name: 'LinkedIn', logo: 'linkedin_logo.jpg' },
  { name: 'WhatsApp', logo: 'whatsapp_logo.jpg' },
  { name: 'Telegram', logo: 'telegram_logo.jpg' },
  { name: 'Skype', logo: 'skype_logo.jpg' },
  { name: 'mail', logo: 'mail_logo.jpg' },
]
