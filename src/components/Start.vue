<template>
  <section class="home">
    <div class="circle">
      <p>Добро пожаловать в игру</p>
      <h1><span>Помоги</span><span>Фармацевту</span></h1>
      <router-link class="btn" to="/main">Начать</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Start'
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 64em;
  overflow: hidden;
  background-image: url('../assets/images/start_doctor.jpg');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;
  font-weight: light;
}

.home::before {
  content: '';
  display: inline-flex;
  width: 100%;
  height: 100%;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.35;
}

.circle {
  width: 54em;
  height: 54em;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  background-clip: border-box;
  border-radius: 50%;
  position: absolute;
  left: 6.8em;
  top: -1.8em;
  padding-top: 17.5em;
  padding-left: 11.6em;
}

p {
  font-weight: medium;
  font-size: 2.19em;
  line-height: 1.17em;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.85em;
}

h1 {
  font-style: bold;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 3.75em;
  line-height: 1.1em;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 2em;
}

h1 span:last-child {
  font-size: 1.17em;
  line-height: 1.1em;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
}

.btn {
  font-weight: bold;
  font-size: 2.25em;
  line-height: 1.47em;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #8E9AD5;
  background-color: #FFFFFF;
  border-radius: 2.8em;
  padding: 0.64em 3.5em;
  margin-left: 2.23em;
  /*в макете шрифт Monserrat, я решил оставить на этой кнопке глобальный шрифт, надеюсь не ошибка*/
}

@media (min-resolution: 144dpi), (min-resolution: 1.5dpx) {
  .home {
    background-image: url('../assets/images/start_doctor@2x.jpg');
  }
}

@media (min-width: 2048px) {
  .home {
    font-size: 1.5em;
  }

  @media (min-resolution: 144dpi), (min-resolution: 1.5dpx) {
    .home {
      background-image: url('../assets/images/start_doctor@2x.jpg');
    }
  }
}
</style>