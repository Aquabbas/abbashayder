/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

// .prettierrc.mjs
/** @type {import("prettier").Config} */
// export default {
//     plugins: ['prettier-plugin-astro'],
//     overrides: [
//         {
//             files: '*.astro',
//             options: {
//                 parser: 'astro',
//             },
//         },
//     ],
//     // Add these options:
//     semi: true,
//     singleQuote: true,
//     tabWidth: 2,
//     trailingComma: 'es5',
//     printWidth: 100,
//     // Astro-specific option
//     astroAllowShorthand: true,
// };
