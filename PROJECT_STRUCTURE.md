# Project Structure

## Project Tree

```text
mihir-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroScene.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── SectionWrapper.jsx
│   ├── data/
│   │   └── index.js
│   ├── hooks/
│   │   └── index.js
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── {components,sections,assets,data,hooks,utils}/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

Note: `src/{components,sections,assets,data,hooks,utils}` is a literal directory currently present in the repo.

## Routes And Pages

This is a single-page React app with no `react-router` configuration.

```text
Route: /
Entry: src/main.jsx -> src/App.jsx
```

In-page sections navigated with `react-scroll`:

```text
#home           -> Hero
#about          -> About
#skills         -> Skills
#projects       -> Projects
#achievements   -> Achievements
#contact        -> Contact
```

## Component Dependency Map

```text
main.jsx
└── App

App
├── CustomCursor
├── ScrollProgress
├── Navbar
├── Hero
├── About        (lazy)
├── Skills       (lazy)
├── Projects     (lazy)
├── Achievements (lazy)
├── Contact      (lazy)
└── Footer

Navbar
└── uses hooks/useActiveSection

ScrollProgress
└── uses hooks/useScrollProgress

Footer
└── uses data/personalInfo

Hero
├── HeroScene    (lazy)
└── uses data/personalInfo

About
├── SectionWrapper
├── SectionHeader
└── uses data/personalInfo

Skills
├── SectionWrapper
├── SectionHeader
└── uses data/skills

Projects
├── SectionWrapper
├── SectionHeader
├── ProjectCard (local component)
└── uses data/projects

Achievements
├── SectionWrapper
├── SectionHeader
├── AchievementCard (local component)
└── uses data/achievements

Contact
├── SectionWrapper
├── SectionHeader
└── uses data/personalInfo

SectionWrapper
├── exports SectionWrapper
├── exports SectionHeader
└── uses hooks/useInView

CustomCursor
└── standalone

HeroScene
└── standalone 3D canvas component

hooks/index.js
├── useScrollProgress
├── useActiveSection
├── useMousePosition
└── useInView

data/index.js
├── personalInfo
├── skills
├── projects
└── achievements
```
