import Curriculum from "../components/sections/Curriculum";
import Projects from "../components/sections/Projects";
import Footer from "../components/sections/Footer";
import Skills from "../components/sections/Skills";

const menu = [
  {title: 'Compétences', anchor: '#skills', component: Skills },
  {title: 'Parcours', anchor: '#curriculum', component: Curriculum },
  {title: 'Projets', anchor: '#projects', component: Projects},
  {title: 'Footer', anchor: '#footer', component: Footer},
]
export default menu;