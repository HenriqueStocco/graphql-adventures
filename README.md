# GraphQL Adventures
Learning how to work graphql apis building a note block (Full CRUD) + User session with JWT + Password hash

- Principes
- Basic
- Running server
- Using with a database

## Techs
TypeORM + Postgres container (Docker)
GraphQL
Hono API(or Fastify) - as HTTP Server provider

## Routes
#### NOTES

**GET**    -> /notes
**GET**    -> /notes/:noteId
**POST**   -> /notes/create
**PUT**    -> /notes/update
**PATCH**  -> /notes/:noteId/title
**PATCH**  -> /notes/:noteId/description
**DELETE** -> /notes/all
**DELETE** -> /notes/:noteId

#### USERS

**POST** -> /register
**POST** -> /login
**GET**  -> /logout

## Structure
```bash
<root>
|-- src/
|   |-- database/
|   |-- graphql/
|   |-- router/
|   |-- middlewares/
|   |-- server.ts
```
