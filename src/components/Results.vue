<template>
  <div class="final">
    <section class="content">
      <div class="nav">
        <router-link to="/">
          <svg class="svg-home" viewBox="0 0 36 32" fill="none">
            <path opacity="1" fill-rule="evenodd" clip-rule="evenodd" d="M19.414 0.913912C18.633 0.132864 17.3666 0.132862 16.5856 0.913911L1.41401 16.0855C0.154085 17.3454 1.04642 19.4997 2.82823 19.4997H3.00029V29.9997C3.00029 31.1043 3.89572 31.9997 5.00029 31.9997H13.001C14.1056 31.9997 15.001 31.1043 15.001 29.9997V24.0007C15.001 22.8961 15.8965 22.0007 17.001 22.0007H19.001C20.1056 22.0007 21.001 22.8961 21.001 24.0007V29.9997C21.001 31.1043 21.8965 31.9997 23.001 31.9997H31.0003C32.1049 31.9997 33.0003 31.1043 33.0003 29.9997V19.4997H33.1714C34.9532 19.4997 35.8455 17.3454 34.5856 16.0855L19.414 0.913912Z" fill="#FFFFFF"/>
          </svg>
        </router-link>
      </div>
      <div class="results">
        <div class="numbers">
          <div>
            <p>{{persentHandler(this.getCounter.counterOne)}}%</p>
            <p>Препарат 1</p>
          </div>
          <div>
            <p>{{persentHandler(this.getCounter.counterTwo)}}%</p>
            <p>Препарат 2</p>
          </div>
          <div>
            <p>{{persentHandler(this.getCounter.counterThree)}}%</p>
            <p>Препарат 3</p>
          </div>
        </div>
        <div class="prescription">
          <p>Ваш результат:</p>
          <h2>«Что я здесь делаю?»</h2>
          <p>Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов. </p>
        </div>
        <button class="retry" @click="restart">Попробовать еще</button>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCounter']),
  },
  methods: {
    ...mapActions(['initiateCounter']),
  
    persentHandler(number) {
      return Math.round((number / 5) * 100)
    },

    restart() {
      this.initiateCounter()
      this.$router.push({path: `/main`})
    }
  },
}
</script>

<style scoped lang="scss">
.final {
  width: 100%;
  height: 64em;
  position: relative;
  overflow: hidden;
}

.final:before {
  content: '';
  position: absolute;
  background-image: url('../assets/images/final_doctors.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  top: -13.56em;
  right: -10.93em;
  width: 51.25em;
  height: 51.25em;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 2.5em #C4C4C4;
}

.final:after {
  content: '';
  position: absolute;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.25;
  top: -13.56em;
  right: -10.93em;
  width: 51.25em;
  height: 51.25em;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 2.5em #C4C4C4;
}
.nav a {
  display: flex;
  justify-content: center;
  padding-top: 1em;
  width: 4.38em;
  height: 4.38em;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 50%;
  margin-top: 4.38em;
  margin-left: 3.125em;
  margin-bottom: 7.5em;
}

.results {
  width: 36.25em;
  margin-left: 8.13em;
}

.numbers {
  display: flex;
  justify-content: space-around;
  border-bottom: 0.125em solid #D9D9D9;
  padding-bottom: 3.13em;
}

.numbers div {
  font-weight: bold;
  text-align: center;
  line-height: 1.25em;
  color: #424242;
}

.numbers div p:first-child {
  font-weight: 400;
  font-size: 3em;
  line-height: 1.25em;
  color: #424242;
}

.prescription {
  padding-top: 2.5em;
  margin-bottom: 15.63em;
}

.prescription p:first-child {
  font-weight: 400;
  font-size: 2em;
  line-height: 1.1em;
  letter-spacing: 0.02em;
  color: #8E9AD5;
}

.prescription p:last-child {
  font-weight: 400;
  font-size: 1.5em;
  line-height: 1.25em;
  color: #424242;
}

h2 {
  font-weight: bold;
  font-size: 2.5em;
  line-height: 1.1em;
  letter-spacing: 0.02em;
  color: #8E9AD5;

  margin-bottom: 0.25em;
}

.retry {
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1.25em;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
  border-radius: 4.16em;
  padding: 0.625em 1.05em;
  border: none;
}
.svg-home {
  height: 2em;
  width: 2em;
}

@media (min-resolution: 144dpi), (min-resolution: 1.5dpx) {
  .final:before {
    background-image: url('../assets/images/final_doctors@2x.jpg');
  }
}

@media (min-width: 2048px) {
  .final, .numbers div {
    font-size: 1.5em;
  }
  .numbers div p:first-child {
    font-size: 2em;
  }
  .numbers div p:last-child {
    font-size: 0.67em;
  }

  @media (min-resolution: 144dpi), (min-resolution: 1.5dpx) {
    .final:before {
      background-image: url('../assets/images/final_doctors@2x.jpg');
    }
  }
}
</style>