export const Bio = {
  name: "Sijo O.J",
  roles: [
    "Programmer",
    "Frontend Developer"
  ],
  description:
    "If I join a company, I can complete the work on time and give 100%.I am able to complete any task cheerfully andaccurately and on time.",
  github: " https://github.com/sijooj",
  resume:
    "https://drive.google.com/file/d/10n73rB4agC8XadtIwOfX-4z2sAI5K9Bn/view",
  linkedin: "#",
  insta: "#",
  facebook: "#",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
      },

      {
        name: "Next Js",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "WordPress",
      },

    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "Git",
      },
      {
        name: "GitHub",
      },
      {
        name: "VS Code",
      },
      {
        name: "Postman",
      },
      {
        name: "Adobe XD",
      },
      {
        name: "Figma",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,

    role: "Frontend Developer",
    company: "CRYOFLAME TECHNOLOGIES",
    date: "Starting Date -> 2022 April-18",

  },
  {
    id: 1,

    role: "Frontend Developer",
    company: "WARMONKS SOFTWARE COMPANY",
    date: "Starting Date -> 2024 January-2",

  },
];

export const education = [
  {
    id: 0,
    school: "GOVT.R.S.R.V.H.S.S,VELUR, THRISSUR",
    date: "2013",
    degree: "Primary & High School",
  },
  {
    id: 1,
    school: "ASSISI ENGLISH HIGHER SECONDARY SCHOOL,THALAKKOTTUKARA",
    date: "2017",
    degree: "Plus Two Science",
  },
  {
    id: 2,
    school: "CHINMAYA MISSION COLLEGE, KOLAZHY",
    date: "2020",
    degree: "Bachelor of Computer Application(BCA)",
  },
  {
    id: 3,
    school: "LCC COMPUTER EDUCATION",
    date: "2021",
    degree: "Diploma in Web designing & Development",
  }
];

export const projects = [
  {
    id: 11,
    title: <a href="https://warmonks.com/" target="blank" style={{ textDecoration: "none", color: "white" }}>DecisionHub</a>,
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    category: "HTML",
  },
  {
    id: 9,
    title: "Trackify",
    date: "Jun 2023 - Jul 2023",
    description:
      "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: [
      "Docker",
      "AWS",
      "DuckDNS",
      "Eslint",
      "Husky",
      "CI/CD",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/rishavchanda/Trackify",
    webapp: "https://trackify-management.netlify.app/",
  },
  {
    id: 0,
    title: "Podstream",
    date: "Apr 2023 - May 2023",
    description:
      "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
    image:
      "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "web app",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
    member: [
      {
        name: "Rishav Chanda",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },
  {
    id: 1,
    title: "Vexa",
    date: "Oct 2022 - Jan 2023",
    description:
      "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
    image:
      "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "NodeMailer",
    ],
    category: "web app",
    github: "https://github.com/rishavchanda/Project-Management-App",
    webapp: "https://vexa-app.netlify.app/",
  },
  {
    id: 2,
    title: "Brain Tumor Detection",
    date: "Jan 2023 - Mar 2023",
    description:
      "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
    image:
      "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
    webapp: "https://brain-tumor.netlify.app/",
    member: [
      {
        name: "Rishav Chanda",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },
  {
    id: 3,
    title: "Buckoid",
    date: "Dec 2021 - Apr 2022",
    description:
      "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
    image:
      "https://camo.githubusercontent.com/3ad28aa710d18525f1fc87de056ed53c706d09979589bfd5a773df36653bad38/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
    tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
    category: "android app",
    github: "https://github.com/rishavchanda/Buckoid-Android-App",
    webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  },
  {
    id: 10,
    title: "Job Finding App",
    date: "Jun 2023 - Jul 2023",
    description:
      "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
    image:
      "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
    tags: ["React Native", "JavaScript", "Axios"],
    category: "android app",
    github: "https://github.com/rishavchanda/Job-finder-App",
    webapp: "https://github.com/rishavchanda/Job-finder-App",
  },
  {
    id: 4,
    title: "Whatsapp Clone",
    date: "Jul 2021",
    description:
      "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
    tags: ["React Js", "Firebase", "Firestore", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
    webapp: "https://whatsapp-clone-rishav.web.app",
  },
  {
    id: 5,
    title: "Todo Web App",
    date: "Jun 2021",
    description:
      " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
    image:
      "https://camo.githubusercontent.com/84ac6ab6f378348ef28d8184062b7e9e3511a1252ae3966eaa49e8e998f732a7/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
    tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Todo-Web-App",
    webapp: "https://rishav-react-todo.netlify.app/",
  },
  {
    id: 6,
    title: "Breaking Bad",
    date: "Jun 2021",
    description:
      "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
    image:
      "https://camo.githubusercontent.com/937774368308a82419f53dd6eeb4a8675780e119636488b4e3cfe5d34859a72a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
    tags: ["React Js", "API", "Axios", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Breaking-Bad",
    webapp: "https://breaking-bad-webapp.netlify.app",
  },
  {
    id: 7,
    title: "Quiz App",
    date: "Dec 2020 - Jan 2021",
    description:
      "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
    tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
    category: "android app",
    github: "https://github.com/rishavchanda/Quiz-Earn",
    webapp: "https://github.com/rishavchanda/Quiz-Earn",
  },
  {
    id: 8,
    title: "Face Recognition",
    date: "Jan 2021",
    description:
      "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
    image:
      "https://dontrepeatyourself.org/media/face-recognition-with-python-dlib-and-deep-learning_cezKZBj.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
    webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  },
];


