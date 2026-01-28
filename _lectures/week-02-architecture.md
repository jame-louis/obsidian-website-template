---
layout: lecture
week: 2
date: 2026-02-09
duration: "75 minutes"
title: "Core Concepts & Architecture"
learning_objectives:
  - Understand the architectural patterns and design principles
  - Learn about system structure and components
  - Study best practices and industry standards
  - Apply concepts to real-world examples
---

## Building on the Foundation

Last week we set everything up. This week we dive into understanding how the core system works. Understanding architecture is key to becoming a skilled developer.

## What is Architecture?

Architecture is the fundamental organization of a system. It's how components work together to accomplish goals.

### Key Principles

1. **Separation of Concerns**
   - Each component has a single responsibility
   - Components communicate through well-defined interfaces
   - Makes code easier to understand and maintain

2. **Abstraction**
   - Hide implementation details behind simple interfaces
   - Users of a component don't need to understand how it works internally
   - Changes to implementation don't affect users

3. **Modularity**
   - Break large systems into smaller, manageable pieces
   - Each module can be developed and tested independently
   - Modules can be reused in different contexts

4. **Scalability**
   - Design systems that can grow without major redesigns
   - Consider future requirements while building
   - Plan for increased complexity and usage

## System Architecture Overview

### High-Level Components

```
┌─────────────────────────────────────────┐
│        Presentation Layer               │
│     (UI, User Interface)                │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│        Business Logic Layer             │
│     (Core Functionality)                │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│          Data Layer                     │
│     (Storage, Database)                 │
└─────────────────────────────────────────┘
```

### Layer Responsibilities

**Presentation Layer**
- Shows information to users
- Handles user input
- Displays results
- Example: Buttons, forms, displays

**Business Logic Layer**
- Processes data
- Applies rules and algorithms
- Makes decisions
- Coordinates between layers

**Data Layer**
- Stores information
- Retrieves information
- Manages persistence
- Example: Database operations

## Design Patterns

### What is a Design Pattern?

A design pattern is a proven solution to a common problem. It's a template for solving similar problems.

### Common Patterns

**1. Model-View-Controller (MVC)**
- Model: Data representation
- View: Display/UI
- Controller: Logic/routing

**2. Model-View-ViewModel (MVVM)**
- Separates UI from business logic
- Two-way data binding
- Better testability

**3. Factory Pattern**
- Creates objects without specifying exact classes
- Simplifies object creation
- Makes code more flexible

**4. Singleton Pattern**
- Ensures only one instance exists
- Provides global access point
- Use carefully (can make testing harder)

## Real-World Example

Let's look at how these concepts apply to a real application:

### Example: A Book Management System

**Components:**
- Book class (Model)
- BookView class (User interface)
- BookController class (Logic)
- Database (Persistence)

**Flow:**
1. User adds a new book
2. View captures input
3. Controller validates data
4. Business logic processes it
5. Database stores it
6. View displays confirmation

**Separation of Concerns:**
- View doesn't know about database
- Controller handles communication
- Business logic is independent
- Database operations are abstracted

## Best Practices

### Do's ✅

- Keep layers separate and independent
- Use meaningful names for classes and methods
- Document your architecture
- Write tests for business logic
- Plan before coding

### Don'ts ❌

- Mix presentation and business logic
- Create circular dependencies
- Make components too tightly coupled
- Ignore scalability concerns
- Skip documentation

## Code Examples

### Good Architecture
```
// Clear separation of concerns

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserView {
  display(user) {
    console.log(`${user.name} - ${user.email}`);
  }
}

class UserController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
  
  displayUser(user) {
    this.view.display(user);
  }
}
```

### Tight Coupling (Avoid!)
```
// Don't mix concerns like this

class UserManager {
  saveToDatabase(user) { }
  displayOnScreen(user) { }
  sendEmail(user) { }
  validate(user) { }
}

// Too many responsibilities!
```

## Hands-On Activity

Try refactoring a simple program following MVC pattern:

**Step 1:** Identify the data (Model)
**Step 2:** Design the user interface (View)
**Step 3:** Create the controller/logic layer (Controller)
**Step 4:** Implement each component
**Step 5:** Test the interaction between layers

## Common Mistakes

1. **Over-engineering**: Don't add patterns you don't need
2. **Under-engineering**: Don't skip structure entirely
3. **Ignoring performance**: Consider efficiency early
4. **Poor naming**: Use clear, descriptive names
5. **Tight coupling**: Components should be independent

## Applying to Your Projects

When building your projects:

1. **Plan the architecture** before coding
2. **Identify your layers** (presentation, logic, data)
3. **Use design patterns** where appropriate
4. **Keep concerns separate**
5. **Document your decisions**

## Looking Ahead to Week 3

Next week we'll build on these concepts and create more complex systems. You should:

- Review architecture diagrams
- Practice drawing your own architecture
- Think about how architecture affects code quality
- Ask questions about specific patterns

## Resources for This Week

- [Architecture Patterns Overview](https://example.com)
- [Design Patterns Tutorial](https://example.com)
- [MVC Pattern Explained](https://example.com)
- [Architecture Best Practices](https://example.com)
- [System Design Fundamentals](https://example.com)

## Key Takeaways

✅ Architecture is the blueprint for your system
✅ Good architecture makes code maintainable
✅ Use design patterns to solve common problems
✅ Keep layers separate and independent
✅ Plan before you code

## Summary

This week we covered:
- What architecture is and why it matters
- Layered architecture approach
- Common design patterns
- Best practices for structuring code
- How to apply these concepts to real projects

Next week gets more technical. Make sure you understand these foundational concepts!

## Questions to Consider

- How would you structure your current project?
- Which design pattern would you use and why?
- What are the advantages of separating concerns?
- How does good architecture affect development speed?
