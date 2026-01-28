---
layout: assignment
slug: "assignment-01-setup"
week: 1
date: 2026-02-09
title: "Assignment 1: Environment Setup & First Project"
due_date: 2026-02-09
points: 100
submission_type: "Project files + Screenshots"
rubric:
  - criterion: "Environment Setup"
    points: 30
    description: "All required tools installed and configured correctly"
  - criterion: "First Project Creation"
    points: 30
    description: "Successfully create and run a basic project"
  - criterion: "Code Quality"
    points: 20
    description: "Code is clean, organized, and follows conventions"
  - criterion: "Documentation"
    points: 20
    description: "Included README and comments explaining the code"
---

## Objective

Set up your development environment and create your first project. This assignment ensures you have everything installed correctly and understand how to work with the basic tools.

## Requirements

### Part 1: Environment Verification (30 points)

Verify that all required tools are installed:

1. **Development Environment**
   - [ ] Installed and working
   - [ ] Can create new projects
   - [ ] Can run existing projects

2. **Required Libraries/Frameworks**
   - [ ] All dependencies installed
   - [ ] Version compatibility verified
   - [ ] No missing packages

3. **Code Editor/IDE**
   - [ ] Syntax highlighting working
   - [ ] Can compile/run from editor
   - [ ] Debugging tools accessible

**Submission:** Screenshot showing version information for each tool

### Part 2: Create Your First Project (30 points)

Create a basic project that demonstrates you understand the project structure:

**Requirements:**
1. Create a new project with a meaningful name
2. Include at least 3 files with clear organization
3. Project should run without errors
4. Make at least 2 modifications and verify they work
5. Document the project structure in comments

**What to Include:**
- Main entry point
- At least one module/class
- Basic functionality that produces output
- Error handling

### Part 3: Code Quality (20 points)

Ensure your code meets quality standards:

**Checklist:**
- [ ] Consistent naming conventions
- [ ] Proper indentation and formatting
- [ ] Comments for non-obvious code
- [ ] No compiler/runtime warnings
- [ ] Follows style guidelines

**Guidelines:**
- Use descriptive variable names
- Keep functions/methods small
- Avoid code duplication
- One responsibility per class/function

### Part 4: Documentation (20 points)

Create clear documentation for your project:

**Required:**
1. **README.md** file including:
   - Project name and description
   - How to set up the project
   - How to run the project
   - What the program does
   - Any known issues or limitations

2. **Code Comments** including:
   - File-level documentation
   - Class/function descriptions
   - Explanation of complex logic
   - Assumptions and design decisions

## Starter Code

Here's a template to get you started:

```
Project_Name/
├── README.md
├── src/
│   ├── Main.java (or equivalent)
│   ├── MyClass.java
│   └── Utility.java
├── tests/
│   └── MyClassTest.java
└── .gitignore
```

## Step-by-Step Instructions

### Step 1: Set Up (15 minutes)
1. Create new project using your IDE
2. Add the basic directory structure
3. Verify it runs

### Step 2: Implement (45 minutes)
1. Create your main class/module
2. Add additional classes as needed
3. Implement the required functionality
4. Test each component

### Step 3: Polish (30 minutes)
1. Clean up code formatting
2. Add comments and documentation
3. Create README.md
4. Test one more time

### Step 4: Submit (10 minutes)
1. Package your project files
2. Take screenshots of compilation/execution
3. Upload to submission portal

## Submission Checklist

- [ ] All required tools installed
- [ ] Project files organized in proper structure
- [ ] Project compiles and runs without errors
- [ ] README.md file present and complete
- [ ] Code is commented and formatted
- [ ] Screenshots showing successful execution
- [ ] No external dependencies not mentioned

## Grading Criteria

**Full Credit (90-100):**
- All requirements met
- Code is clean and well-documented
- Project runs flawlessly
- README is comprehensive

**Good (80-89):**
- Most requirements met
- Some minor documentation missing
- Small code quality issues
- Project runs with minor issues

**Satisfactory (70-79):**
- Basic requirements met
- Limited documentation
- Code quality issues present
- Project runs but has issues

**Needs Improvement (Below 70):**
- Missing significant requirements
- Poor documentation
- Code quality concerns
- Project doesn't run properly

## Common Issues & Solutions

**Issue:** Project won't compile
- **Solution:** Check for syntax errors, verify all files are saved, confirm IDE settings

**Issue:** Missing dependencies
- **Solution:** Review documentation, install missing packages, verify versions

**Issue:** Can't find IDE features
- **Solution:** Check menus, consult IDE documentation, ask in office hours

**Issue:** Confused about structure
- **Solution:** Review class materials, look at examples, ask for clarification

## Helpful Resources

- [Official Documentation](https://example.com)
- [IDE Setup Guide](https://example.com)
- [Code Style Guide](https://example.com)
- [Troubleshooting FAQ](https://example.com)

## Getting Help

- Post questions in the course forum
- Come to office hours (see syllabus for times)
- Email with specific error messages and code
- Don't wait until the due date!

## Due Date & Submission

**Due:** {{ page.due_date | date: "%A, %B %d, %Y" }}

**Submit:**
1. Zip your project directory
2. Upload to the assignment portal
3. Include screenshots of execution

**Late Policy:** See syllabus for late submission details

## Next Assignment

Assignment 2 will build on these concepts and ask you to create a slightly more complex project. Make sure you understand the fundamentals from this assignment!

---

**Questions?** Check the FAQ, visit office hours, or post on the forum!
