<template>
  <div class="mx-4 mt-3">
    <p>
      My name is Diana Sormani and I am a Software Engineer with over 15 years
      of experience developing software. I am originally from Uruguay! Love my
      country. Although I'm living in the Netherlands.
    </p>
    <p>
      Currently I am focusing on Front-End development and I am loving it. I
      have been working a lot with
      <a href="(https://vuejs.org/">Vue</a> (both Vue.js and Vue 3), a lot of
      CSS and ES6. I also worked with
      <a href="https://graphql.org/">GraphQL</a>
      as well as REST services. I like researching new techonolgies and checking
      out what is out there and what other people is doing.
    </p>
    <p>
      I also have a lot of experience with automated testing for Front-End.
      Particularly with
      <a href="https://jestjs.io/">Jest</a> and
      <a href="https://vue-test-utils.vuejs.org/">Vue Test Utils</a>. For e2e
      testing, I've played around with Cypress and WebdriverIO but my clear
      preference is <a href="https://testcafe.io/">TestCafé</a>.
      <br />
      In my humble opinion, automated testing is super useful and should be a
      MUST. But is not yet able to replace manual testing... So that still needs
      to be done.
    </p>
    <p>
      I normally work on Agile environments, so I am familiar with the process
      and I follow and promote GitFlow.
      <br />
      I also have experience setting up CI/CD pipelines on GitLab, although to
      be honest is not my favorite part ;)
    </p>
    <p>Anyhow, if you are interested on my work, check out my Linkedin page.</p>

    <div class="d-flex align-items-center justify-content-center mt-6">
      <b-avatar
        variant="info"
        src="../../assets/diana-avatar.png"
        class="mr-3"
        size="4em"
        alt="Diana Sormani"
      />

      <font-awesome-icon
        icon="fa-brands fa-linkedin"
        size="3x"
        class="icons icons__linkedin mx-2"
        @click="goToLinkedin()"
      />

      <font-awesome-icon
        icon="fa-brands fa-github"
        size="3x"
        class="icons icons__github mx-2"
        @click="goToGithub()"
      />
    </div>
    <div class="d-flex align-items-center justify-content-center my-2">
      <span class="name">Diana Sormani</span>
    </div>
  </div>
</template>

<script setup>
const goToLinkedin = () => {
  window.open("https://www.linkedin.com/in/dianasormani/");
};
const goToGithub = () => {
  window.open("https://github.com/diasor/");
};
</script>

<style lang="scss" scoped>
@import "./../../assets/colors.scss";

.icons {
  cursor: pointer;

  &__linkedin {
    color: #0b65c2;
  }

  &__github {
    color: gray;
  }
}

.name {
  font-family: "Lobster";
  font-size: 2rem;
  color: $titleColor;
}
</style>
