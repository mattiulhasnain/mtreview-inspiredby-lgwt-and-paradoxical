name: Feature Request
description: Suggest an idea for improvement
title: "[FEATURE] "
labels: ["enhancement"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for suggesting a feature! Please describe your idea below.

  - type: textarea
    id: description
    attributes:
      label: Feature Description
      description: What feature would you like to see?
      placeholder: I would like to add...
    validations:
      required: true

  - type: textarea
    id: problem
    attributes:
      label: Problem It Solves
      description: What problem does this solve?
      placeholder: This would help users...
    validations:
      required: true

  - type: textarea
    id: implementation
    attributes:
      label: Proposed Implementation
      description: How would this be implemented? (optional)
      placeholder: This could be done by...

  - type: textarea
    id: alternatives
    attributes:
      label: Alternative Solutions
      description: Any alternatives you've considered?

  - type: checkboxes
    id: priority
    attributes:
      label: Priority
      options:
        - label: Nice to have
        - label: Important
        - label: Critical
