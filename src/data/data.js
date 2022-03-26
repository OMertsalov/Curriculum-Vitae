export const contactData = {
  birthDate: "1997-06-10",
  location: "Kraków, Poland",
  phone: "791-030-224",
  email: "aleksandermertsalov@gmail.com",
  githubURL: "https://www.github.com/OMertsalov",
  linkedinURL: "https://www.linkedin.com/in/aleksandermertsalov",
  instagramURL: "https://www.instagram.com/mertsal0v/",
};

export const languages = [
  { name: "polish", progress: 100 },
  { name: "ukrainian", progress: 100 },
  { name: "russian", progress: 100 },
  { name: "english", progress: 90 },
];

export const summary =
  "Skilled, very motivated in improving myself. I'm a person with a good" +
  " amount of self-discipline and always setting myself very high" +
  " standards. 5 years of experience in developing java applications." +
  " 3 years of experience as front-end developer. Also good at solving" +
  " complex problems using algorithms and data structures." +
  " Mostly interested in developing web applications using React and Java." +
  " I'm also have experience on developing mobile apps using React Native" +
  " and have passed some Android Development courses on Udemy.";
export const education = [
  {
    name: "School",
    description: "Gymnasium",
    place: "Ukraine, Chernivtsi",
    period: { from: "", to: "2014" },
    additional: [],
  },
  {
    name: "Maria Curie-Skłodowska University (UMCS) ",
    description: "Mathematics, Physics and Computer Science",
    place: "Poland, Lublin",
    period: { from: "2016", to: "2019" },
    additional: [
      {
        name: "Bachelor's degree",
        description: "Subject: Computer Science",
        list: [],
      },
    ],
  },
];

export const workExperience = [
  {
    name: "Pro-Holding Sp. z o.o.",
    description: "Full Stack Java-React Developer",
    place: "Poland, Kraków",
    period: { from: "2020-01-01", to: "" },
    additional: [
      {
        name: "Technologies and Tools",
        description: "",
        list: [
          "JavaEE",
          "JSP/JSF/RichFaces",
          "Maven/Spring Framework/MVC",
          "REST",
          "SVN",
          "Javascript ES6+",
          "React",
          "React-Native",
          "PostgreSQL",
          "Linux",
          "SAP",
          "Eclipse",
        ],
      },
    ],
  },
];

export const skills = [
  {
    name: "JavaEE",
    description: "5 year's experience",
    img: "/images/java.png",
    type: "Web",
  },
  {
    name: "Maven/Spring Framework/MVC",
    description: "5 year's experience",
    img: "/images/spring.png",
    type: "Web",
  },
  {
    name: "JPA/Hibernate",
    description: "5 year's experience",
    img: "/images/JPA.jpg",
    type: "Web",
  },
  {
    name: "JSP/JSF/RichFaces",
    description: "2.5 year's experience",
    img: "/images/richfaces.png",
    type: "Web",
  },
  {
    name: "Javascript ES6+",
    description: "3 year's experience",
    img: "/images/js.png",
    type: "Web",
  },
  {
    name: "React",
    description: "2.5 year's experience",
    img: "/images/react.jpg",
    type: "Web",
  },
  {
    name: "REST",
    description: "2.5 year's experience",
    img: "/images/rest.png",
    type: "Web",
  },
  {
    name: "React-Native",
    description: "1 year experience",
    img: "/images/react-native.png",
    type: "Mobile",
  },
  {
    name: "Android Development",
    description: "Beginner",
    img: "/images/androidD.jpg",
    type: "Mobile",
  },
  {
    name: "MySql",
    description: "1 year experience",
    img: "/images/mysql.jpg",
    type: "SQL",
  },
  {
    name: "PostgreSQL",
    description: "2 years experience",
    img: "",
    type: "SQL",
  },
  {
    name: "Microsoft SQL Server",
    description: "Learned during studies",
    img: "/images/ms-sql-server.jpg",
    type: "SQL",
  },
  {
    name: "OpenCV",
    description: "Was used in my bachelor's project",
    img: "/images/opencv.png",
    type: "Technologies/Library's",
  },
  {
    name: "Tesseract OCR v4(Training process)",
    description: "Was used in my bachelor's project",
    img: "/images/tesseract.png",
    type: "Technologies/Library's",
  },
  {
    name: "Linux",
    description: "5 year's experience",
    img: "/images/linux.jpg",
    type: "Platform",
  },
  {
    name: "Windows",
    description: "",
    img: "/images/windows.png",
    type: "Platform",
  },
  {
    name: "Eclipse",
    description: "",
    img: "/images/eclipse.jpeg",
    type: "Tools",
  },
  {
    name: "Android Studio",
    description: "",
    img: "/images/android.jpg",
    type: "Tools",
  },
  {
    name: "Visual Studio",
    description: "",
    img: "/images/vscode.jpg",
    type: "Tools",
  },
  {
    name: "Lumira Designer(SAP)",
    description: "Creating SDK Extensions SVG/D3.js",
    img: "/images/lumira.jpg",
    type: "Tools",
  },
  {
    name: "Subversion",
    description: "",
    img: "/images/subversion.jpeg",
    type: "Tools",
  },
  {
    name: "Git/GitHub",
    description: "",
    img: "/images/git.png",
    type: "Tools",
  },
  {
    name: "Redmine",
    description: "",
    img: "/images/redmine.png",
    type: "Tools",
  },
  {
    name: "Jenkins",
    description: "",
    img: "/images/jenkins.png",
    type: "Tools",
  },
  {
    name: "Data structures && Algorithms in C++",
    description: "Learned during studies",
    img: "/images/algorithms.png",
    type: "Others",
  },
];

export const ownProjects = [
  {
    name: "Curriculum-Vitae",
    description:
      "Project was created to present myself and to get you familiarize with my Front-End skills." +
      ' It was made in "React" without any "Component Libraries" and was hosted using "Github Pages" service.' +
      " Also, there is a possibility to export it to PDF.",
    image: "",
    keywords: ["React"],
    year: 2022,
    link: "https://github.com/OMertsalov/Curriculum-Vitae",
  },
  {
    name: "Receipt's Reader",
    description:
      "Java, web application that i have developed during my studies." +
      " The main aim was to develop and implement methods for recognizing text" +
      ' on the images of till receipts . To recognize text from images was used "Tesseract" software.' +
      ' For image processing i have chosen the "OpenCv" library.' +
      " On Github you could also find a thesis(in Polish). The first chapter describes" +
      ' the optical character recognition process. The "Tesseract" software is also introduced there.' +
      " The second chapter is devoted to neural networks. It describes the structure of the neural network" +
      ' and the process of its operation. In addition, that chapter introduces "LSTM" recursive networks,' +
      ' the type of which is used in the "Tesseract" software. The third chapter presents an application' +
      " for recognizing data from till receipts. In this chapter i have described the proces of training" +
      ' "Tesseract" neural network, the process of image preprocessing using the "OpenCv" library' +
      " and the process of identifying individual data from the receipt. The identification is performed" +
      " on the basis of the implemented regular expression. The effectiveness of the application is presented" +
      " in the form of test results.",
    image: "/images/receipt-reader.png",
    keywords: [
      "OCR",
      "Optical Character Recognition",
      "Tesseract",
      "Neural networks",
      "Recurrent neural networks",
      "LSTM",
      "till receipts",
      "text segmentation",
      "Java",
      "MVC",
      "OpenCv",
      "Regular expressions",
    ],
    year: 2021,
    link: "https://github.com/OMertsalov/BachellorDegree",
  },
  {
    name: "E-Finance",
    description:
      "Java EE, web application. Main idea, is to keep track own" +
      ' expenses statistics. There are such categories as "Food",' +
      ' "Transport","Clothes" , etc. One of the useful features,' +
      " setting month/year limit, should help user's to save their money." +
      " E-finance show, what amount was spent and how much is left." +
      " Spring email is used to restore forgotten password's and send to everyone week statistics.",
    image: "/images/e-finanse.png",
    keywords: [
      "Java",
      "MVC",
      "Spring-boot",
      "Spring-Data",
      "Spring-Security",
      "Spring-Email",
      "Thymeleaf",
      "MySQL",
    ],
    year: 2019,
    link: "https://github.com/OMertsalov/E-Finance",
  },
  {
    name: "Dobble",
    description:
      'Java SE multiplayer game. 52 card\'s, related to "Shopping"' +
      " , allow you to play with 5 players in one session. Every user," +
      " could choose ip-version to connect with and set up own Nickname." +
      ' Whole project is composed of "Server", "Client with GUI" ,"Cards"' +
      ' and "Protocol" that was specifically designed for it.',
    image: "/images/dobble.png",
    keywords: [
      "GUI",
      "Thread's Synchronization",
      "Client/Server architecture",
      "Own Protocol Implementation",
    ],
    year: 2019,
    link: "https://github.com/OMertsalov/Dobble",
  },
];

export const agreement =
  "I hereby agree for processing the following personal information" +
  " strictly for recruitment purposes in accordance with the regulation regarding the protecting-on data" +
  " passed on the following date: 29.08.97r. Dz. U. nr 133 poz. 883";

export const pdfLink =
  "https://drive.google.com/file/d/1HliI1lr5l_j0Mw2F7ys5d79nk8v2JRft/view?usp=sharing";
