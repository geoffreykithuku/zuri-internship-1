
# REST API for Managing Persons

This is a simple REST API for managing information about persons. It allows you to create, read, update, and delete person records. You can also retrieve person details by ID.


## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.


### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-api-project.git

2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   npm start
   ```
4. Open http://localhost:3000 in your browser to view the API.

## Usage

### Create a Person

To create a person, send a `POST` request to `/api/persons` with the following information:

- `name`: The person's first name.
- `age`: The person's age.

For example:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","age":42}' http://localhost:3000/api/persons
```

### Get All Persons

To get a list of all persons, send a `GET` request to `/api/persons`.

For example:

```bash
curl http://localhost:3000/api/persons
```

### Get a Person by ID

To get a person by ID, send a `GET` request to `/api/persons/:id`, where `:id` is the person's ID.

For example:

```bash
curl http://localhost:3000/api/persons/1
```

### Update a Person

To update a person, send a `PUT` request to `/api/persons/:id`, where `:id` is the person's ID. Include the following information in the request:

- `name`: The person's first name.
- `age`: The person's age.

For example:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name":"John Doe","age":42}' http://localhost:3000/api/persons/1
```

### Delete a Person

To delete a person, send a `DELETE` request to `/api/persons/:id`, where `:id` is the person's ID.

For example:

```bash
curl -X DELETE http://localhost:3000/api/persons/1
```

## Roadmap

- Add support for more fields, such as last name, email address, and phone number.

## Contributing

To contribute, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.


