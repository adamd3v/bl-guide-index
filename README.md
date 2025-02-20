# BONELAB Modding Guides

This repository holds user-created guides for modding BONELAB, as well as the source-code for deploying to the website hosted via GitHub pages.

## Contributing

> 🚧 This section needs work :P

If you're unsure about the process for contributing on GitHub, [check out this guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for information about creating pull requests.

Furthermore, if you're unsure about formatting, you can use [GitHub's guidelines](https://docs.github.com/en/contributing) to contribute to their documentation as a reference point. It contains good practices, style guides and more.

## Previewing the website Locally

We use [Quartz](https://quartz.jzhao.xyz) to take our documentation and convert it to a static website. It turns markdown files into pages, and also supports extra fancy features, such as `#tags` and backlinks, that come with the text-editor [Obsidian](https://obsidian.md).

 [Node.js](https://nodejs.org/en) needs to be installed on your machine to use Quartz - go grab the latest version if you haven't already.
 
Then, in your terminal of choice (such as 'Terminal' or 'Command Prompt' on Windows), enter the following commands line by line to initialise everything:

```sh
git clone https://github.com/Lava-Pals/bl-unofficial-docs.git
cd bl-unofficial-docs
npm i
npx quartz create
```

This will setup Quartz on your machine, to run the website locally, run this command:

```sh
npx quartz build --serve
```

This will start a local web server to run your Quartz on your computer. Open a web browser and visit http://localhost:8080/ to view it!

If you want to learn more about Quartz, [check out its docs](https://quartz.jzhao.xyz).
