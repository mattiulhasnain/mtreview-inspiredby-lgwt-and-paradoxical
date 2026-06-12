# API Documentation

## Overview
MUHIUM & ZAMIL VU Hub API provides endpoints for managing exam papers, reviews, and course information.

**Base URL:** `http://localhost:3000/api`

---

## Authentication
Currently not required. Future versions will include JWT authentication.

---

## Endpoints

### Papers

#### Get All Papers
```
GET /papers
```
**Query Parameters:**
- `course` (string, optional) - Filter by course code
- `semester` (string, optional) - Filter by semester
- `sort` (string, optional) - Sort by: `newest`, `popular`, `rating`
- `page` (number, optional) - Pagination (default: 1)
- `limit` (number, optional) - Items per page (default: 20)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "paper_001",
      "courseCode": "CS101",
      "courseName": "Introduction to Programming",
      "semester": "Spring 2026",
      "uploadedBy": "user_123",
      "uploadedAt": "2026-05-15",
      "downloads": 145,
      "rating": 4.5,
      "fileUrl": "/files/CS101_spring2026.pdf"
    }
  ],
  "pagination": {
    "current": 1,
    "total": 50,
    "hasNext": true
  }
}
```

#### Get Paper by ID
```
GET /papers/:id
```

**Response:**
```json
{
  "success": true,
  "data": { /* paper object */ }
}
```

#### Create Paper
```
POST /papers
```

**Request Body:**
```json
{
  "courseCode": "CS101",
  "courseName": "Introduction to Programming",
  "semester": "Spring 2026",
  "fileUrl": "/files/CS101_spring2026.pdf",
  "description": "Comprehensive midterm exam"
}
```

#### Update Paper
```
PUT /papers/:id
```

#### Delete Paper
```
DELETE /papers/:id
```

---

### Courses

#### Get All Courses
```
GET /courses
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "course_001",
      "code": "CS101",
      "name": "Introduction to Programming",
      "department": "Computer Science",
      "credits": 3,
      "paperCount": 45
    }
  ]
}
```

#### Search Courses
```
GET /courses/search?q=programming
```

---

### Reviews

#### Get Reviews for Paper
```
GET /papers/:paperId/reviews
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "review_001",
      "rating": 5,
      "comment": "Excellent midterm paper!",
      "helpful": 23,
      "author": "Anonymous",
      "createdAt": "2026-06-10"
    }
  ]
}
```

#### Create Review
```
POST /papers/:paperId/reviews
```

**Request Body:**
```json
{
  "rating": 5,
  "comment": "Great paper with detailed solutions",
  "author": "user_123"
}
```

---

### Statistics

#### Get Course Statistics
```
GET /stats/courses/:courseCode
```

**Response:**
```json
{
  "success": true,
  "data": {
    "courseCode": "CS101",
    "totalPapers": 45,
    "totalReviews": 234,
    "averageRating": 4.3,
    "mostDownloaded": "paper_001",
    "trends": {
      "thisMonth": 12,
      "thisYear": 89
    }
  }
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Invalid course code format"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Paper not found"
}
```

### 500 Server Error
```json
{
  "success": false,
  "error": "Internal server error"
}
```

---

## Rate Limiting

- 100 requests per minute per IP
- Header: `X-RateLimit-Remaining`

---

## Webhooks

Planned for future versions:
- Paper submitted
- Review posted
- Download milestone reached

---

## SDK/Client Libraries

Planned:
- JavaScript client
- Python client
- React component library

---

## Changelog

**v1.0.0** - Initial API release
- Papers endpoints
- Courses endpoints
- Reviews endpoints
- Basic search

**v1.1.0** (Planned) - Enhanced features
- Authentication
- User endpoints
- Advanced filtering
- Webhooks

---

## Support

For API issues:
1. Check this documentation
2. Search existing issues
3. Open a new issue with details
4. Email: api-support@muhium-zamil.dev

---

Last updated: June 2026
