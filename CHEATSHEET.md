# Quick Collaboration Cheat Sheet 📋

## Essential Git Workflow

```bash
# 1. Start a new feature (sync local main first)
git checkout main
git pull origin main
git checkout -b feature/my-feature

# 2. Make changes, then...
git status                           # See what changed
git add .                            # Stage all changes
git commit -m "Clear message here"   # Save changes

# 3. Before pushing (get latest main updates)
git pull origin main                 # Pull main into your feature branch

# 4. Push your work
git push origin feature/my-feature

# 5. After PR is merged, start next feature
git checkout main
git pull origin main
git checkout -b feature/next-feature
git branch -d feature/my-feature     # Clean up old branch
```

---

## Branch Names

✅ **Good:**
- `feature/add-contact-form`
- `fix/navbar-mobile-bug`
- `update/team-photos`
- `style/improve-buttons`

❌ **Avoid:**
- `my-changes`
- `test`
- `final-final`
- `branch1`

---

## Commit Messages

✅ **Good:**
- `Add hero section to homepage`
- `Fix button alignment on mobile`
- `Update team member bios`
- `Remove unused CSS from shared file`

❌ **Avoid:**
- `stuff`
- `changes`
- `wip`
- `fixed it`

---

## CSS Naming

### Page-Specific
```css
.home-hero { }
.home-features { }
.about-team-grid { }
.about-mission-section { }
.contact-form { }
.contact-info-box { }
```

### Shared Components
```css
.btn { }
.btn-primary { }
.btn-secondary { }
.navbar { }
.navbar-link { }
.footer { }
.card { }
.card-title { }
```

### Rules
- Use `kebab-case` (not `camelCase`)
- Be descriptive (`.hero-section` not `.section1`)
- Prefix page-specific styles with page name
- Keep shared component names generic

---

## Before You Push Checklist

- [ ] Did you test in the browser?
- [ ] Did you pull latest from main?
- [ ] Is your commit message clear?
- [ ] Did you check mobile view?
- [ ] If touching shared files, did you communicate?

---

## PR Checklist

- [ ] Clear title and description
- [ ] Screenshots (if UI changes)
- [ ] Requested reviewers
- [ ] All changes tested locally
- [ ] Ready for feedback

---

## Quick Tips

🗣️ **Communicate** when touching shared files  
📦 **Keep PRs small** for faster reviews  
🧪 **Test locally** before pushing  
❓ **Ask questions** early and often  
🎉 **Celebrate** team wins  

---

## Common Git Commands

```bash
# View status
git status                    # What's changed?
git log --oneline            # Recent commits
git branch                   # List branches
git branch -a                # List all branches (including remote)

# Update code
git pull origin main         # Get latest from main
git fetch                    # Download remote changes

# Push code
git push origin <branch>     # Push your branch

# Clean up
git branch -d <branch>       # Delete local branch
git branch -D <branch>       # Force delete local branch

# Undo changes
git checkout -- <file>       # Discard changes in file
git reset HEAD <file>        # Unstage file
```

---

## Handling Merge Conflicts

If you get a merge conflict:

1. **Don't panic!** It's normal
2. Open the conflicted file(s)
3. Look for the conflict markers:
   ```
   <<<<<<< HEAD
   Your changes
   =======
   Someone else's changes
   >>>>>>> main
   ```
4. Decide which code to keep (or combine both)
5. Remove the conflict markers
6. Test that everything works
7. Commit the resolved conflict:
   ```bash
   git add .
   git commit -m "Resolve merge conflict in [filename]"
   ```
8. **Still stuck?** Ask for help!

---

## File Structure Quick Reference

```
├── index.html, about.html, contact.html
├── css/
│   ├── shared.css          ⚠️ Communicate before editing
│   ├── home.css
│   ├── about.css
│   └── contact.css
├── js/
│   ├── shared.js           ⚠️ Communicate before editing
│   ├── home.js
│   ├── about.js
│   └── contact.js
└── assets/
    ├── images/
    └── icons/
```

---

## Need More Help?

- 📖 Full details: [CONTRIBUTING.md](CONTRIBUTING.md)
- 💬 Ask in team chat
- 🤝 Request a code review
- 👥 Pair program with a teammate

**Remember: We're all learning together! 🚀**
