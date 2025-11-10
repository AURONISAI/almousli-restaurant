# Contributing to Almousli Restaurang Website

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## 🤝 How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](../../issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/device information

### Suggesting Features

1. Check existing [Feature Requests](../../issues?q=is%3Aissue+label%3Aenhancement)
2. Create a new issue with:
   - Clear feature description
   - Use case/motivation
   - Proposed implementation (optional)

### Submitting Changes

1. **Fork the repository**
2. **Create a branch:** `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit:** `git commit -m "Add: your feature description"`
6. **Push:** `git push origin feature/your-feature-name`
7. **Create a Pull Request**

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new files
- Define proper types/interfaces
- Avoid `any` type when possible
- Use descriptive variable names

```typescript
// Good
interface MenuItem {
  title: LocalizedString;
  price: number;
  halal: boolean;
}

// Avoid
const data: any = ...
```

### React Components

- Use functional components
- Prefer named exports
- Use TypeScript for props

```typescript
// Good
interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  // ...
}
```

### Styling

- Use Tailwind CSS utility classes
- Follow existing design system
- Maintain RTL support
- Mobile-first approach

```tsx
// Good - Mobile-first, RTL-aware
<div className="px-4 md:px-8 text-right rtl:text-left">
  
</div>
```

### i18n

- Always provide translations for all 3 languages
- Use translation keys, not hardcoded text
- Test in both LTR and RTL modes

```tsx
// Good
const t = useTranslations('namespace');
<h1>{t('title')}</h1>

// Avoid
<h1>Almousli Restaurant</h1>
```

## 🧪 Testing

Before submitting:

1. **Build succeeds:**
   ```bash
   npm run build
   ```

2. **No linting errors:**
   ```bash
   npm run lint
   ```

3. **Test all languages:**
   - Arabic (RTL)
   - English
   - Swedish

4. **Test responsive design:**
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1024px+)

5. **Browser compatibility:**
   - Chrome
   - Firefox
   - Safari
   - Edge

## 📦 Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]
[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Build process or auxiliary tool changes

**Examples:**
```
feat: add catering inquiry form
fix: resolve RTL alignment issue in navigation
docs: update deployment guide
style: format code with Prettier
refactor: extract menu item component
perf: optimize 3D scene rendering
```

## 🌐 i18n Contributions

When adding new text:

1. Add to all 3 language files:
   - `messages/ar.json` (Arabic)
   - `messages/en.json` (English)
   - `messages/sv.json` (Swedish)

2. Use appropriate keys:
   ```json
   {
     "nav": {
       "home": "Home",
       "menu": "Menu"
     },
     "hero": {
       "title": "Welcome"
     }
   }
   ```

3. If you're not fluent in all languages:
   - Provide English version
   - Mark others as TODO
   - Request translation help in PR

## 🎨 Design Contributions

When modifying design:

1. **Maintain brand colors:**
   - Charcoal: #1E1E1C
   - Spice Red: #B23A2E
   - Gold: #D2A85B
   - Cream: #F5EFE6
   - Leaf Green: #3D7F64

2. **Keep accessibility:**
   - WCAG AA contrast ratios
   - Keyboard navigation
   - Screen reader support

3. **Mobile-first approach**

4. **Test RTL layout**

## 🏗️ Sanity Schema Changes

When modifying Sanity schemas:

1. **Don't break existing data**
2. **Add migration scripts if needed**
3. **Document changes in PR**
4. **Test with existing content**

## 📸 Adding Images

1. **Optimize before committing:**
   - Use TinyPNG or similar
   - Target <200KB per image
   - Proper dimensions

2. **Use descriptive names:**
   - `shawarma-plate-hero.jpg` ✓
   - `IMG_1234.jpg` ✗

3. **Add alt text** for accessibility

## 🚀 Performance

Ensure changes don't negatively impact:

- Lighthouse scores (target: ≥90)
- Bundle size
- Load time
- Core Web Vitals

## ✅ Pull Request Checklist

Before submitting PR:

- [ ] Code builds successfully
- [ ] No linting errors
- [ ] All languages tested
- [ ] Mobile responsive
- [ ] RTL layout works
- [ ] Accessibility maintained
- [ ] Documentation updated
- [ ] Commit messages follow convention
- [ ] Screenshots included (if UI changes)

## 🔄 Review Process

1. **Automated checks** must pass
2. **Code review** by maintainer
3. **Testing** on preview deployment
4. **Approval** and merge

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## 🙏 Thank You!

Your contributions help make Almousli's website better!

---

**Questions?** Open an issue or reach out to the maintainers.
