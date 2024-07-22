# Contributing to StudyCrew

Thank you for considering contributing to StudyCrew! We welcome contributions of all kinds, including bug reports, feature requests, and code contributions.

## Table of Contents

- [Contributing to StudyCrew](#contributing-to-studycrew)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Development Setup](#development-setup)
  - [Submitting Changes](#submitting-changes)
  - [Development Resources](#development-resources)
  - [Community](#community)
  - [Code of Conduct](#code-of-conduct)

## Getting Started

1. **Fork the repository:**

    Click the "Fork" button at the top right of the repository page to create a copy of the repository under your GitHub account.

2. **Clone your fork:**

    ```bash
    git clone https://github.com/your-username/repo-name.git
    cd repo-name
    ```

3. **Add the upstream repository:**

    ```bash
    git remote add upstream https://github.com/StudyCrew/StudyCrew.git
    ```

## Development Setup

1. **Install dependencies:**

    This project uses `pnpm` for package management. If you don't have `pnpm` installed, you can install it using `npm`:

    ```bash
    npm install -g pnpm
    ```

    Install the project dependencies:

    ```bash
    pnpm install
    ```

2. **Grab the environment variables:**

    StudyCrew uses Supabase as its primary data storage. Ensure you have a local instance or a free Supabase subscription.

    For authentication, StudyCrew utilizes Supabase. To set up your local instance, you'll need a Supabase account. Once you've created an account, obtain your credentials and place them in the env.local file:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=https://iqbtyidkfhmqokxopxhf.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxYnR5aWRrZmhtcW9reG9weGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NTI4NDgsImV4cCI6MjAzNjAyODg0OH0.eo6MVgRbXbdpdUlj4YQo4NJ6D0kE2HRQaLO4VOAOMd4
    ```

3. **Start the development server:**

    ```bash
    pnpm dev
    ```

    This will start the Next.js development server. Open your browser and navigate to `http://localhost:3000` to see the application running.

4. **Run Prettier:**

    Format the code before you make a pull-request to the main repo by:

    ```bash
    pnpm format
    ```

5. **Build the project:**

    To build the project for production, run:

    ```bash
    pnpm build
    ```

## Running the Project using [Docker](https://www.docker.com/get-started/)

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
5. **Access the Application:** Open your browser and navigate to http://localhost:3000 to see the running application.

To stop the container, run `docker stop studycrew_test` or `docker stop studycrew_prod` respectively.


## Submitting Changes

1. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

2. **Make your changes:**

    Make sure your code follows the project's coding standards and includes relevant documentation and tests.

3. **Commit your changes:**

    ```bash
    git add .
    git commit -m "Add your commit message here"
    ```

4. **Push to your fork:**

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Create a Pull Request:**

    Go to the original repository and create a pull request from your fork. Provide a clear and descriptive description for your pull request.

## Development Resources

- **Design Guidelines:** [Figma Documentation](https://www.figma.com/file/BJG9JmbThqdp8p8IWs7gNG/StudyCrew-Prototypes-(Copy)?type=design&node-id=8%3A98&mode=design&t=uwHVDf3Ihi12lro3-1)
- **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Documentation:** [https://tailwindcss.com/](https://tailwindcss.com/)
- **Shadcn-UI Documentation:** [https://ui.shadcn.com/](https://ui.shadcn.com/)
- **pnpm Documentation:** [https://pnpm.io](https://pnpm.io)

## Community

- **Discord Channel:** Join our community on [Discord](https://discord.gg/Q93eWC8k)
- **Issue Tracker:** Report bugs or request features on our [GitHub Issues](https://github.com/StudyCrew/StudyCrew/issues)

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the expectations for contributors and the steps for reporting unacceptable behavior.

---

Thank you for contributing to StudyCrew!