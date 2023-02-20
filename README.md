# jadidomashno

## Links

- [Јади домашно](https://jadi-domashno.andrijan.dev/)

## Built with

- TypeScript
- React
- Next.js
- Tailwind

### Some other tools that made my work easier

- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Headless UI](https://headlessui.com/react/)
- [Radix UI - React Slider](https://www.radix-ui.com/docs/primitives/components/slider)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hook-form.com/)
- [Class Variance Authority](https://github.com/joe-bell/cva)
- [Splide](https://splidejs.com/)
- [Day.js](https://day.js.org/)
- [SWR](https://swr.vercel.app/)
- [Faker](https://fakerjs.dev/)
- [React toastify](https://www.npmjs.com/package/react-toastify)

## What I learned

- How hard it is to work without a proper design system and properly fleshed out design. It is impossible to produce code of good quality when we start working with such a hindrance at the very beginning of the project because we cannot make our code reusable (global variables, components). Instead, we need to write code on the fly with arbitrary values and components, which makes both our UI and code inconsistent. 
- How hard it is to organize code in a larger project. Some questions still remain unanswered: What should be a component and what should not be a component? Should the component get its own file or be put with another one? Should components be grouped in different folders or be put in one folder? (We probably need to move things around until it feels right, just like Dan Abramov said)
- How to write a Node.js script for generating fake data. Although the code needs to be optimized and written in TypeScript, I am pretty satisfied how effective it proved to be, as it provides reusability and scalability.
- How to write a Node.js APIs with static JSON files based on serverless functions in Next.js. They are probably not the most performant APIs out there, but they were the first couple of APIs I wrote with filtering functionality, pagination etc.
- How much I want to start using the app directory in Next.js 13 (loaders, fetching data in components, shared layouts).
- How great CVA is to build reusable components with.
- How to use a state management library. To be more exact, Zustand. I am not exactly sold on state management libraries at the moment. It feels like additional overhead and syntax that needs to be learned. I used it for implementing the shopping cart functionality (could have easily been achieved with a context), but I wanted to try out something new.

## Starting the project

To start the project in development mode, run the following command:

```bash
$ pnpm dev
```

## Helper scripts

### Generating data

To generate random data for the app in JSON, run the following command:

```bash
$ pnpm run generate-data
```

### Converting images

Install imagemagick:

```bash
$ sudo apt-get install imagemagick
```

To convert images from .avif to .jpg and maintain all-rightish quality:

```bash
# Make sure we are in the target folder or specify the exact location!

mogrify -quality "80%" -format jpg *.avif
```
