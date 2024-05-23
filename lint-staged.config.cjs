module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // This will lint and format TypeScript and JavaScript files
  "**/*.(ts|tsx|js|jsx)": (filenames) => [
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": (filenames) => `npx prettier --write ${filenames.join(" ")}`,

  // this will lint and format CSS, SCSS
  "**/*.(css|scss|tailwind.css)": (filenames) => `npx stylelint --fix ${filenames.join(" ")}`,
};
