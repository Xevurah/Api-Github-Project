# Github API

Obtain data from an user inserted as a parameter of the API of Github.

## Instructions

### Installation

```
npm install api-github-project
```

### Usage

```
const api = await import('./index.js')

api.obtainUserData('Xevurah')
    .then(
        result => console.log(result))
    .catch(
        error=> console.log(error));
```
