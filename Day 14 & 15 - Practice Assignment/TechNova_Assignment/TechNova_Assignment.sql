-- TechNova Employee Rewards & Performance Management System

CREATE DATABASE TechNovaDB;
USE TechNovaDB;

CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50) NOT NULL UNIQUE,
    Location VARCHAR(50) NOT NULL
);

CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(50) NOT NULL,
    Gender CHAR(1),
    DOB DATE,
    HireDate DATE,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Project (
    ProjectID INT PRIMARY KEY,
    ProjectName VARCHAR(100),
    DeptID INT,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Performance (
    EmpID INT,
    ProjectID INT,
    Rating INT,
    ReviewDate DATE,
    PRIMARY KEY (EmpID, ProjectID),
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE Reward (
    EmpID INT,
    RewardMonth DATE,
    RewardAmount DECIMAL(10,2),
    PRIMARY KEY (EmpID, RewardMonth),
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
);

CREATE INDEX idx_empname ON Employee(EmpName);
CREATE INDEX idx_deptid ON Employee(DeptID);

INSERT INTO Department VALUES
(101,'IT','Bangalore'),
(102,'HR','Delhi'),
(103,'Finance','Mumbai');

INSERT INTO Employee VALUES
(1,'Asha','F','1990-07-12','2018-06-10',101),
(2,'Raj','M','1988-04-09','2020-03-22',102),
(3,'Neha','F','1995-01-15','2021-08-05',101),
(4,'Kiran','M','1993-03-10','2022-01-12',103),
(5,'Priya','F','1997-11-21','2019-09-18',101);

INSERT INTO Project VALUES
(1,'AI Platform',101,'2023-01-01','2023-12-31'),
(2,'HR Portal',102,'2023-02-01','2023-10-30'),
(3,'Finance App',103,'2023-03-01','2023-11-30'),
(4,'Cloud Migration',101,'2023-04-01','2023-12-31'),
(5,'Audit System',103,'2023-05-01','2023-12-31');

INSERT INTO Performance VALUES
(1,1,5,'2024-01-01'),
(2,2,4,'2024-01-02'),
(3,4,3,'2024-01-03'),
(4,3,5,'2024-01-04'),
(5,1,4,'2024-01-05');

INSERT INTO Reward VALUES
(1,'2024-01-01',3000),
(2,'2024-01-01',1500),
(3,'2024-01-01',800),
(4,'2024-01-01',2500),
(5,'2024-01-01',1200);

UPDATE Employee
SET DeptID = 103
WHERE EmpID = 2;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM Reward WHERE RewardAmount < 1000;
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM Employee WHERE HireDate > '2019-01-01';

SELECT d.DeptName, AVG(p.Rating) AS AvgRating
FROM Performance p
JOIN Employee e ON p.EmpID = e.EmpID
JOIN Department d ON e.DeptID = d.DeptID
GROUP BY d.DeptName;

SELECT EmpName,
TIMESTAMPDIFF(YEAR, DOB, CURDATE()) AS Age
FROM Employee;

SELECT SUM(RewardAmount)
FROM Reward
WHERE YEAR(RewardMonth) = YEAR(CURDATE());

SELECT e.EmpName, d.DeptName, pr.ProjectName, p.Rating
FROM Performance p
JOIN Employee e ON p.EmpID = e.EmpID
JOIN Department d ON e.DeptID = d.DeptID
JOIN Project pr ON p.ProjectID = pr.ProjectID;

START TRANSACTION;
INSERT INTO Employee VALUES
(6,'Ravi','M','1996-06-15','2023-06-01',101);
INSERT INTO Performance VALUES
(6,1,4,'2024-02-01');
COMMIT;