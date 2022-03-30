import portfolio from './../../images/uba.png'
import fairvote from './projectImg/fairvote.png'

export const projects = [
    {
      id: 1,
      projectName: "FairVote",
      projectImg: fairvote,
      color: "fairvote",
      projectContent:"A ranked-choice voting system (RCV) which voters rank candidates by preference on their ballots. If no candidate wins a majority of first-preference votes, the candidate with the fewest first-preference votes is eliminated. The process is repeated until a candidate wins an outright majority.",
      technologies: ['TypeScript', 'React', 'AntDesign', ],
      githubLink: "https://github.com/barisarabasuren/fairvote",
      deployLink: "https://fairvote.netlify.app/"
    },
    {
      id: 2,
      projectName: "Face Recognition App",
      projectImg: "https://img.icons8.com/fluency/500/000000/brain.png",
      color: "faceDetaction",
      projectContent:"A web application that recognizes faces in the input pictures. Users can also login and see their rank among the all of the user based on how many pictures that they have detected.",
      technologies: ['Javascript', 'React','Node.js', 'Express.js', 'PostgreSQL', 'Clarifai API', 'Tachyons'],
      githubLink: "https://github.com/barisarabasuren/face_recognition_app",
      deployLink: "https://uba-face-recognition.herokuapp.com/"
    },
    {
      id: 3,
      projectName: "Car Listing App",
      projectImg: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/500/000000/external-car-camping-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
      color: "car",
      projectContent:"A full stack solo project that users can list, view and overview cars.",
      technologies: ['JavaScript', 'React', 'Node.js', 'express.js', 'MongoDB', 'AntDesign'],
      githubLink: "https://github.com/barisarabasuren/car_listing_server",
      deployLink: "https://car-listing-umut.netlify.app/"
    },
    {
      id: 4,
      projectName: "Url Shortener App",
      projectImg: "https://img.icons8.com/color/100/000000/scissors.png",
      color: "url",
      projectContent:"A full stack solo project that users can shorten urls, view previous urls and their stats.",
      technologies: ['TypeScript', 'React', 'Node.js', 'express.js', 'MongoDB', 'AntDesign'],
      githubLink: "https://github.com/barisarabasuren/url_shortener",
      deployLink: "https://whispering-mesa-59217.herokuapp.com/"
    },
    {
      id: 5,
      projectName: "My Portfolio Website",
      projectImg: portfolio,
      color: "portfolio",
      projectContent:"A high performance responsive website that is animated with scroll and hover for enriching user experience.",
      technologies: ['TypeScript', 'React', 'Bootstrap', 'EmailJS'],
      githubLink: "https://github.com/barisarabasuren/portfolio",
      deployLink: "https://umutarabasuren.netlify.app/"
    }
]
