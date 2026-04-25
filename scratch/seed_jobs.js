const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');

// PASTE YOUR FIREBASE CONFIG HERE OR IT WILL ATTEMPT TO USE DEFAULTS
// Since I don't have the full config string easily accessible in a copy-paste format for Node,
// I will provide a script that uses the existing src/firebase.js if possible, 
// but Node can't easily import ES modules without setup.
// I'll just provide the data structure and instructions.

/*
  Firestore Collection: "jobs"
  Document Structure:
  {
    title: "AI Solutions Architect",
    description: "Lead the design and implementation of autonomous agentic workflows for enterprise clients.",
    type: "Full-time",
    active: true,
    postedAt: serverTimestamp()
  }
*/

const sampleJobs = [
  {
    title: "AI Solutions Architect",
    description: "Lead the design and implementation of autonomous agentic workflows for enterprise clients. Experience with LangChain, AutoGen, and vector databases required.",
    type: "Full-time",
    active: true
  },
  {
    title: "LLM Fine-tuning Specialist",
    description: "Optimize open-source models for specific domain tasks. Deep understanding of PEFT, LoRA, and quantization techniques is essential.",
    type: "Contract",
    active: true
  },
  {
    title: "Frontend Futurist (React/Gatsby)",
    description: "Craft stunning, high-performance interfaces for our AI-driven platforms. Must have a keen eye for minimalistic and premium design aesthetics.",
    type: "Part-time",
    active: true
  }
];

console.log("To seed these jobs, go to your Firebase Console -> Firestore.");
console.log("Create a collection named 'jobs' and add the documents manually or use the Firebase Admin SDK.");
console.log("Current structure expected by the app:");
console.table(sampleJobs);
