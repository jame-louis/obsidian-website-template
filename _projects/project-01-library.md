---
layout: project
number: 1
difficulty: "Intermediate"
duration: "4 weeks"
team_size: "2-3 students"
start_date: 2026-02-23
due_date: 2026-03-23
points: 250
title: "Project 1: Library Management System"
learning_objectives:
  - Apply design patterns to a real-world problem
  - Implement multi-layered architecture
  - Work effectively in a team
  - Create comprehensive documentation
  - Build a functional software system
---

## Project Overview

In this project, you'll build a **Library Management System** that demonstrates your understanding of architecture, design patterns, and software engineering principles. This system will help a small library manage books, members, and borrowing records.

## Project Goals

1. **Apply Design Patterns**: Use MVC or similar patterns to structure your code
2. **Implement Architecture**: Create a multi-layered application (presentation, business logic, data)
3. **Practice Teamwork**: Collaborate with 2-3 team members using version control
4. **Professional Code**: Write clean, documented, tested code
5. **Deliver Solution**: Create a working system with comprehensive documentation

## System Requirements

### Functional Requirements

**1. Book Management**
- [ ] Add new books to the system
- [ ] View book details and availability
- [ ] Search books by title, author, or ISBN
- [ ] Track book quantity and copies
- [ ] Update book information

**2. Member Management**
- [ ] Register new members
- [ ] View member profiles
- [ ] Track member history
- [ ] Update member information
- [ ] Calculate member fees

**3. Borrowing System**
- [ ] Check out books (max 5 books at once)
- [ ] Return books
- [ ] Track due dates
- [ ] Calculate late fees ($0.50 per day)
- [ ] Generate overdue notices

**4. Reporting**
- [ ] List available books
- [ ] Show member borrowing history
- [ ] Generate overdue reports
- [ ] Financial reports (fees collected)

### Non-Functional Requirements

- [ ] User-friendly interface
- [ ] Fast search and lookup
- [ ] Data persistence (save to file or database)
- [ ] Error handling and validation
- [ ] Responsive to user input

## Technical Requirements

### Architecture

Implement using **MVC Pattern** with these layers:

```
┌──────────────────────────────────┐
│    Presentation Layer (View)     │
│    - Main Menu                   │
│    - User Dialogs                │
│    - Display results             │
└──────────────────┬───────────────┘
                   │
┌──────────────────▼───────────────┐
│   Business Logic Layer (Model)   │
│    - Book class                  │
│    - Member class                │
│    - Loan class                  │
│    - Business rules              │
└──────────────────┬───────────────┘
                   │
┌──────────────────▼───────────────┐
│      Data Layer (Persistence)    │
│    - File I/O                    │
│    - Database operations         │
│    - Data validation             │
└──────────────────────────────────┘
```

### Required Classes

**Data Models:**
- `Book` - Represents a book with title, author, ISBN, quantity
- `Member` - Represents a library member with ID, name, contact
- `Loan` - Represents a book borrowing record

**Business Logic:**
- `LibraryManager` - Core library operations
- `BookService` - Book-related operations
- `MemberService` - Member-related operations
- `LoanService` - Borrowing/returning operations

**Presentation:**
- `LibraryUI` - Main user interface
- Dialog classes for different operations

**Data Persistence:**
- `DataRepository` - File/database access
- `DataValidator` - Input validation

## Project Phases

### Phase 1: Design (Week 1)

**Deliverables:**
- [ ] Class diagram showing all classes and relationships
- [ ] Use case diagram showing system interactions
- [ ] Database/file format design
- [ ] UI mockups/wireframes
- [ ] Project plan with task assignments

**Tasks:**
1. Create design documents
2. Assign responsibilities to team members
3. Plan database/file structure
4. Design user interface

### Phase 2: Implementation (Weeks 2-3)

**Deliverables:**
- [ ] All required classes implemented
- [ ] Basic functionality working
- [ ] Code reviewed and integrated
- [ ] Initial testing completed

**Tasks:**
1. Implement data models
2. Implement business logic
3. Implement user interface
4. Integrate components
5. Basic testing

### Phase 3: Testing & Polish (Week 4)

**Deliverables:**
- [ ] Comprehensive test suite
- [ ] Bug fixes and refinements
- [ ] User documentation
- [ ] Final code review
- [ ] Project presentation

**Tasks:**
1. Write unit tests
2. Integration testing
3. User acceptance testing
4. Fix identified issues
5. Polish user interface
6. Final documentation

## Grading Rubric

### Design (40 points)

| Criteria | Points | Excellent | Good | Acceptable | Poor |
|----------|--------|-----------|------|------------|------|
| Architecture | 10 | Perfect MVC | Good separation | Some separation | Mixed concerns |
| Class Design | 10 | Well-designed | Good design | Basic design | Poor design |
| Database Design | 10 | Efficient | Good structure | Basic | Flawed |
| Documentation | 10 | Comprehensive | Complete | Adequate | Missing |

### Implementation (100 points)

| Criteria | Points | Grade |
|----------|--------|-------|
| Core Functionality | 50 | All requirements met |
| Code Quality | 30 | Clean, organized, tested |
| Completeness | 20 | All features working |

### Testing (40 points)

| Criteria | Points |
|----------|--------|
| Unit Tests | 20 |
| Integration Tests | 20 |

### Presentation (40 points)

| Criteria | Points |
|----------|--------|
| Demo Quality | 20 |
| Presentation | 20 |

### Teamwork & Documentation (30 points)

| Criteria | Points |
|----------|--------|
| Team Contribution | 15 |
| Documentation | 15 |

**Total: 250 points**

## Deliverables

### 1. Design Document (Due: Week 1)

Include:
- Architecture diagram
- Class diagrams
- Use cases
- Database design
- UI mockups
- Project plan

### 2. Source Code (Due: Week 3)

```
LibraryManagementSystem/
├── src/
│   ├── model/
│   │   ├── Book.java
│   │   ├── Member.java
│   │   └── Loan.java
│   ├── service/
│   │   ├── BookService.java
│   │   ├── MemberService.java
│   │   └── LoanService.java
│   ├── ui/
│   │   ├── LibraryUI.java
│   │   └── [Dialog classes]
│   ├── persistence/
│   │   ├── DataRepository.java
│   │   └── DataValidator.java
│   └── Main.java
├── tests/
│   ├── ModelTests.java
│   ├── ServiceTests.java
│   └── IntegrationTests.java
├── data/
│   └── library.dat
├── README.md
├── DESIGN.md
└── .gitignore
```

### 3. Test Suite (Due: Week 3)

- Minimum 30 test cases
- Unit tests for each class
- Integration tests for workflows
- Test results documentation

### 4. User Documentation (Due: Week 4)

- User guide with screenshots
- How to use the system
- Troubleshooting guide
- FAQ

### 5. Project Presentation (Due: Week 4)

- 15-minute demo
- Design walkthrough
- Challenges overcome
- Lessons learned

## Team Organization

**Suggested Role Assignments:**

1. **Architect/Lead Developer**
   - Oversees design and architecture
   - Resolves technical decisions
   - Code reviews

2. **Backend Developer**
   - Implements business logic
   - Data persistence
   - Testing

3. **Frontend/UI Developer**
   - User interface
   - User experience
   - Dialogs and menus

**All members should contribute to:**
- Design phase
- Testing
- Documentation
- Presentation

## Collaboration Requirements

- [ ] Use Git for version control
- [ ] Create meaningful commits (at least 20)
- [ ] Have at least 3 code reviews
- [ ] Each member contributes equally
- [ ] Document team meetings

## Resources & References

### Design Patterns
- [MVC Pattern Tutorial](https://example.com)
- [Design Patterns Handbook](https://example.com)

### Technical
- [File I/O Guide](https://example.com)
- [Testing Framework Documentation](https://example.com)
- [Git Workflow Guide](https://example.com)

### Inspiration
- Think of similar systems you use
- Research real library management software
- Consider edge cases and error handling

## Key Success Factors

1. **Start with design** - Don't jump to coding
2. **Communicate constantly** - Regular team meetings
3. **Test early** - Write tests as you code
4. **Review code** - Catch issues before integration
5. **Document** - Helps with testing and maintenance
6. **Plan time** - Leave buffer for issues

## Constraints & Assumptions

- Maximum 5 books per member
- Late fee: $0.50 per day
- Books must be returned within 21 days
- System stores data in files (can use database)
- Single-user or small concurrent users

## Questions & Support

- **Design questions**: Office hours
- **Technical help**: Post on forum
- **Team conflicts**: Talk to instructor
- **Time management**: Plan ahead!

## Due Dates

| Milestone | Date | Deliverable |
|-----------|------|-------------|
| Design Review | Week 1 | Design Document |
| Mid-point Check | Week 2 | Code Progress |
| Final Submission | Week 4 | All Code & Docs |
| Presentations | Week 4 | Demo & Presentation |

## Final Notes

This project is more involved than previous assignments. **Start early**, **communicate well**, and **help each other succeed**. Library management is a classic software engineering problem - your solution will demonstrate real-world skills!

Good luck, and feel free to reach out if you have questions!
