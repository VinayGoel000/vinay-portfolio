# ProfileImage Component Documentation

## Overview

The `ProfileImage` component is a reusable, animated image display component built with React and Framer Motion. It provides multiple display variants, gradient glow effects, and smooth animations suitable for professional portfolios.

**Location:** `src/components/ProfileImage.jsx`

---

## Props

### `src` (Required)
**Type:** `string`
**Description:** Path to the image file
**Example:**
```jsx
src="/assets/images/vinay-front.jpeg"
```

### `alt` (Required)
**Type:** `string`
**Description:** Alternative text for accessibility
**Example:**
```jsx
alt="Vinay - Full Stack Developer"
```

### `variant` (Optional)
**Type:** `'circular' | 'rounded' | 'full' | 'side'`
**Default:** `'circular'`
**Description:** Display variant and sizing style

| Variant | Dimensions | Border | Use Case |
|---------|-----------|--------|----------|
| `circular` | 256px-288px | Full round | Headshots, profile pictures |
| `rounded` | 384px width | 24px | Full body, medium shots |
| `full` | 100% width | 16px | Large features, hero images |
| `side` | 320px width | 16px | Sidebar, profile views |

**Example:**
```jsx
variant="circular"
// or
variant="rounded"
```

### `animate` (Optional)
**Type:** `boolean`
**Default:** `true`
**Description:** Enable/disable entrance animations

**Example:**
```jsx
animate={true}    // Enable animations
animate={false}   // Static, no animations
```

### `delay` (Optional)
**Type:** `number` (0-1)
**Default:** `0`
**Description:** Animation delay in seconds (stagger timing)

**Example:**
```jsx
delay={0}      // Immediate
delay={0.3}    // 300ms delay
delay={0.6}    // 600ms delay (maximum)
```

### `glowColor` (Optional)
**Type:** `'blue' | 'purple' | 'cyan' | 'combined'`
**Default:** `'combined'`
**Description:** Background glow effect color gradient

| Color | Hex Code | Opacity | Use Case |
|-------|----------|---------|----------|
| `blue` | #38BDF8 | 0.25 | Professional, tech-focused |
| `purple` | #A855F7 | 0.25 | Creative, premium |
| `cyan` | #22D3EE | 0.25 | Bright, energetic |
| `combined` | Blue + Purple | Mixed | Balanced, sophisticated |

**Example:**
```jsx
glowColor="combined"  // Default (recommended)
glowColor="blue"      // Tech blue
glowColor="purple"    // Creative purple
glowColor="cyan"      // Bright cyan
```

### `className` (Optional)
**Type:** `string`
**Default:** `''`
**Description:** Additional Tailwind CSS classes
**Supported Classes:**
- `drop-shadow-*` - Shadow effects
- `border-*` - Border styles
- `blur-*` - Blur filters
- Any Tailwind utility class

**Example:**
```jsx
className="drop-shadow-2xl"
// or multiple
className="drop-shadow-2xl border-4 border-white/20"
```

---

## Usage Examples

### Basic Circular Image (Hero)
```jsx
import ProfileImage from '../components/ProfileImage.jsx'

export default function Hero() {
  return (
    <section>
      <ProfileImage
        src="/assets/images/vinay-front.jpeg"
        alt="Vinay"
        variant="circular"
        animate={true}
        delay={0.3}
        glowColor="combined"
      />
    </section>
  )
}
```

### Portrait Image (About)
```jsx
export default function About() {
  return (
    <div>
      <ProfileImage
        src="/assets/images/vinay-full.jpeg"
        alt="Vinay - Full Body"
        variant="rounded"
        animate={true}
        delay={0.2}
        glowColor="blue"
      />
    </div>
  )
}
```

### Side Profile (Skills)
```jsx
export default function Skills() {
  return (
    <aside>
      <ProfileImage
        src="/assets/images/vinay-side.jpeg"
        alt="Vinay Profile"
        variant="side"
        animate={true}
        delay={0.3}
        glowColor="purple"
      />
    </aside>
  )
}
```

### With Custom Styling
```jsx
<ProfileImage
  src="/assets/images/vinay-front.jpeg"
  alt="Vinay"
  variant="circular"
  className="drop-shadow-2xl border-4 border-white/20"
/>
```

### Static Image (No Animation)
```jsx
<ProfileImage
  src="/assets/images/vinay-front.jpeg"
  alt="Vinay"
  variant="circular"
  animate={false}
/>
```

### Staggered Multiple Images
```jsx
<ProfileImage src="/assets/images/img1.jpeg" delay={0} />
<ProfileImage src="/assets/images/img2.jpeg" delay={0.15} />
<ProfileImage src="/assets/images/img3.jpeg" delay={0.3} />
```

---

## Animation Details

### Entrance Animation
- **Type:** Fade-in + Slide Up
- **Duration:** 0.8 seconds
- **Delay:** Customizable (0-1s)
- **Easing:** easeOut
- **Trigger:** Component mount or scroll into view

### Hover Animation
- **Scale:** 1.02x (2% zoom)
- **Duration:** 0.4 seconds
- **Easing:** easeOut
- **Effect:** Smooth, subtle zoom on hover

### Glow Animation
- **Base Opacity:** 0.6
- **Hover Opacity:** 0.8+
- **Scale:** 1.0 → 1.08 on hover
- **Blur:** 40-60px
- **Duration:** 0.4 seconds

---

## Styling

### CSS Classes Applied

#### Container
```css
position: relative;
display: flex;
align-items: center;
justify-content: center;
```

#### Image Container
```css
position: relative;
overflow: hidden;
border: 1px solid rgb(255, 255, 255, 0.1);
background: rgb(15, 23, 42, 0.2);
backdrop-filter: blur(var(--blur));
```

#### Image Element
```css
height: 100%;
width: 100%;
object-fit: cover;
```

#### Glow Effect
```css
position: absolute;
border-radius: 50%;
filter: blur(40-60px);
opacity: 0.6;
animation: shimmer 2s infinite;
```

### Tailwind Utilities Used
- `border-white/10` - Semi-transparent border
- `bg-slate-900/20` - Dark semi-transparent background
- `backdrop-blur-sm` - Glassmorphism effect
- `shadow-2xl` - Large drop shadow
- `rounded-full` - Full border radius
- `rounded-3xl` - Large border radius

---

## Accessibility

### Alt Text
Always provide meaningful alt text:
```jsx
// Good
alt="Vinay - Full Stack Developer"

// Better
alt="Vinay, a full-stack developer, smiling at the camera wearing glasses"

// Best (with context)
alt="Portrait of Vinay, holding an award certificate"
```

### Keyboard Navigation
- Images are accessible via keyboard
- No interactive elements inside image
- Clear focus states (inherited from parent)

### Screen Readers
- Alt text read aloud
- Image context provided
- Semantic HTML structure maintained

### Color Contrast
- Glows are decorative, not essential
- Text overlays have sufficient contrast
- Works with high contrast mode

---

## Performance Considerations

### Optimizations Built-in
- ✓ Lazy loading (via Framer Motion's viewport detection)
- ✓ GPU acceleration (transform and opacity only)
- ✓ No unnecessary re-renders
- ✓ Optimized blur filters
- ✓ Efficient animation timing

### Best Practices
1. **Image Optimization**
   - Keep images < 250 KB
   - Use JPEG for photos
   - Compress to 80-90% quality
   - Test on slow connections (3G)

2. **Animation Performance**
   - Use reduced-motion queries
   - Stagger animations (prevent jank)
   - GPU acceleration enabled
   - Profile with DevTools

3. **Responsive Loading**
   - Images load at viewport size
   - Different sizes for different screens
   - Lazy loading supported
   - No blocking the render

---

## Responsive Behavior

### Mobile (< 768px)
```
circular: 256px
rounded: 320px width
full: 100% width
side: 100% width
```

### Tablet (768px - 1023px)
```
circular: 272px
rounded: 384px width
full: 100% width
side: 320px width
```

### Desktop (1024px+)
```
circular: 288px (320px on lg+)
rounded: 384px width (max 512px)
full: 100% width (max 512px)
side: 320px width
```

---

## Troubleshooting

### Issue: Image Not Showing
**Cause:** Path or file name mismatch
**Solution:**
```jsx
// Check exact path matches
src="/assets/images/vinay-front.jpeg"  // Correct
src="/assets/images/vinay front.jpeg"  // Wrong (has space)
src="assets/images/vinay-front.jpeg"   // Wrong (missing /)
```

### Issue: Glow Not Visible
**Cause:** Browser doesn't support backdrop-filter
**Solution:**
```jsx
// Add fallback styling
className="bg-slate-900/40"  // Fallback background
```

### Issue: Animation Janky
**Cause:** GPU acceleration disabled
**Solution:**
```css
/* Add to globals.css */
.enable-gpu {
  transform: translateZ(0);
  will-change: opacity, transform;
}
```

### Issue: Image Blurry
**Cause:** Low resolution or CSS scaling
**Solution:**
- Use minimum 400px for circular
- Use minimum 600px for portrait
- Avoid CSS transforms on image

---

## Variants Comparison

### Circular
```
Size: 256-320px square
Aspect: 1:1
Border: Full round
Best For: Headshots, profile pics
Example: Hero section
```

### Rounded
```
Size: 384px width
Aspect: Portrait (variable height)
Border: 24px rounded corners
Best For: Full body photos
Example: About section
```

### Full
```
Size: 100% width (max 512px)
Aspect: Variable
Border: 16px rounded corners
Best For: Large features
Example: Featured projects
```

### Side
```
Size: 320px width
Aspect: 2:3 portrait
Border: 16px rounded corners
Best For: Sidebar images
Example: Skills section
```

---

## Color Presets

### Blue Preset
```css
background: radial-gradient(circle, rgba(56, 189, 248, 0.25), transparent 65%)
```
**Use:** Tech-focused, professional, calming

### Purple Preset
```css
background: radial-gradient(circle, rgba(168, 85, 247, 0.25), transparent 65%)
```
**Use:** Creative, premium, modern

### Cyan Preset
```css
background: radial-gradient(circle, rgba(34, 211, 238, 0.25), transparent 65%)
```
**Use:** Bright, energetic, attention-grabbing

### Combined Preset
```css
background: radial-gradient(circle, rgba(56, 189, 248, 0.15), rgba(168, 85, 247, 0.15) 40%, transparent 65%)
```
**Use:** Balanced, sophisticated, premium (recommended)

---

## Advanced Usage

### Conditional Rendering
```jsx
{isLoaded && (
  <ProfileImage
    src="/assets/images/vinay-front.jpeg"
    alt="Vinay"
    animate={!reducedMotion}
  />
)}
```

### With Intersection Observer
```jsx
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  })
  
  return () => observer.disconnect()
}, [])

return (
  <ProfileImage
    src="/assets/images/vinay-front.jpeg"
    alt="Vinay"
    animate={isVisible}
  />
)
```

### With Motion Controls
```jsx
const controls = useAnimation()

useEffect(() => {
  controls.start({
    scale: [1, 1.05, 1],
    rotate: [0, 360, 0],
  })
}, [controls])

return (
  <ProfileImage
    src="/assets/images/vinay-front.jpeg"
    alt="Vinay"
    animate={true}
  />
)
```

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Transforms | ✓ | ✓ | ✓ | ✓ |
| Filters | ✓ | ✓ | ✓ | ✓ |
| Backdrop-filter | ✓ | ✓ | ✓ | ✓ |
| Animations | ✓ | ✓ | ✓ | ✓ |
| GPU Accel | ✓ | ✓ | ✓ | ✓ |

**Minimum Versions:**
- Chrome 76+
- Firefox 68+
- Safari 9+
- Edge 79+

---

## Dependencies

```json
{
  "framer-motion": "^12.38.0",
  "react": "^19.2.6",
  "react-dom": "^19.2.6"
}
```

---

## File Size

- **Component:** 183 lines
- **Minified:** ~4 KB
- **Gzipped:** ~1.5 KB

---

## License

Part of the Vinay Portfolio project.
Created: May 17, 2026

---

## Support & Updates

For issues or improvements, refer to:
- `IMAGES_SETUP_GUIDE.md` - Detailed setup
- `PORTFOLIO_IMAGES_QUICK_START.md` - Quick reference
- GitHub Issues (if using version control)

