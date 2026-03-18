TechNova Employee Rewards & Performance Management System
MySQL Practice Coding Assignment

------------------------------------------------------------
Project Overview:
This project implements an Employee Rewards and Performance 
Management System for TechNova Pvt. Ltd. using MySQL.

The database design follows normalization principles (3NF)
and includes proper primary keys, foreign keys, and indexes
for optimized performance.

------------------------------------------------------------
User Story 1 – Database Setup (DDL):
- Created database: TechNovaDB
- Created tables: Department, Employee, Project,
Performance, Reward
- Defined primary keys and foreign keys
- Applied UNIQUE constraint on DeptName
- Created indexes on EmpName and DeptID

------------------------------------------------------------
User Story 2 – Data Manipulation (DML):
- Inserted at least 5 records into all tables
- Updated one employee's department
- Deleted reward record where amount < 1000

------------------------------------------------------------
User Story 3 – Data Queries (DQL):
- Retrieved employees joined after 2019-01-01
- Calculated average rating per department
- Calculated employee age using TIMESTAMPDIFF
- Calculated total rewards for current year
- Retrieved employees with rewards > 2000

------------------------------------------------------------
User Story 4 – Advanced Queries:
- Implemented multi-table JOIN for performance report
- Used subquery to find highest-rated employee per department
- Used subquery to list employees without rewards

------------------------------------------------------------
User Story 5 – Transaction & Optimization:
- Demonstrated transaction using START TRANSACTION and COMMIT
- Analyzed query performance using EXPLAIN
- Compared EXPLAIN output before and after index creation

------------------------------------------------------------
Files Included in Submission:
1. TechNova_Assignment.sql
2. Screenshots:
- Aggregate_Query.png
- Join_Query.png
- Explain_Before.png
- Explain_After.png
3. README.txt

------------------------------------------------------------
Conclusion:
All required DDL, DML, DQL, JOIN, Subquery, Transaction,
and Optimization concepts were implemented successfully.
The script executes without syntax errors.
