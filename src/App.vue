<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@font-face {
    font-family: 'Avenir';
    src: url('./assets/fonts/AvenirNextCyr/avenirnextcyr-bold-webfont.woff2') format('woff2'),
        url('./assets/fonts/AvenirNextCyr/avenirnextcyr-bold-webfont.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir';
    src: url('./assets/fonts/AvenirNextCyr/avenirnextcyr-light-webfont.woff2') format('woff2'),
        url('./assets/fonts/AvenirNextCyr/avenirnextcyr-light-webfont.woff') format('woff');
    font-weight: light;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir';
    src: url('./assets/fonts/AvenirNextCyr/avenirnextcyr-medium-webfont.woff2') format('woff2'),
        url('./assets/fonts/AvenirNextCyr/avenirnextcyr-medium-webfont.woff') format('woff');
    font-weight: regular;
    font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  width: fit-content;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  color: black;
}
</style>
