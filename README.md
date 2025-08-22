# 📘 Class Practice Repository

Welcome to the **Class Practice Repository**! This repo will contain all the code, examples, mini-assignments, and practice work written during classes. It’s a single place to store, review, and track progress.

> **Note:** All official **class documents** (slides, notes, references) will be available on **Google Classroom**.

---

## ✨ At a Glance

* Class practice code
* Example snippets explained in class
* Mini assignments / exercises
* Experimentation & drafts
* (Docs live on Google Classroom)

---

## ✅ Prerequisites

* **Git** installed: `git --version`
* A code editor (e.g., **VS Code**)
* Programming languages/tools used in class (install as needed):

  * **Node.js** for JavaScript/TypeScript
  * **Python** (if we do Python lessons)
  * **Java / JDK** or **C++** compilers (if needed)

---

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone <YOUR-REPO-URL>
   cd <your-repo-folder>
   ```
2. **Open in your editor** (e.g., VS Code)

   ```bash
   code .
   ```
3. **Create your first class folder** (see structure below) and start coding.
4. **Commit & push** your changes

   ```bash
   git add .
   git commit -m "Add: first class practice"
   git push origin main
   ```

---

## 🗂️ Recommended Folder Structure

```
.
├── README.md
├── 2025-08-22-intro/
│   ├── README.md                # Notes for this class session
│   ├── js/
│   │   └── basics.js
│   ├── python/
│   │   └── basics.py
│   └── assets/
│       └── screenshot.png
├── 2025-08-24-arrays-loops/
│   ├── README.md
│   └── js/
│       └── arrays.js
└── .gitignore
```

---

## ➕ Add a New Class/Session (Step‑by‑Step)

1. **Create a folder** using date + short topic:

   ```bash
   mkdir 2025-08-24-arrays-loops && cd $_
   ```
2. **Add a mini README** for that class (template below):

   ```markdown
   # Class: Arrays & Loops (2025-08-24)

   ## Covered
   - Arrays basics
   - For/While loops
   - Common pitfalls

   ## Snippets
   - See `js/arrays.js`

   ## Homework / Practice
   - Solve 5 array problems from sheet

   ## Notes
   - Any reminders here
   ```
3. **Add code files** inside language folders (create if missing), e.g. `js/`, `python/`, `java/`.
4. **Stage, commit, and push**

   ```bash
   git add .
   git commit -m "Add: 2025-08-24 arrays & loops notes + code"
   git push origin main
   ```

---

## ▶️ Run the Code (Common Languages)

**JavaScript / Node.js**

```bash
node path/to/file.js
```

**TypeScript** (transpile or use ts-node)

```bash
npx ts-node path/to/file.ts
```

**Python**

```bash
python path/to/file.py
```

**Java**

```bash
javac Main.java && java Main
```

**C++**

```bash
g++ main.cpp -o app && ./app
```

> Tip: If a class uses a specific tool (like `npm`, `pip`, or a framework CLI), add a short note in that class folder’s `README.md`.

---

## 🧭 Naming Conventions

* **Folders:** `YYYY-MM-DD-topic` (e.g., `2025-08-24-arrays-loops`)
* **Files:** `lowercase-with-dashes` or `camelCase` (consistent per language)
* **Images/Assets:** put inside an `assets/` folder inside that class folder

---

## 🔀 Git Workflow (Solo)

1. Pull latest changes

   ```bash
   git pull origin main
   ```
2. Make edits / add files
3. Commit with clear messages

   ```bash
   git add .
   git commit -m "Add: <date-topic> <what you added>"
   git push origin main
   ```

**Configure your Git identity once (if needed):**

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## 🤝 Contributions

This repo is primarily for personal/class use. If someone wants to contribute:

1. Fork the repo
2. Create a branch
3. Open a Pull Request with a clear description

---

## 🧾 Google Classroom

All **official class documents** (slides, notes, PDFs, references) are posted on **Google Classroom**.

* **Classroom Link:** <PASTE-YOUR-GOOGLE-CLASSROOM-LINK-HERE>
* Check there for announcements, homework sheets, and grades.

---

## 🧰 Useful Tips

* Keep each class in its own folder to stay organized.
* Add a short `README.md` inside each class folder for quick recall later.
* Don’t commit secrets or private keys (use `.gitignore`).
* If you try new libraries, note the install commands in that class `README.md`.

---

## 🐞 Troubleshooting

* **"Permission denied" or run issues:** ensure you’re in the right folder and the file exists.
* **Node.js errors:** check Node version; run `node -v`.
* **Python version:** `python --version` (or `python3`).
* **Git push blocked:** run `git pull --rebase origin main` then push again.

---

## ❓ FAQ

**Q: Where are the class slides and notes?**
A: On **Google Classroom** (link above).

**Q: Can I organize by week instead of by date?**
A: Yes! Keep it consistent (e.g., `week-01-intro`).

**Q: Can I mix languages in the same class folder?**
A: Yes. Use subfolders like `js/`, `python/`, `java/` etc.

---

## 🪪 License

Choose a license if you plan to make this public (e.g., MIT). Add a `LICENSE` file or update this section.

---

## 📬 Contact

For questions, reach out during class or via Google Classroom comments.

---

## (Optional) Badges

> Replace `USERNAME/REPO` with your GitHub repo path.

[![Stars](https://img.shields.io/github/stars/USERNAME/REPO.svg)](https://github.com/USERNAME/REPO/stargazers)
[![Forks](https://img.shields.io/github/forks/USERNAME/REPO.svg)](https://github.com/USERNAME/REPO/network/members)
[![Issues](https://img.shields.io/github/issues/USERNAME/REPO.svg)](https://github.com/USERNAME/REPO/issues)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
