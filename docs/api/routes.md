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

- `/group/[groupId]/folders`
  - **Methods**: GET, POST
  - **Description**: Fetch or add folders to a specific group.
  
- `/group/[groupId]/questions`
  - **Methods**: GET, POST
  - **Description**: Fetch or post questions in a specific group.

- `/group/[groupId]/questions/[questionId]/answers`
  - **Methods**: GET, POST
  - **Description**: Fetch or post answers for q&a in a specific group.

## User Endpoints

- `/user/[userId]/profile`
  - **Methods**: GET, PATCH
  - **Description**: Fetch or update user profile information.

- `/user/[userId]/settings`
  - **Methods**: GET, PATCH
  - **Description**: Retrieve or update user settings.

- `/user/[userId]/notifications`
  - **Methods**: GET, PATCH
  - **Description**: Fetch all the notifications.

- `/user/[userId]/notifications/[category]`
  - **Methods**: GET, PATCH
  - **Description**: Fetch the notifications based on category.

## Chat Endpoints

- `/group/[groupId]/chat`
  - **Methods**: GET, POST
  - **Description**: Retrieve or send messages in group chats.
