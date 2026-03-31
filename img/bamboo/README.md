# Bamboo Character Images 🐼

## Active Animation Images

These images are automatically detected and used by the animation system:

| File Name | Animation State | Trigger | Description |
|-----------|----------------|---------|-------------|
| **bamboo-idle.png** | Default/Idle | Always active when not in other states | Calm, relaxed sitting pose |
| **bamboo-thinking.png** | Thinking | N/A (future use) | Paw on chin with thought bubble |
| **bamboo-happy.png** | Happy/Excited | Personal/hobby questions | Both paws raised with sparkles ✨ |
| **bamboo-professional.png** | Professional | Job fit/assessment questions | Sitting with laptop, focused |
| **bamboo-waving.png** | Waving | Greetings ("hi", "hello", "hey") | One paw raised in friendly wave |
| **bamboo-typing.png** | Typing | Generating response | At keyboard/laptop (typing animation) |

## Bonus Images (Available for Future Use)

| File Name | Suggested Use | Description |
|-----------|---------------|-------------|
| **bamboo-greeting.png** | Alternate greeting | Waving with tablet/phone |
| **bamboo-confused.png** | Error/confusion state | Surprised with question marks |

## Animation Mappings

### Current Chat Interactions:

1. **User sends greeting** → Bamboo waves (bamboo-waving.png)
2. **User asks about hobbies/personal** → Bamboo gets happy with sparkles (bamboo-happy.png)
3. **User asks about job fit** → Bamboo becomes professional (bamboo-professional.png)
4. **Generating response** → Bamboo typing (bamboo-typing.png)
5. **Default state** → Bamboo idle (bamboo-idle.png)

## File Details

- **Format**: PNG
- **Total Size**: ~16.8 MB (8 images)
- **Transparent Background**: Yes (most images)
- **Resolution**: High quality (1024x1024 or similar)
- **Character Design**: Consistent across all poses - panda with glasses and headset

## How It Works

The `BambooAnimationController` in `/js/main.js`:
1. Checks for these image files on page load
2. Auto-detects them using file existence check
3. Switches from emoji fallback to your custom images
4. Loads appropriate image based on chat interaction
5. CSS animations still apply (floating, transitions, etc.)

## Browser Console Message

When images are detected, you'll see:
```
🐼 Bamboo: Using static images
```

Instead of:
```
🐼 Bamboo: Using CSS animations (emoji fallback)
```

## Adding New Animation States

To add a new state (e.g., using bamboo-confused.png):

1. **Add to CSS** (`/css/main.css`):
```css
.bamboo-character.confused .bamboo-animation-wrapper {
    animation: bamboo-shake 0.5s ease-in-out;
}
```

2. **Add to Controller** (`/js/main.js`):
```javascript
showConfused() {
    this.setState('confused', 'Bamboo is confused!');
}
```

3. **Update staticImages object**:
```javascript
confused: 'img/bamboo/bamboo-confused.png'
```

4. **Trigger in chat** as needed!

---

Generated: January 17, 2026
Character: Bamboo the Panda 🐼
Created for: Aryan Adhikari's Portfolio
