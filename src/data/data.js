// Data file

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

import github from '../assets/socialMediaPlartformsImg/github.png'
import gmail from '../assets/socialMediaPlartformsImg/gmail.png'
import linkedin from '../assets/socialMediaPlartformsImg/linkedin.png'
import twitter from '../assets/socialMediaPlartformsImg/twitter.png'

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

// export const projects = [
//   {
//     title: 'Booki',
//     tags: ['HTML', 'CSS', 'Maquette', 'Web'],
//     text: 'Utilisation des langages HTML et CSS pour transformer une maquette graphique en un site web interactif et esthétique.',
//     photo: booki,
//   },
//   {
//     title: 'Ohmyfood',
//     tags: ['CSS', 'Animations', 'Web', 'Sass'],
//     text: "Dynamisation à l'aide d'animations CSS, créant ainsi des expériences utilisateur engageantes.",
//     photo: ohmyfood,
//   },
//   {
//     title: 'Gameon',
//     tags: ['Javascript', 'Landing Page', 'Formulaire'],
//     text: 'Utilisation de JavaScript pour créer une landing page interactive et réactive, offrant ainsi une expérience utilisateur fluide et moderne.',
//     photo: gameon,
//   },

//   {
//     title: 'Fisheye',
//     tags: ['Site', 'Accessible', 'Photographes', 'Javascript'],
//     text: "Développement d'un site web accessible aux photographes en utilisant des techniques avancées de HTML, CSS et JavaScript pour garantir une accessibilité optimale.",
//     photo: fisheye,
//   },
//   {
//     title: 'Les petits plats',
//     tags: ['Algorithme', 'Recherche', 'Javascript'],
//     text: "Création d'un algorithme de recherche efficace en JavaScript, en mettant en œuvre des concepts de programmation avancés.",
//     photo: lesPetitsPlats,
//   },

//   {
//     title: 'Billed',
//     tags: ['Débogage', 'Test', 'RH', 'Saas', 'Jest'],
//     text: 'Débogage et de test sur un logiciel en tant que service (SaaS) dédié aux ressources humaines (RH).',
//     photo: billed,
//   },
//   {
//     title: 'Kasa',
//     tags: ['React', 'Responsive Design', 'SaaS', 'Node.js'],
//     text: "Réalisation de la platform Kasa. A l'aide de React et Node.js, j'ai réaliser une platforme de location d'appartement entre particuliers en France.",
//     photo: kasa,
//   },
//   {
//     title: 'Sportsee',
//     tags: ['React', 'Coaching sportif', 'Application web', 'Saas'],
//     text: "Conception de la plateforme web de pointe SportSee. Mise en place de fonctionnalités conviviales pour suivre les sessions d'entraînement et les calories brûlées, améliorant ainsi l'expérience utilisateur globale.",
//     photo: sportSee,
//   },
//   {
//     title: 'Agent Bank',
//     tags: ['React', 'Connexion', 'Securité'],
//     text: '',
//     photo: agentBank,
//   },
//   {
//     title: 'Wealth Health',
//     tags: ['React'],
//     text: '',
//     photo: wealthHealth,
//   },
// ]
export const projects = [
  {
    title: 'Booki',
    tags: ['HTML', 'CSS', 'Maquette', 'Web'],
    text: 'Utilisation des langages HTML et CSS pour transformer une maquette graphique en un site web interactif et esthétique.',
    photo: booki,
    link: 'https://creedxd.github.io/booki-p2-openclassrooms',
  },
  {
    title: 'Ohmyfood',
    tags: ['CSS', 'Animations', 'Web', 'Sass'],
    text: "Dynamisation à l'aide d'animations CSS, créant ainsi des expériences utilisateur engageantes.",
    photo: ohmyfood,
    link: 'https://creedxd.github.io/openclassrooms_P3_inte',
  },
  {
    title: 'Gameon',
    tags: ['Javascript', 'Landing Page', 'Formulaire'],
    text: 'Utilisation de JavaScript pour créer une landing page interactive et réactive, offrant ainsi une expérience utilisateur fluide et moderne.',
    photo: gameon,
    link: 'https://creedxd.github.io/GameOn-website-FR',
  },
  {
    title: 'Fisheye',
    tags: ['Site', 'Accessible', 'Photographes', 'Javascript'],
    text: "Développement d'un site web accessible aux photographes en utilisant des techniques avancées de HTML, CSS et JavaScript pour garantir une accessibilité optimale.",
    photo: fisheye,
    link: 'https://creedxd.github.io/Front-End-Fisheye',
  },
  {
    title: 'Les petits plats',
    tags: ['Algorithme', 'Recherche', 'Javascript'],
    text: "Création d'un algorithme de recherche efficace en JavaScript, en mettant en œuvre des concepts de programmation avancés.",
    photo: lesPetitsPlats,
    link: 'https://creedxd.github.io/les-petits-plats',
  },
  {
    title: 'Billed',
    tags: ['Débogage', 'Test', 'RH', 'Saas', 'Jest'],
    text: 'Débogage et de test sur un logiciel en tant que service (SaaS) dédié aux ressources humaines (RH).',
    photo: billed,
    // link: 'https://creedxd.github.io/P9---Openclassrooms---D-buggez-et-testez-un-SaaS-RH',
  },
  {
    title: 'Kasa',
    tags: ['React', 'Responsive Design', 'SaaS', 'Node.js'],
    text: "Réalisation de la platform Kasa. A l'aide de React et Node.js, j'ai réaliser une platforme de location d'appartement entre particuliers en France.",
    photo: kasa,
    link: 'https://creedxd.github.io/p11--openclassroom--introduciton_React',
  },
  {
    title: 'Sportsee',
    tags: ['React', 'Coaching sportif', 'Application web', 'Saas'],
    text: "Conception de la plateforme web de pointe SportSee. Mise en place de fonctionnalités conviviales pour suivre les sessions d'entraînement et les calories brûlées, améliorant ainsi l'expérience utilisateur globale.",
    photo: sportSee,
    // link: 'https://creedxd.github.io/Openclassrooms_p12_SportSee',
  },
  {
    title: 'Agent Bank',
    tags: ['React', 'Connexion', 'Securité'],
    text: '',
    photo: agentBank,
    // link: 'https://creedxd.github.io/Projet13---openclassrooms---argent-bank',
  },
  {
    title: 'Wealth Health',
    tags: ['React'],
    text: '',
    photo: wealthHealth,
    link: 'https://creedxd.github.io/openclassroom--p14',
  },
]

export const socialMediaPlatforms = [
  { name: 'Twitter', logo: twitter, link: 'https://twitter.com/dev_veille' },
  {
    name: 'LinkedIn',
    logo: linkedin,
    link: 'https://www.linkedin.com/in/pierreclio',
  },
  { name: 'mail', logo: gmail, link: 'mailto:pclio92@gmail.com' },
  { name: 'Github', logo: github, link: 'https://github.com/CreeDXD' },
]
