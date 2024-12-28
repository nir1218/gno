# `Contribution Evaluation`

## Abstract

This document describes general ideas regarding the evaluation of contributions. The principles outlined are intended to be part of a DAO.

## Contents

- [Concepts](#concepts)

  - [Committee](#committee)
  - [Evaluation](#evaluation)
  - [Category](#category)
  - [Contribution](#contribution)
  - [Pull Request](#pull-request)
  - [Vote](#vote)

- [Future Improvements](#future-improvements)

- [Implementation](#implementation)

## Concepts

### General Ideas

A DAO will designate members to serve on committees.
Each committee will be given the mandate to evaluate a specific category of contributions.
A committee, acting as a trusted entity, can decide on a category and its corresponding evaluation criteria.
Any member can propose the addition of a new category and its associated evaluation criteria.
Furthermore, any member can propose a contribution for evaluation.
Currently, members can vote on proposals using a simple "YES" or "NO" system. However, unanimous approval from all members is required for the acceptance of any new category or contribution.

For example, a committee will be established to evaluate code contributions within a repository.
Contributions will be associated with pull requests managed within the Git repository.
Crucially, each pull request must be associated with a category from the approved list, such as 'bounty,' 'chore,' 'defect,' or 'document'.
Committee members could include core development team members or any other trusted entities within the DAO.

### Committee

A committee is a group of designated members with the authority to evaluate proposals.
A DAO may elect a committee, designating its members based on their contributions or merits within the community.
Committee members may propose contributions. This helps to minimize spam and ensure that only viable proposals are considered for evaluation.
Committee members may propose categories.

#### Member

A member is obligated to vote within the designated voting period.
Members have the right and obligation to propose categories or contributions.
The DAO may enforce a policy regarding uncommitted members. A member who is neither active nor cooperative may be disassociated from a committee.

### Evaluation

An evaluation represents a logical grouping of all contributions assessed by a specific committee.

### Category

A category encompasses a group of contributions that should be evaluated according to the same principles and guidelines.

### Contribution

A contribution has an evaluation life cycle.
A submission time is set when a contribution is added.
A last evaluation time is recorded when a contribution is evaluated and approved by a committee member.
An approval time is set when a contribution is approved by all members (or when a future threshold is reached).

#### Submission

Committee members are the sole individuals permitted to submit contributions or categories.

#### Status

Upon submission, a contribution's or category's status is initially set to 'proposed.'
Subsequently, its status will transition to 'approved' if it is approved by the committee, or to 'declined' otherwise.
Intermediate status options, such as 'negotiation,' 'discussion,' and 'evaluation,' are currently to be determined (TBD).

#### Approval

A category is approved when all committee members have given their approval.
Currently, a contribution is approved either when all committee members have given their approval or, in the future, when it reaches a predetermined threshold.

### Vote

#### Voters

Voters are committee members, all committee members have the right and obligation to vote on a contribution.

#### Voting Options

The voting options available to a voter.
A committee may set voting options for its evaluation categories.
The initial option set includes the following options:

- `YES`
- `NO`

#### Voting Period

Voting period is set by the committee, all committee members are obligated to vote within the voting period.

#### Threshold

Threshold is the minimum percentage of `YES` votes from the total votes.

#### Tally Votes

## Future Improvements

The current documentation describes the basic ideas as expressed in the code.
Future improvements listed below will be decided based on future discussions and peer reviews.

- Committee negotiates contributions
- A committee may set voting options for its categories and evaluated contributions, otherwise; the Contributors DAO may set a global
- A committee may set a threshold required for a category or a contribution to be approved, otherwise; the Contributors DAO may set a global threshold and quorum.
- A committee sets evaluation criteria scoring range (1-10), scoring a contribution is essential when there are competing contributions (Game of Realm). Otherwise, the evaluation is a binary decision. Moreover, scoring should be translated to rewards of any sort, or become discussion points durning negotiation about the viability of a contribution.
- Committee members assess contributions based on the evaluation criteria and vote accordingly.

## Implementation

The implementation written aims to express the ideas described above using code. Not all ideas have been fully implemented.
