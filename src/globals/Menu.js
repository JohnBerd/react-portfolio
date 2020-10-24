import Curriculum from "../components/sections/Curriculum";
import Projects from "../components/sections/Projects";
import Footer from "../components/sections/Footer";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

const menu = [
  {title: 'Compétences', anchor: '#skills', component: Skills },
  {title: 'Parcours', anchor: '#curriculum', component: Curriculum },
  {title: 'Projets', anchor: '#projects', component: Projects},
  {title: 'Contact', anchor: '#contact', component: Contact},
]
export default menu;