# Project Images Directory

This directory contains images for your portfolio projects.

## Image Requirements

For best results, follow these guidelines:

1. **File Format**: Use JPG or PNG format
2. **Aspect Ratio**: 16:9 is recommended (e.g., 1600x900 pixels)
3. **File Size**: Keep images under 500KB for optimal loading performance
4. **Naming Convention**: Use kebab-case (e.g., `project-name.jpg`)

## Required Images

Place the following images in this directory:

- `palette-ai.jpg` - Screenshot of the Palette AI project
- `wedding-wise.jpg` - Screenshot of the Wedding Wise project
- `expense-tracker.jpg` - Screenshot of the Expense Tracker project
- `profile-deck.jpg` - Screenshot of the Profile Deck project
- `keeper.jpg` - Screenshot of the Keeper project

## How to Add New Project Images

1. Add your image file to this directory
2. Import the image in `src/components/Projects.jsx`
3. Update the projects array with your new project information

Example:

```jsx
// In src/components/Projects.jsx
import newProjectImage from "../assets/images/new-project.jpg";

// Then add to the projects array
{
  id: 6,
  name: "New Project",
  description: "Description of your new project",
  link: "https://your-project-url.com",
  github: "https://github.com/yourusername/new-project",
  image: newProjectImage,
}
```
