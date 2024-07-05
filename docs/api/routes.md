# StudyCrew API Endpoints Overview

## Group Endpoints

- `/group`
  - **Methods**: GET, POST
  - **Description**: Create or fetch study groups.
  
- `/group/[groupId]`
  - **Methods**: PATCH, DELETE
  - **Description**: Update or delete a specific group.
  
- `/group/[groupId]/materials`
  - **Methods**: GET, POST
  - **Description**: Fetch or add materials to a specific group.
  
- `/group/[groupId]/questions`
  - **Methods**: GET, POST
  - **Description**: Fetch or post questions in a specific group.

- `/group/[groupId]/questions/[questionId]/answers`
  - **Methods**: GET, POST
  - **Description**: Fetch or post answers for q&a in a specific group.

## Settings Endpoints

- `/settings`
  - **Methods**: GET, PATCH
  - **Description**: Retrieve or update user settings.

## User Endpoints

- `/user/profile`
  - **Methods**: GET, PATCH
  - **Description**: Fetch or update user profile information.

## Chat Endpoints

- `/group/[groupId]/chat`
  - **Methods**: GET, POST
  - **Description**: Retrieve or send messages in group chats.

## Data Fetching Endpoints

- `/data`
  - **Methods**: GET
  - **Description**: Fetch various types of data.
