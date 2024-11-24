# Using `ssdev` on Windows

Using ssdev on Windows system is best achieved using WSL. Please follow the steps below
to achieve a performant development experience. Also, we recommend VSCode, as it comes
with an extension for WSL.

1. Set up WSL and install a distro ([instructions by Microsoft](https://learn.microsoft.com/de-de/windows/wsl/setup/environment#set-up-your-linux-username-and-password))
2. Open a Terminal in your WSL Distro and install Node & npm *(& npx)* ([instructions by Microsoft](https://learn.microsoft.com/de-de/windows/dev-environment/javascript/nodejs-on-wsl))
3. install the WSL-extension in VSCode
4. [Install Docker for Desktop](https://www.docker.com/products/docker-desktop)
5. install ssdev inside the WSL environment

The best approach is treating the WSL distro as a remote server and using it to develop your projects.
This means that it is best practice to use git inside the distro. You can open any project in VSCode 
by typing `code .` in the respective directory.

