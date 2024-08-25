<img src="public/assets/repo-banner.svg">

<div align="center">
  <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/StudyCrew/StudyCrew?style=flat&color=red">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/StudyCrew/StudyCrew?style=flat&color=lightgreen">
</div>

<br />

Welcome to StudyCrew's GitHub repository! This repository serves as the central hub for [www.studycrew.world](https://www.studycrew.world)'s source code, assets, and content.

## Mission

StudyCrew is committed to making education accessible, collaborative, and engaging through innovative learning platforms. Our vision is to provide every student with the resources and community they need to reach their full potential. If you have any questions or inquiries, feel free to reach out to us at [development@studycrew.world](mailto:development@studycrew.world).

## Getting Started

To begin, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/studycrew/studycrew
```

### Setting up Supabase

StudyCrew uses Supabase as its primary data storage. Ensure you have a local instance or a free Supabase subscription.

### Setting up Authentication with Supabase

For authentication, StudyCrew utilizes Supabase. To set up your local instance, you'll need a Supabase account. Once you've created an account, obtain your credentials and place them in the env.local file:

```js
NEXT_PUBLIC_SUPABASE_URL=https://iqbtyidkfhmqokxopxhf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxYnR5aWRrZmhtcW9reG9weGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NTI4NDgsImV4cCI6MjAzNjAyODg0OH0.eo6MVgRbXbdpdUlj4YQo4NJ6D0kE2HRQaLO4VOAOMd4
```

## Running the Project Locally

### Using Docker

This project is Dockerized for easy development and deployment. Follow the instructions below to get started.

**Make sure you have Docker installed and running on your system.**

#### Quick Start

1. **Fork this Repository**

2. **Clone the Repository to local:**

    ```bash
   git clone <your-repository-url>
   cd <your-repository-name>
   ```

3. **Build the Image:**

    ```bash
    # (Development)
    docker build . --target development -t studycrew_test:dev
    # (Production)
    docker build . --target production -t studycrew_test:prod
    ```

4. **Run the Image:**

    ```bash
    # (Development)
    docker run -v .:/usr/src/app -p 3000:3000 --name studycrew_test studycrew_test:dev
    # (Production)
    docker run -p 3000:3000 --name studycrew_prod studycrew_test:prod
    ```

5. **Access the Application:** Open your browser and navigate to <http://localhost:3000> to see the running application.

To stop the container, run `docker stop studycrew_test` or `docker stop studycrew_prod` respectively.

### Without Docker

1. `pnpm i` the required dependencies.

2. `pnpm dev` to launch the development server.

## Contributing

Interested in contributing? Check out our contribution guide to learn how you can get involved and contribute to StudyCrew's development.

When you find an issue that you want to work on, just leave a comment so we can assign it to you! Feel free to tag @JacobHeldt so we notice your comment faster.

Before contributing please read the style guidelines from the [Figma documentation](https://www.figma.com/file/BJG9JmbThqdp8p8IWs7gNG/StudyCrew-Prototypes-(Copy)?type=design&node-id=8%3A98&mode=design&t=uwHVDf3Ihi12lro3-1) carefully.

If you have to create a new component, please study existing components so these are kept consistent with the rest of the project.

If you are unsure about anything, just ask! We are more than happy to help and would love to have you are part of the community. 😊

## Developer Hours

StudyCrew hosts regular meetings for contributors and team members to discuss upcoming changes, planned updates, and overall strategy. These 'developer hours' are held on our Discord server, where specific timings will be announced.

## Join Our Community

[Join our Discord community](https://discord.gg/fxd6uHbdBt) for discussions, support, and more!

Thank you for exploring our repository! We're excited to welcome you to our community.
