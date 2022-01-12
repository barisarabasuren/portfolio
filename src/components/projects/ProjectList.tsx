import portfolio from './../../images/logo_black.png'
import fairvote from './projectImg/fairvote.png'

export const projects = [
    {
      id: 2,
      projectName: "FairVote",
      projectImg: fairvote,
      color: "fairvote",
      projectContent:"A ranked-choice voting system (RCV) which voters rank candidates by preference on their ballots. If no candidate wins a majority of first-preference votes, the candidate with the fewest first-preference votes is eliminated. The process is repeated until a candidate wins an outright majority.",
      technologies: ['TypeScript', 'React', 'AntDesign', ],
      githubLink: "https://github.com/barisarabasuren/fairvote",
      deployLink: "https://fairvote.netlify.app/"
    },
    {
      id: 3,
      projectName: "Face Recognition App",
      projectImg: "https://img.icons8.com/fluency/500/000000/brain.png",
      color: "faceDetaction",
      projectContent:"A web application that recognizes faces in the input pictures. Users can also login and see their rank among the all of the user based on how many pictures that they have detected.",
      technologies: ['Javascript', 'React','Node.js', 'Express.js', 'PostgreSQL', 'Clarifai API', 'Tachyons'],
      githubLink: "https://github.com/barisarabasuren/face_recognition_app",
      deployLink: "https://uba-face-recognition.herokuapp.com/"
    },
    {
      id: 1,
      projectName: "My Portfolio Website",
      projectImg: portfolio,
      color: "portfolio",
      projectContent:"A high performance responsive website that is animated with scroll and hover for enriching user experience.",
      technologies: ['TypeScript', 'React', 'Bootstrap', 'EmailJS'],
      githubLink: "",
      deployLink: "https://umutarabasuren.netlify.app/"
    }
]
