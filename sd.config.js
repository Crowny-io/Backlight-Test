const tokenCategories = ['colors'];

const tokenFilter = (cat) => (token) => token.attributes.category === cat;
const generateFilesArr = (tokensCategories) => {
  return tokensCategories.map((cat) => ({
    filter: tokenFilter(cat),
    destination: `${cat}/_${cat}.scss`,
    format: 'css/variables',
  }));
};

export default {
  source: ['**/*.tokens.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: '/',
      files: generateFilesArr(tokenCategories),
    },
  },
};
