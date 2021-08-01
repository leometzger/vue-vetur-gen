<template>
  <div class="home-container">
    <div class="home-intro">
      <h1>Vue Vetur Generator</h1>
      <p style="padding-bottom: 16px;">
        Vetur is the most used Vue tooling for VS Code. When you create a
        component library Vue vetur generator is a library that generate the
        <strong>tags.json</strong> and <strong>attributes.json</strong>
        files automaticly, based on JS Docs.
      </p>
      <div style="margin-top: 10px;">
        <a class="home-action-button" href="/guide/">Get started</a>
      </div>
    </div>
    <img src="/vue-vetur-generator-illustration.svg" />
  </div>
</template>

<style scoped>
.home-container {
  display: grid;
  grid-template-columns: minmax(30%, 500px) 40%;
  justify-content: center;
  column-gap: 10px;
  padding: 30px;
  width: calc(100vw - 100px);
  position: absolute;
  left: 0;
  top: 10%;
  bottom: 0;
}

.home-intro {
  text-align: center;
  margin-bottom: 1rem;
}

.home-action-button {
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
</style>
