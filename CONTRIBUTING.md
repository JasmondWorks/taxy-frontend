# Contributing to taxy-frontend 🚀

Welcome to the team! This guide will help you contribute confidently to our project, whether you're just starting out or have some experience. We're all here to learn and build together.

---

## 📁 Project Folder Structure

Here's how our project is organized:

```
project-root/
│
├── index.html                    # Homepage
├── about.html                    # About page
├── contact.html                  # Contact page
│
├── css/
│   ├── shared.css                # Shared styles (navbar, footer, buttons, etc.)
│   │                             # ⚠️ Communicate before editing
│   ├── home.css                  # Homepage-specific styles
│   ├── about.css                 # About page-specific styles
│   └── contact.css               # Contact page-specific styles
│
├── js/
│   ├── shared.js                 # Shared components (navbar, utilities, etc.)
│   │                             # ⚠️ Communicate before editing
│   ├── home.js                   # Homepage-specific scripts
│   ├── about.js                  # About page-specific scripts
│   └── contact.js                # Contact page-specific scripts
│
├── assets/
│   ├── images/                   # All image files
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   └── ...
│   └── icons/                    # Icon files
│
├── README.md                     # Project overview
├── CONTRIBUTING.md               # This guide!
└── CHEATSHEET.md                 # Quick reference
```

### 🔑 Key Points

- **Shared files** (`shared.css`, `shared.js`): These affect the entire site. Always check with the team before making changes.
- **Page-specific files**: You can work on these more independently, but still communicate what you're doing.
- **Assets**: Keep images organized and use descriptive names (e.g., `hero-homepage.jpg` instead of `image1.jpg`).

---

## 🤝 How to Collaborate: Step-by-Step Workflow

### 1️⃣ Pick a Task

- Check the project board or issues list
- Comment on the issue to let others know you're working on it
- Ask questions if anything is unclear—there are no silly questions!

### 2️⃣ Create a Branch

Always work on a new branch, never directly on `main`.

**Starting a new feature?** First, make sure your local main is up-to-date:

```bash
# Switch to main
git checkout main

# Pull the latest changes from remote
git pull origin main

# Create and switch to a new branch
git checkout -b your-branch-name
```

**Branch Naming Examples:**
- `feature/add-contact-form`
- `fix/navbar-mobile-bug`
- `update/about-page-content`
- `style/improve-button-colors`

Use lowercase, hyphens, and descriptive names.

### 3️⃣ Work Locally

- Make your changes in small, focused chunks
- Test your changes in the browser frequently
- If you're editing shared files, give the team a heads-up in your communication channel

### 4️⃣ Commit Your Changes

Save your progress with clear commit messages.

```bash
# Check what you've changed
git status

# Add files to commit
git add .

# Commit with a clear message
git commit -m "Add contact form with validation"
```

**Good Commit Message Examples:**
- `Added hero section to homepage`
- `Fixed navbar alignment on mobile`
- `Updated about page team photos`
- `Improved button hover effects`
- `Removed unused CSS from shared.css`

**What to Avoid:**
- ❌ `fixed stuff`
- ❌ `updates`
- ❌ `asdf`
- ❌ `final version (for real this time)`

### 5️⃣ Get Latest Updates from Main

Before pushing, always sync with the latest code to avoid conflicts.

```bash
# Make sure your work is committed
git add .
git commit -m "Your commit message"

# Pull latest main directly into your feature branch
git pull origin main
```

This is the quick way to get updates while working on your feature. If there are conflicts, don't panic! Ask for help—it's a normal part of collaboration.

### 6️⃣ Push Your Branch

```bash
git push origin your-branch-name
```

### 7️⃣ Open a Pull Request (PR)

- Go to the GitHub repository
- Click "Pull Requests" → "New Pull Request"
- Select your branch
- Write a clear title and description:
  - What did you change?
  - Why did you change it?
  - Anything reviewers should pay attention to?
- Add screenshots if you changed the UI
- Request reviews from teammates

**PR Title Examples:**
- `Added contact form to contact page`
- `Fixed mobile navbar hamburger menu`
- `Updated team photos on about page`

### 8️⃣ Review Process

- Teammates will review your code
- They might ask questions or suggest changes—this is helpful, not critical!
- Make any requested changes and push them (they'll automatically update the PR)
- Be patient and respectful in discussions

### 9️⃣ Merge!

- Once approved, your PR will be merged into `main`
- Celebrate! 🎉 You just contributed to the project

### 🔟 Start Your Next Feature

After your PR is merged (or when starting any new feature):

```bash
# Switch to main
git checkout main

# Pull the latest changes to sync your local main
git pull origin main

# Now create your next feature branch
git checkout -b feature/next-feature

# Optional: Delete your old merged branch to keep things clean
git branch -d your-old-branch-name
```

**Important:** Always update your local `main` before creating a new branch. This ensures you're starting with the latest code from the team.

---

## 🎨 CSS Naming Guidelines

Keep our styles organized and predictable!

### Page-Specific Classes

Prefix classes with the page name when they're unique to that page.

**Examples:**
```css
/* home.css */
.home-hero { }
.home-features { }
.home-cta-button { }

/* about.css */
.about-team-grid { }
.about-mission-section { }

/* contact.css */
.contact-form { }
.contact-info-box { }
```

### Shared Component Classes

Use clear, generic names for reusable components.

**Examples:**
```css
/* shared.css */
.btn { }
.btn-primary { }
.btn-secondary { }

.navbar { }
.navbar-link { }

.footer { }
.footer-link { }

.card { }
.card-title { }
.card-body { }
```

### What to Avoid

❌ **Overly generic names in shared.css:**
- `.box` (too vague)
- `.content` (conflicts with page-specific styles)
- `.section` (not descriptive enough)

❌ **Mixing naming conventions:**
- Don't use both `camelCase` and `kebab-case` in the same project
- Stick with `kebab-case` (e.g., `.team-member` not `.teamMember`)

✅ **Good Practice:**
- Be descriptive: `.hero-section` over `.section1`
- Use semantic names: `.error-message` over `.red-text`
- Keep specificity low when possible

---

## 💡 Collaboration Tips

### Communication is Key
- **Working on shared files?** Drop a message in the team chat
- **Found a bug?** Report it and tag someone who can help
- **Stuck?** Ask for help early—don't struggle in silence
- **Making big changes?** Discuss with the team first

### Keep Changes Small
- One feature or fix per PR
- Smaller PRs = faster reviews = quicker merges
- If your task is big, break it into smaller pieces

### Test Before Pushing
- Open your HTML files in a browser
- Check on both desktop and mobile (use browser dev tools)
- Make sure nothing broke in other pages

### Be a Good Teammate
- Review others' PRs when you can
- Give constructive, kind feedback
- Celebrate wins together
- Learn from mistakes (yours and others')

### Stay Organized
- Keep your branch list clean
- Delete merged branches
- Pull from `main` regularly
- Commit often with clear messages

---

## 🆘 Getting Help

**Confused about Git?** Check the [cheat sheet](CHEATSHEET.md) or ask in the team chat.

**Merge conflict?** Don't force anything—ask for help!

**Not sure about your code?** Push it as a draft PR and ask for early feedback.

**Found a better way to do something?** Share it with the team!

---

## 🎯 Remember

- **Progress over perfection** — your first PR doesn't need to be flawless
- **Everyone was a beginner once** — ask questions freely
- **We're a team** — we succeed together, we learn together
- **Have fun!** — building things should be enjoyable

Happy coding! 💻✨
