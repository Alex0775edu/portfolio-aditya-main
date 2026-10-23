# Aditya Kumar — 3D Personal Portfolio & SkillSum Innovations

A cinematic, interactive 3D portfolio and entrepreneurial showcase engineered for **Aditya Kumar** — Full Stack Web Developer and Founder of **SkillSum Innovations**.

Built with **React**, **TypeScript**, **Vite**, **Three.js**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🌟 Highlights & Key Features

1. **Interactive 3D Technology Centerpiece**:
   - WebGL Three.js interactive core featuring an icosahedron geodesic lattice, glowing inner nucleus, orbital toruses, and an interactive particle constellation.
   - Smooth damped mouse tracking and responsive window resize handling.
   - Automatic fallback for devices with reduced motion preferences (`prefers-reduced-motion`) or low-power WebGL.

2. **Standout SkillSum Innovations Founder Showcase**:
   - Seamlessly transitions from the dark cinematic portfolio into SkillSum's authentic brand palette (`#556b2f` forest green, `#a8d5a2` mint/sage, `#f8e6a8` warm cream).
   - Real, authentic SkillSum logo assets downloaded directly from the live platform.
   - Interactive simulated browser mockup of [skillsum.in](https://skillsum.in).
   - Six verified services with official descriptions:
     - *Website Development*
     - *Software & Management Systems*
     - *Embedded Systems & IoT*
     - *Video Editing & Production*
     - *SEO & Digital Marketing*
     - *AI Solutions & Maintenance*
   - Honest, grounded founder narrative covering vision, development, service unification, and live deployment.

3. **Authentic Identity & Verified Information**:
   - Uses verified credentials directly from `Aditya_Kumar_Resume.pdf` and real photography (`aditya.jpg`).
   - Verified location: *Ballia, Uttar Pradesh, India*.
   - Direct download action for `Aditya_Kumar_Resume.pdf`.

4. **Featured Projects & Management Systems**:
   - **SkillSum Innovations Official Platform**: Live company web portal ([skillsum.in](https://skillsum.in)).
   - **Education Management System (EMS)**: Centralized academic syllabus, notes distribution, and student records ([GitHub](https://github.com/Alex0775edu/EMS-AADITECH) | [Live Demo](https://aaditech2.pythonanywhere.com)).
   - **Student Internship Management System**: Automated status tracking and reporting ([Live System](https://aaditech.pythonanywhere.com/)).
   - **Attendance Management System**: Rapid daily attendance recording and analytical summaries ([Live App](https://attendance-system-five-fawn.vercel.app/)).
   - Deep-dive interactive modal dialog for inspecting architecture, problem statements, and solutions for every project.

5. **Technical Skills Taxonomy**:
   - Categorized into *Frontend*, *Backend & Programming*, *Database*, and *Tools & Productivity*.
   - Filter tabs, verified proficiency indicators (without fake percentage numbers), and technology icons.

6. **Academic Qualifications Timeline**:
   - Diploma in Computer Science and Engineering — Mahamaya Polytechnic of Information Technology, Dhanapur Chandauli.
   - Advanced Diploma in Computer Applications (ADCA) — EDGE Education (2023–2024).
   - Intermediate (12th Grade) — UP Board (2024).
   - High School (10th Grade) — UP Board (2022).

7. **Direct Contact Hub**:
   - Quick-action buttons: *Copy Email* (with clipboard toast), *Call Directly* (`+91-9023208267`), *WhatsApp Chat*, and verified profile links.
   - Validated message form that generates direct `mailto:` parameters without misleading fake submission popups.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **3D Graphics**: Three.js
- **Styling**: Tailwind CSS v4 + PostCSS
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Effects**: Custom glowing cursor (auto-disabled on touch and reduced motion)

---

## 🚀 Running the Project Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio-aditya-main/
├── dist/                          # Production build output
├── legacy_v1/                     # Preserved backup of original files
├── public/                        # Static assets (Resume PDF, real photos, logos)
│   ├── assets/
│   │   └── skillsum/              # Official SkillSum logo assets
│   ├── aditya.jpg                 # Verified authentic photo
│   └── Aditya_Kumar_Resume.pdf    # Verified resume document
├── src/
│   ├── components/
│   │   ├── About.tsx              # Identity, pillars, and bio narrative
│   │   ├── BrandIcons.tsx         # Crisp SVG brand icons (GitHub, LinkedIn, etc.)
│   │   ├── Contact.tsx            # Validated form and communication actions
│   │   ├── CustomCursor.tsx       # Glowing cursor with touch detection
│   │   ├── Education.tsx          # Clean academic timeline
│   │   ├── Footer.tsx             # Brand footer with dynamic year
│   │   ├── Hero.tsx               # Cinematic hero section with real portrait badge
│   │   ├── Hero3D.tsx             # Three.js interactive 3D centerpiece
│   │   ├── Navbar.tsx             # Responsive navbar with mobile drawer
│   │   ├── ProjectModal.tsx       # Deep-dive architecture modal
│   │   ├── Projects.tsx           # Featured systems and case studies
│   │   ├── Skills.tsx             # Filterable skills matrix
│   │   └── SkillSumShowcase.tsx   # Standout SkillSum Innovations experience
│   ├── data/
│   │   └── portfolioData.ts       # Central source of truth for verified data
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Global styles, scrollbar, reduced motion
│   └── main.tsx                   # React root mount
├── index.html                     # Entry HTML with full SEO & Open Graph
├── package.json                   # Project scripts and dependencies
├── postcss.config.js              # PostCSS with Tailwind v4
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript compiler configuration
└── vite.config.ts                 # Optimized Vite configuration with manual chunks
```

---

Designed with curiosity. Built with purpose.
&copy; Aditya Kumar (AaDiTeCh)
