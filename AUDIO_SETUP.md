# Audio Voiceover Setup

## Overview
This application includes an audio voiceover system for each section with auto-scroll functionality.

## Features
- **Voiceover per Section**: Each section plays its own audio when it becomes active
- **Auto-Scroll**: When audio completes, the app automatically scrolls to the next section
- **Mute Control**: Clicking the mute button pauses both audio and auto-scroll functionality
- **Active Section Detection**: Audio only plays when the section is visible

## Audio File Setup

### Required Audio Files
Place your voiceover audio files in the `/public/audio/` directory with the following names:

```
/public/audio/
├── intro.mp3
├── value-proposition.mp3
├── full-addressability.mp3
├── agnostic-platform.mp3
├── campaign-management.mp3
├── yield-optimization.mp3
├── audience-intelligence.mp3
├── premium-programmatic.mp3
└── flexible-delivery.mp3
```

### Fallback Behavior
If audio files are not found, the system uses a 5-second timer fallback per section to maintain the auto-scroll functionality.

## How It Works

1. **Audio Context**: Global audio state managed via React Context (`AudioContext.tsx`)
2. **Active Section Detection**: Intersection Observer tracks which section is currently visible
3. **Audio Playback**: When a section becomes active, its corresponding audio starts playing
4. **Auto-Scroll**: When audio ends (and mute is OFF), the app scrolls to the next section
5. **Mute Control**: Pressing mute stops audio and disables auto-scroll

## Customization

### Adjust Audio Volume
Edit `/src/app/contexts/AudioContext.tsx`:
```typescript
audioRef.current.volume = 0.7; // Change value between 0.0 and 1.0
```

### Adjust Fallback Timer
Edit the timer duration in `AudioContext.tsx`:
```typescript
setTimeout(() => {
  // ...
}, 5000); // Change 5000 to desired milliseconds
```

### Disable Auto-Scroll
To disable auto-scroll but keep audio, comment out the auto-scroll logic in `App.tsx`.

## Controls

- **Mute/Unmute Button**: Top-right corner
- **Vertical Menu**: Right side - click to manually navigate sections (stops current audio)
- **Scroll**: Manual scrolling stops audio and switches to the new section's audio