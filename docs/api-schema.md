# Data Schema

This document defines the Firestore document structures for the Saikia Codes platform.

## 💼 Jobs Collection (`/jobs`)
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | The job title (e.g., "Fullstack Developer") |
| `description` | string | Detailed job requirements and vision |
| `type` | string | Employment type: Full-time, Contract, Part-time, Internship, Commission Based |
| `active` | boolean | Visibility toggle for the careers page |
| `postedAt` | timestamp | Server timestamp when the job was created |
| `updatedAt` | timestamp | Server timestamp of last modification |

## 📝 Applications Collection (`/applications`)
| Field | Type | Description |
|-------|------|-------------|
| `jobId` | string | Reference to the job being applied for |
| `jobTitle` | string | Snapshot of the job title at time of application |
| `name` | string | Candidate full name |
| `email` | string | Candidate contact email |
| `phone` | string | Candidate phone number |
| `whatsapp` | string | Candidate WhatsApp number (Optional) |
| `portfolio` | string | URL to candidate portfolio or LinkedIn (Optional) |
| `instagram` | string | Candidate Instagram profile (Optional) |
| `otherSocial` | string | Other social media link (Optional) |
| `resumeUrl` | string | Firebase Storage URL to the candidate's resume |
| `pitch` | string | Why the candidate wants to join |
| `status` | string | Application status: `pending`, `reviewed`, `archived` |
| `appliedAt` | timestamp | Server timestamp of submission |

## 📦 Storage Structure
- `resumes/{jobId}/{timestamp}_{filename}`: Stores candidate resume files.

---
*Last Updated: April 2026*
