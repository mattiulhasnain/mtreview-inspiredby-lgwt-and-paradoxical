name: Bug Report
description: Report a bug or issue
title: "[BUG] "
labels: ["bug", "needs-triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for reporting a bug! Please fill out the form below to help us understand the issue.

  - type: checkboxes
    id: checklist
    attributes:
      label: Verification
      options:
        - label: I have searched existing issues
          required: true
        - label: I am using the latest version
          required: true

  - type: textarea
    id: describe-bug
    attributes:
      label: Describe the bug
      description: A clear description of what the bug is
      placeholder: The search feature is not working when...
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: How to reproduce the issue
      placeholder: |
        1. Go to...
        2. Click on...
        3. See error...
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      placeholder: What should happen instead

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots
      description: Add screenshots if helpful

  - type: textarea
    id: environment
    attributes:
      label: Environment
      placeholder: |
        - OS: Windows 10, macOS, Linux
        - Browser: Chrome 120, Firefox, Safari
        - Device: Desktop, Mobile (iPhone, Android)
    validations:
      required: true

  - type: textarea
    id: logs
    attributes:
      label: Browser Console Errors
      description: Paste any errors from DevTools console (F12)

  - type: textarea
    id: additional
    attributes:
      label: Additional Context
      description: Any other relevant information
