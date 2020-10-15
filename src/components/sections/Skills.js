import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Section from '../Section';
import ProgressBar from 'progressbar.js';
import TrackVisibility from 'react-on-screen';
import { Typography } from '@material-ui/core';
import _uniqueId from 'lodash/uniqueId';
import '../../index.css'

const skills = [
  {
    title: "Le Dev Mobile",
    description: "Je suis capable de fournir  une solution complète en déployant une application à la fois sur Android et IOS en un temps de développement court.",
    skills: [
      {
        title: "React Native",
        icon: "fa-react",
        percent: "0.95",
        description: "Un seul code est compilé pour créer 2 applications, une pour Android, l'autre pour IOS, une valeur sûre pour rapidement coder et maintenir un projet qui a vocation d'être utilisé sur tout type de smartphone.",
      },
      {
        title: "Android",
        icon: "fa-android",
        percent: "0.70",
        description: "De l'Android natif, codé en Java, sympa mais un peu plus long à coder!",
      },
      {
        title: "Serge",
        icon: "fa-angellist",
        percent: "0.20",
        description: "De l'Android natif, codé en Java, sympa mais un peu plus long à coder!",
      },
    ]
  },
  {
    title: "Le Dev Web",
    description: "Je peux développer votre application Web, telle que vous la pensez, et la rendre accessible sur le web.",
    skills: [
      {
        title: "ReactJS",
        icon: "fa-react",
        percent: "0.95",
        description: "Un framework pour coder et maintenir un projet web, ce qui en fais sa puissance est que ses composants sont réutilisables dans d'autres projets.",
      },
    ]
  },
  {
    title: "Logiciels De Bureau",
    description: "Ma formation initiale me permet également de développer des applications de bureau.",
    skills: [
      {
        title: "Java",
        icon: "fa-java",
        percent: "0.70",
        description: "Langage pour créer un logiciel avec une structure maintenable et très modulaire.",
      },
      {
        title: "C / C++",
        icon: "fa-cuttlefish",
        percent: "0.60",
        description: "Language bas niveau, très performant utilisant très peu de mémoire, très utilisé dans l'embarqué.",
      },
    ]
  },
  {
    title: "Scripting",
    description: "Deployer une application en une seule ligne de commande, créer un bot...",
    skills: [
      {
        title: "Python",
        icon: "fa-python",
        percent: "0.85",
        description: "L'un des languages les plus simples et des plus complets, je peux créer rapidement un script pour n'importe quelle utilisation, que ce soit pour traiter des données sur des pages web ou développer un logiciel de base.",
      },
      {
        title: "Bash",
        icon: "fas fa-terminal",
        percent: "0.85",
        description: "L'un des languages les plus simples et des plus complets, je peux créer rapidement un script pour n'importe quelle utilisation, que ce soit pour traiter des données sur des pages web ou développer un logiciel de base.",
      },
    ]
  }
]



const useStyles = makeStyles(theme => ({
  root: {

  },
  progressContainer: {
    width: 300,
    height: 300,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(7),
  },
  progressBar: {
    position: 'absolute',
  },
  skillContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  skillTitle: {
    textAlign: 'center',
    margin: theme.spacing(5),
    fontFamily: 'Azonix',
    color: "#444",
  },
  section: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Fluo',
  }

}));

const ProgressWrapper = (props) => {
  const classes = useStyles()

  return (
    <TrackVisibility offset={300}>
      <Typography variant="h4" className={classes.skillTitle}>{props.title}</Typography>
      <MyProgressBar {...props} />
    </TrackVisibility>
  )
}

const MyProgressBar = ({ isVisible, icon, percent }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [bar, setBar] = useState(null)
  const [id ] = useState(_uniqueId('prefix-'));

  useEffect(() => {
    if (bar && !isVisible) {
      bar.destroy();
      setBar(null)
    }
    if (!isVisible || bar)
      return
    if (bar) {
      bar.animate(percent || 1.0);  // Number from 0.0 to 1.0
      return
    }
    let temp_bar = new ProgressBar.Circle(`#${id}`, {
      color: theme.start,
      trailColor: '#eee',
      trailWidth: 6,
      duration: 1800,
      easing: 'easeInOut',
      strokeWidth: 6,
      from: { color: theme.start, a: 0 },
      to: { color: theme.end, a: 1 },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }
    });
    temp_bar.animate(percent || 1.0);  // Number from 0.0 to 1.0
    setBar(temp_bar)
  })


  return (
    <div id={id} key={1} className={classes.progressContainer} style={{visibility: isVisible ? 'visible': 'none'}} >
      <div className={classes.progressBar}>
        <i className={`fab ${icon} fa-10x fa-gradient`}
          style={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: 'transparent',
          }} ></i>
      </div>
    </div>
  )
}

const SkillsSection = ({ skill }) => {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h2" className={classes.title} >{skill.title}</Typography>
      <p>{skill.description}</p>
      <div className={classes.skillContainer} >
        {skill.skills.map(skill =>
          <ProgressWrapper
            icon={skill.icon}
            percent={skill.percent}
            title={skill.title}
          />
        )}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <Section title="Compétences">
      {skills.map(skill =>
        <SkillsSection
          skill={skill}
        />
      )}
    </Section>
  )
}

export default Skills