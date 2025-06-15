export interface HCardProps {
  image: string;
  title: string;
  desc: string;
  skills: string[];
  github: string;
  liveUrl?: string;
  type: string;
}

export const Projects: HCardProps[] = [
  {
    title: "exp-mongo-auth",
    image: "/images/expauth.png",
    desc: "exp-mongo-auth is a prebuilt authentication solution for Node.js with Express and MongoDB, offering user registration, login, JWT-based sessions, password reset, email verification, and profile management, with optional domain restrictions for controlled signups.",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Auth",
    ],
    github: "https://github.com/Dev-shrm07/exp-mongo-auth",
    liveUrl: "https://www.npmjs.com/package/exp-mongo-auth",
    type: "wd",
  },
  {
    title: "SkyNetMEC",
    image: "/images/skynet.png",
    desc: "An autonomous UAV-based Multi Edge Computing model built using the MADDPG algorithm for task offloading and trajectory planning. It optimizes task execution by UAVs in a custom environment with UE clusters and fog devices.",
    skills: [
      "Reinforcement Learning",
      "Tensorflow",
      "OpenAI Gymnasium",
      "Deep Learning",
      "Networking",
      "Python",
    ],
    github: "https://github.com/Dev-shrm07/SkyNetMEC",
    type: "ml",
  },
  {
    title: "CacheBase",
    image: "/images/cachebase.png",
    desc: "CacheBase is a high-performance, Redis-compatible distributed key-value store with built-in Raft consensus for strong consistency and fault tolerance. It supports streams, concurrent clients, TTL, and persistent storage — all with native support for blocking reads and cluster-safe operations. Designed for high availability and developer-friendly usage, it's perfect for real-time distributed systems.",
    skills : [
      "Python",
      "RPC",
      "TCP",
      "Distributed Systems" 
    ],
    github: "https://github.com/Dev-shrm07/CacheBase",
    type:"wd"
  },
  {
    title: "PixelStore",
    image: "/images/pixelstore.png",
    desc: "An online peer-to-peer marketplace for stock images, built wiht Stripe integration. Where, users can buy and sell images directly with each other, with features such as account creation, profile editing, buying and creating posts, and more",
    skills: [
      "React.js",
      "Node.js",
      "Typescript",
      "MongoDB",
      "Stripe.js",
      "Express.js",
    ],
    github: "https://github.com/Dev-shrm07/Pixel-Store-Frontend",
    liveUrl: "https://pixelstore.pics/",
    type: "wd",
  },
  {
    title: "Perceptron.CPP",
    image: "/images/perceptron.png",
    desc: "A single perceptron from scratch in C++, utilizing ReLU activation function and gradient descent for training. The perceptron is trained on an income dataset to predict outcomes based on input features.",
    skills: ["C++"],
    github: "https://github.com/Dev-shrm07/Perceptron.cpp",
    type: "ml",
  },
  {
    title: "SceneForge AI",
    image: "/images/sceneforge.png",
    desc: "A web-based AI image generation tool that allows users to create stunning visuals by selecting from various artistic styles and providing a description of their desired scene, using Stable Diffusion 3.5 Large.",
    skills: ["Next.js", "TypeScript", "Huggingface"],
    github: "https://github.com/Dev-shrm07/SceneForge",
    liveUrl: "https://sceneforge.site/",
    type: "wd",
  },
  {
    title: "EmoSense",
    image: "/images/emosense.png",
    desc: "A Flask web application that utilizes computer vision to detect emotions in a person's face. The emotion classification model is implemented using a CNN, trained on the FER 2013 dataset.",
    skills: ["OpenCV", "Keras", "Flask", "Python"],
    github: "https://github.com/Dev-shrm07/EmoSense",
    type: "ml",
  },
  {
    title: "GPT-Tokenizer",
    image: "/images/gpt.png",
    desc: "This is an implentation of the tokenizer of the famous LLM, GPT. This Project contains the training, encoding and decoding for the tokenizer along with the tuning of hyperparameters like vocabular size, simplifying text chunks using regex",
    skills: ["Python", "Tik-Token", "Regex"],
    github: "https://github.com/Dev-shrm07/GPT-Tokenizer",
    type: "ml",
  },

  {
    title: "UAV-path-planning-for-optimum-coverage",
    image: "/images/uav.png",
    desc: "An implementation of the Deep Deterministic Policy Gradients (DDPG) algorithm for planning the trajectory of a Unmanned Aerial Vehicle (UAV) in order to achieve optimal coverage of Iot devices in a UAV based network.",
    skills: ["Python", "Keras", "TensorFlow"],
    github:
      "https://github.com/Dev-shrm07/UAV-path-planning-for-optimum-coverage",
    type: "ml",
  },
  {
    title: "Brick Breaker Game",
    image: "/images/bb.png",
    desc: "A web based Brick Breaker Game built using Javascript, can be played in both mobile and desktop.",
    skills: ["JavaScript", "Canvas"],
    github: "https://github.com/Dev-shrm07/Brick-Breaker-Game/",
    liveUrl: "https://bbbbbbkjnckl.netlify.app/",
    type: "wd",
  },

  {
    title: "MeetX",
    image: "/images/meetx.png",
    desc: "A Simple Crud App to manage meetings and events, built using the MERN stack along with user authentication.",
    skills: ["React.js", "Node.js", "Typescript", "MongoDB", "Express.js"],
    github: "https://github.com/Dev-shrm07/MEETX_CODE/",
    liveUrl: "https://meetxksh.netlify.app/",
    type: "wd",
  },
];
