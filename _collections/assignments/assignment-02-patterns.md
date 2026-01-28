---
layout: assignment
week: 2
date: 2026-02-16
title: "Assignment 2: Implementing Design Patterns"
due_date: 2026-02-16
points: 100
submission_type: "Project files + Design documentation"
rubric:
  - criterion: "Pattern Implementation"
    points: 40
    description: "Correct implementation of assigned design pattern"
  - criterion: "Code Organization"
    points: 30
    description: "Clear separation of concerns and logical structure"
  - criterion: "Testing"
    points: 20
    description: "Comprehensive tests demonstrating pattern usage"
  - criterion: "Documentation"
    points: 10
    description: "Explanation of pattern and design decisions"
---

## Objective

Apply design patterns to structure your code properly. You'll implement a real-world example using architectural patterns to improve code organization and maintainability.

## Overview

In Week 2, we learned about design patterns and architectural principles. This assignment asks you to implement these patterns in a practical project.

## Requirements

### Choose One Pattern to Implement

Select one of the following patterns:

1. **Model-View-Controller (MVC)**
   - Difficulty: Intermediate
   - Best for: Business application projects

2. **Factory Pattern**
   - Difficulty: Beginner to Intermediate
   - Best for: Systems with multiple object types

3. **Singleton Pattern**
   - Difficulty: Beginner
   - Best for: Configuration and resource managers

4. **Observer Pattern**
   - Difficulty: Intermediate
   - Best for: Event-driven systems

### Project Requirements

**Part 1: Plan Your Architecture (15 points)**

Create a design document including:

1. **Architecture Diagram**
   - Show components and relationships
   - Illustrate data flow
   - Label all connections

2. **Component Description**
   - Describe each component's responsibility
   - Explain why you separated concerns this way
   - Show how components interact

3. **Pattern Justification**
   - Why you chose this pattern
   - How it solves your problem
   - Advantages in your implementation

**Part 2: Implement the Pattern (40 points)**

Create a working implementation with:

1. **Core Classes/Components**
   - Minimum 4-5 classes
   - Each class has clear responsibility
   - Proper inheritance/interfaces

2. **Proper Structure**
   - Logical directory organization
   - Clear naming conventions
   - Consistent formatting

3. **Functionality**
   - System demonstrates the pattern
   - All components work together
   - No compilation errors

**Part 3: Test Your Implementation (20 points)**

Write tests that verify:

1. **Pattern Compliance**
   - Pattern is correctly implemented
   - Components interact as designed
   - Behavior matches pattern requirements

2. **Functionality**
   - Each component works correctly
   - Edge cases handled
   - Error conditions managed

3. **Integration**
   - Components work together
   - Data flows correctly
   - System behaves as expected

**Part 4: Document Your Work (10 points)**

Include documentation:

1. **Design Document**
   - Pattern explanation
   - Design decisions
   - Lessons learned

2. **Code Comments**
   - Class-level documentation
   - Important method descriptions
   - Pattern-specific notes

3. **README**
   - How to run the project
   - What the pattern does
   - Key classes to understand

## Example: MVC Implementation

Here's an outline for an MVC pattern example:

```
Project Structure:
├── Model/
│   ├── Book.java
│   └── BookRepository.java
├── View/
│   ├── BookView.java
│   └── BookUI.java
├── Controller/
│   └── BookController.java
├── Tests/
│   ├── BookTest.java
│   ├── ControllerTest.java
│   └── ViewTest.java
└── README.md

Key Classes:
- Model: Represents book data
- View: Displays book information
- Controller: Handles user input and coordinates Model/View
- Repository: Manages data persistence
```

## Design Document Template

```
# Design Document: [Project Name]

## Pattern: [Selected Pattern Name]

### Problem Statement
[What problem does this pattern solve?]

### Solution Overview
[How does your implementation solve the problem?]

### Architecture

[Include diagram here]

### Components

#### Component 1: [Name]
- Responsibility: 
- Key methods:
- Dependencies:

[Repeat for each component]

### Data Flow
[Describe how data moves through the system]

### Design Decisions
[Explain key decisions made during design]
```

## Implementation Tips

### Do's ✅

- Start with the architecture document
- Keep it simple to understand
- Test each component independently
- Use meaningful names
- Follow the pattern exactly
- Write clear documentation

### Don'ts ❌

- Jump straight to coding
- Overcomplicate the design
- Mix concerns
- Ignore error handling
- Skip documentation
- Deviate from the chosen pattern

## Step-by-Step Approach

### Week 1 of Assignment:

1. **Research (1-2 hours)**
   - Read about your pattern
   - Find examples online
   - Understand when to use it

2. **Design (2-3 hours)**
   - Sketch architecture
   - Identify components
   - Plan interactions
   - Create documentation

### Week 2 of Assignment:

3. **Implement (4-5 hours)**
   - Create class structure
   - Implement each component
   - Connect components
   - Verify compilation

4. **Test (2-3 hours)**
   - Write test classes
   - Test each component
   - Test integration
   - Handle edge cases

5. **Document (1-2 hours)**
   - Add comments
   - Complete README
   - Polish documentation

## Sample Test Cases

```
MVC Pattern Tests:

Test 1: Model independently manages data
- Create model instance
- Add data
- Verify data stored correctly

Test 2: View displays model data
- Create view and model
- Add data to model
- Verify view displays it

Test 3: Controller coordinates model and view
- Create controller with model and view
- Call controller method
- Verify model updated
- Verify view updated

Test 4: Multiple views show same model
- Create model and two views
- Update model
- Verify both views update
```

## Submission Requirements

Submit a ZIP file containing:

1. **Source Code**
   - All `.java` files (or equivalent)
   - Organized in proper directories
   - No compiled files

2. **Design Document**
   - Architecture diagram
   - Component descriptions
   - Design decisions

3. **Tests**
   - At least 10 test cases
   - Testing script or test runner
   - Test results documentation

4. **README.md**
   - Project description
   - How to compile and run
   - Pattern explanation
   - Key classes overview

5. **Screenshots**
   - Compilation output
   - Test execution results
   - Program running (if applicable)

## Grading Criteria

| Score Range | Pattern | Code | Tests | Docs |
|-------------|---------|------|-------|------|
| 90-100 | Perfectly implemented | Excellent | Comprehensive | Complete |
| 80-89 | Mostly correct | Good | Good coverage | Adequate |
| 70-79 | Correct core | Acceptable | Basic | Minimal |
| Below 70 | Incomplete | Poor | Missing | Inadequate |

## Common Mistakes

1. **Not following the pattern**: Understand the pattern rules
2. **Poor separation of concerns**: Keep responsibilities clear
3. **Insufficient testing**: Test all components
4. **Vague documentation**: Be specific and clear
5. **Over-engineering**: Keep it simple for the assignment

## Helpful Resources

- [Design Patterns Reference](https://example.com)
- [UML Diagram Guide](https://example.com)
- [Testing Best Practices](https://example.com)
- [Code Documentation Standards](https://example.com)
- [Architecture Patterns](https://example.com)

## Getting Help

- Office hours: Ask about pattern implementation
- Forum: Discuss design approaches
- Email: Send specific code questions
- Study groups: Compare design approaches

## Due Date

**Due:** {{ page.due_date | date: "%A, %B %d, %Y" }}

**Submit to:** Assignment portal

**Late submissions** follow the policy in the syllabus.

## Looking Ahead

Assignment 3 will ask you to combine multiple patterns and build a more complex system. Mastering patterns now will help you succeed later!

---

**Need help?** Don't hesitate to ask questions early!
