# `Contribution Evaluation`

## Abstract

This document describes general ideas regarding the evaluation of contributions. The principles outlined are intended to be part of a DAO.

## Contents

- [Concepts](#concepts)

  - [Committee](#committee)
  - [Evaluation](#evaluation)
  - [Category](#category)
  - [Contribution](#contribution)
  - [Voting](#voting)
  - [Rewarding](#rewarding)

- [Future Improvements](#future-improvements)

- [Implementation](#implementation)

## Concepts

### General Ideas

A DAO will designate members to serve on committees.
Each committee will be given the mandate to evaluate a specific category of contributions.
A committee, acting as a trusted entity, can decide on a category and its corresponding evaluation criteria.
Any member can propose the addition of a new category and its associated evaluation criteria.
Furthermore, any member can propose a contribution for evaluation.

### Committee

A committee is a group of designated members with the authority to evaluate proposals.
A DAO may elect a committee, designating its members based on their contributions or merits within the community.
Committee members may propose contributions. This helps to minimize spam and ensure that only viable proposals are considered for evaluation.
Committee members may propose categories.

#### Member

A member is obligated to vote within the designated voting period.
Members have the right and obligation to propose categories or contributions.
The DAO may enforce a policy regarding uncommitted members. A member who is neither active nor cooperative may be disassociated from a committee.
TODO: How to track uncommitted members?

### Evaluation

An evaluation represents a logical grouping of all contributions assessed by a specific committee.

### Category

A category encompasses a group of contributions that should be evaluated according to the same principles and guidelines.

### Contribution

A contribution has an evaluation life cycle.
A submission time is set when a contribution is added.
A last evaluation time is recorded when a contribution is evaluated and approved by a committee member.
An approval time is set when a contribution is approved by all members (or when a future threshold is reached).
Committee members assess contributions based on the evaluation criteria and vote accordingly.

#### Submission

Committee members are the sole individuals permitted to submit contributions or categories.

#### Status

Upon submission, a contribution's or category's status is initially set to 'proposed.'
Subsequently, its status will transition to 'approved' if it is approved by the committee, or to 'declined' otherwise.
A committee may consider to add or remove status option.
A committee may decide to add status options, such as 'negotiation,' 'discussion,' and 'evaluation' in the example given above.

#### Approval

A category is approved when all committee members have given their approval.
Currently, a contribution is approved either when all committee members have given their approval or, in the future, when it reaches a predetermined threshold.

### Voting

#### Voters

Voters are committee members, all committee members have the right and obligation to vote on a contribution.

#### Voting Options

The voting options available to a voter.
A committee may set voting options for its categories and evaluated contributions, otherwise; the DAO may set a global voting options.
The initial global voting options set includes the following options:

- `YES`
- `NO`

#### Voting Period

Voting period is set by the committee, all committee members are obligated to vote within the voting period.

#### Threshold

Threshold is the minimum percentage of `YES` votes from the total votes.
A committee may set a threshold required for a category or a contribution to be approved, otherwise; the DAO may set a global threshold.

#### Tally Votes

TBD

#### Quorum

A committee may set the specific quorum requirement. The DAO may set a global quorum.

## Rewarding

A committee may decide the means to contribution rewards and the viability of a contribution.

## Future Improvements

The current documentation describes the basic ideas as expressed in the code.
Future improvements listed below will be decided based on future discussions and peer reviews.

## Implementation

The implementation written aims to express the ideas described above using code. Not all ideas have been fully implemented.

## Examples

### Code Contribution Evaluation Process

A committee will evaluate code contributions within this repository. Committee members may include core development team members or other trusted DAO entities.

To ensure consistent evaluation, code contributions will be categorized (e.g., "bounty," "chore," "defect," "feature"). Contributions within the same category will be evaluated using the same criteria. The committee will define and maintain the list of contribution categories.

All contributions will be associated with a pull request (PR) managed within the Git repository.

#### Feature Contribution Evaluation

For feature contributions, the committee will establish evaluation criteria and a scoring range (1-10) for each criterion. This scoring system is essential for comparing competing contributions.

The committee will determine weighting factors (wᵢ) for each criterion (where i ranges from 1 to n, the total number of criteria). These weights represent the relative importance of each criterion and must sum to 1 (or 100%).

Each committee member (j) will evaluate a feature contribution by assigning a score (sᵢⱼ) for each criterion (i). These scores must be within the 1-10 range.

To combine the scores from multiple evaluators (m), we will first calculate the _average score_ (sᵢ) for each criterion:

sᵢ = (1/m) \* ∑ⱼ sᵢⱼ for j = 1 to m

Then, the weighted score (S) for a contribution will be calculated using the following formula:

S = ∑ᵢ (sᵢ \* wᵢ) for i = 1 to n

Where:

- n: Number of criteria
- sᵢ: Average score for the i-th criterion
- wᵢ: Weight (factor) assigned to the i-th criterion

This can be expanded as:

S = s₁w₁ + s₂w₂ + s₃w₃ + ... + sₙwₙ

**Criteria and Weights:**

| Criteria      | Evaluation Points | Description                                                                         | Weight (wᵢ) |
| ------------- | ----------------- | ----------------------------------------------------------------------------------- | ----------- |
| Code Quality  | 1-10              | Cleanliness, readability, and maintainability of the code.                          | 0.2         |
| Functionality | 1-10              | Whether the code meets the specified requirements and produces the expected output. | 0.3         |
| Efficiency    | 1-10              | Resource usage (memory, CPU) and speed of execution.                                | 0.2         |
| Testing       | 1-10              | Coverage and effectiveness of unit tests.                                           | 0.15        |
| Documentation | 1-10              | Clarity and completeness of comments and documentation.                             | 0.15        |

**Example with Multiple Evaluators:**

Let's assume three committee members evaluate a contribution and assign the following scores:

| Criteria      | Member 1 (sᵢ₁) | Member 2 (sᵢ₂) | Member 3 (sᵢ₃) | Average Score (sᵢ) |
| ------------- | -------------- | -------------- | -------------- | ------------------ |
| Code Quality  | 8              | 7              | 9              | 8                  |
| Functionality | 9              | 8              | 10             | 9                  |
| Efficiency    | 7              | 6              | 8              | 7                  |
| Testing       | 10             | 9              | 9              | 9.33               |
| Documentation | 6              | 5              | 7              | 6                  |

The weighted score (S) is calculated as:

S = (8 _ 0.2) + (9 _ 0.3) + (7 _ 0.2) + (9.33 _ 0.15) + (6 \* 0.15)
S = 1.6 + 2.7 + 1.4 + 1.4 + 0.9
S = 8.0

This weighted score will be used to determine the reward for the contribution (the specific reward mechanism should be defined elsewhere).

#### Other Contribution Categories

The evaluation process for other contribution categories (e.g., "bounty," "chore," "defect") will be defined separately by the committee, but may follow a similar weighted scoring approach.
