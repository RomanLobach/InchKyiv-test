<template>
  <div class="main">
    <section class="bar">
      <div class="bar-content">
        <div class="nav">
          <router-link to="/">
            <svg class="svg-home" width="34" height="31" viewBox="0 0 36 32" fill="none">
              <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M19.414 0.913912C18.633 0.132864 17.3666 0.132862 16.5856 0.913911L1.41401 16.0855C0.154085 17.3454 1.04642 19.4997 2.82823 19.4997H3.00029V29.9997C3.00029 31.1043 3.89572 31.9997 5.00029 31.9997H13.001C14.1056 31.9997 15.001 31.1043 15.001 29.9997V24.0007C15.001 22.8961 15.8965 22.0007 17.001 22.0007H19.001C20.1056 22.0007 21.001 22.8961 21.001 24.0007V29.9997C21.001 31.1043 21.8965 31.9997 23.001 31.9997H31.0003C32.1049 31.9997 33.0003 31.1043 33.0003 29.9997V19.4997H33.1714C34.9532 19.4997 35.8455 17.3454 34.5856 16.0855L19.414 0.913912Z" fill="#FF5864"/>
            </svg>
          </router-link>
          <button 
          class="restart"
          @click="restart"
          >
            <svg class="svg-reload" width="42" height="32" viewBox="0 0 46 36" fill="none">
              <path d="M7 16.9402C9.5 -1.56111 31.5 -2.0614 37 10.9388M39 18.9385C36.5 37.4398 13.5 37.9401 8 24.9399M12 15.4385L6.5 18.9385L2 14.9385M34 18.9385L39.5 15.9385L44 19.9385" stroke="#FFABB1" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="counter-wrap">
          <p>Параметри:</p>
          <div>
            <div class="counter">
              <svg class="svg-sad" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="url(#paint0_linear_3_152)"/>
                <path d="M16.8348 27.4216C19.258 27.4216 21.2224 25.4572 21.2224 23.0341C21.2224 20.6109 19.258 18.6465 16.8348 18.6465C14.4116 18.6465 12.4473 20.6109 12.4473 23.0341C12.4473 25.4572 14.4116 27.4216 16.8348 27.4216Z" fill="#A1A1A1"/>
                <path d="M43.163 27.4216C45.5861 27.4216 47.5505 25.4572 47.5505 23.0341C47.5505 20.6109 45.5861 18.6465 43.163 18.6465C40.7398 18.6465 38.7754 20.6109 38.7754 23.0341C38.7754 25.4572 40.7398 27.4216 43.163 27.4216Z" fill="#A1A1A1"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.239 44.8507C20.3506 40.4355 24.785 37.4033 29.9978 37.4033C35.2086 37.4033 39.7043 40.4894 41.7617 44.8615L38.307 46.4872C36.8543 43.4004 33.6718 41.2215 29.9978 41.2215C26.3257 41.2215 23.1916 43.3447 21.6835 46.498L18.239 44.8507Z" fill="#A1A1A1"/>
                <defs>
                  <linearGradient id="paint0_linear_3_152" x1="-4.57276e-07" y1="30.219" x2="60" y2="30.219" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9"/>
                    <stop offset="1" stop-color="#A1A1A1"/>
                  </linearGradient>
                </defs>
              </svg>
              <p>{{this.getCounter.counterOne}}</p>
            </div>
            <div class="counter">
              <svg class="svg-happy" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="url(#paint0_linear_0_1826)"/>
                <path d="M16.8368 27.4216C19.26 27.4216 21.2244 25.4572 21.2244 23.0341C21.2244 20.6109 19.26 18.6465 16.8368 18.6465C14.4136 18.6465 12.4492 20.6109 12.4492 23.0341C12.4492 25.4572 14.4136 27.4216 16.8368 27.4216Z" fill="#AB4A62"/>
                <path d="M43.163 27.4216C45.5861 27.4216 47.5505 25.4572 47.5505 23.0341C47.5505 20.6109 45.5861 18.6465 43.163 18.6465C40.7398 18.6465 38.7754 20.6109 38.7754 23.0341C38.7754 25.4572 40.7398 27.4216 43.163 27.4216Z" fill="#AB4A62"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.7591 39.0497C39.6475 43.4649 35.213 46.4971 30.0003 46.4971C24.7895 46.4971 20.2938 43.411 18.2363 39.0389L21.6911 37.4131C23.1437 40.5 26.3262 42.6789 30.0003 42.6789C33.6723 42.6789 36.8065 40.5557 38.3146 37.4023L41.7591 39.0497Z" fill="#AB4A62"/>
                <defs>
                <linearGradient id="paint0_linear_0_1826" x1="0" y1="30" x2="48.0766" y2="6.05761" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FD98BB"/>
                  <stop offset="1" stop-color="#FFB2AD"/>
                </linearGradient>
                </defs>
              </svg>
              <p>{{this.getCounter.counterTwo}}</p>
            </div>
          </div>
          <div class="counter">
            <svg class="svg-heart" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.8788 0C35.1758 0 30.9576 2.075 28 5.4C25.0424 2.075 20.8242 0 16.1212 0C7.22424 0 0 7.45 0 16.625C0 31.9891 28 48 28 48C28 48 56 31.9891 56 16.625C56 7.45 48.7758 0 39.8788 0Z" fill="url(#paint0_linear_0_1842)"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4 17.2911C4 10.0154 9.7384 4 16.9394 4C18.044 4 18.9394 4.89543 18.9394 6C18.9394 7.10457 18.044 8 16.9394 8C12.0659 8 8 12.1042 8 17.2911C8 18.3957 7.10457 19.2911 6 19.2911C4.89543 19.2911 4 18.3957 4 17.2911Z" fill="#8E9AD5"/>
              <defs>
              <linearGradient id="paint0_linear_0_1842" x1="0" y1="24" x2="41.867" y2="-0.325006" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FD98BB"/>
                <stop offset="1" stop-color="#FFB2AD"/>
              </linearGradient>
              </defs>
            </svg>
            <p>{{this.getCounter.counterThree}}</p>
          </div>
        </div>
        <div class="reminded">
          <p>Осталось в очереди:</p>
          <p><span>{{this.localCustomers.length}}</span>/{{this.getCustomersGlobal.length}}</p>
        </div>
      </div>
    </section>
    <section class="field">
      <div class="card-field">
        <div 
        ref="card" 
        class="card"
        v-touch:swipe="swipeHandler"
        >
          <img 
          :src="`./img/${localCustomers[0].photo_path}.jpg`" 
          :srcset="`./img/${localCustomers[0].photo_path}@2x.jpg 2x`"
          :alt="localCustomers[0].name">
          <div class="card-content">
            <h3>{{localCustomers[0].name}}, {{localCustomers[0].age}} {{convertAge}}</h3>
            <p>{{localCustomers[0].description}}</p>
          </div>
          <div 
          ref="stamp" 
          :class="[{ hidden: this.isHidden }, colorClass]" 
          class="stamp"
          >Препарат {{this.medsNumber}}</div>
        </div>        
      </div>
      <div class="bottom-nav">
        <button type="button" v-on:click.stop="event(1)">Препарат 1</button>
        <button type="button" v-on:click.stop="event(2)">Препарат 2</button>
        <button type="button" v-on:click.stop="event(3)">Препарат 3</button>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {gsap} from 'gsap'


export default {
  data() {
    return {
      localCustomers: [],
      medsNumber: '',
      colorClass: '',
      screenWidth: 0,
      screenHeight: 0,
      animationOrientationX: 0,
      animationOrientationY: 0,
      isHidden: true
    }
  },
  computed: {
    ...mapGetters(['getCustomersGlobal', 'getCounter']),

    convertAge() {
      switch (this.localCustomers[0].age % 10) {
        case 1:
          return 'рік';
          break;
        case 2:
        case 3:
        case 4:
          return 'роки';
          break;
        default:
          return 'років';
          break;
      }
    }
  },
  methods: {
    ...mapActions(['loadCustomersGlobal', 'initiateCounter', 'changeCounter']),

    updateViewPort() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    },

    swipeHandler(direction) {
      switch(direction) {
        case 'left':
          this.event(1)
          break;
        case 'top':
          this.event(2)
          break;
        case 'right':
          this.event(3)
          break;
      }
    },
    
    event(number) {
      this.isHidden = !this.isHidden;
      const timeLine = gsap.timeline();

      switch(number) {
        case 1:
          this.changeCounter(this.getCounter.counterOne++)
          this.medsNumber = 1
          this.colorClass = 'purple'
          this.animationOrientationX= -(this.screenWidth*0.8)
          break;
        case 2:
          this.changeCounter(this.getCounter.counterTwo++)
          this.medsNumber = 2
          this.colorClass = 'blue'
          this.animationOrientationY= -(this.screenHeight)
          break;
        case 3:
          this.changeCounter(this.getCounter.counterThree++)
          this.medsNumber = 3
          this.colorClass = 'yellow'
          this.animationOrientationX= (this.screenWidth*0.8)
          break;
      }

      timeLine.from(this.$refs.stamp, {opacity: 0, duration: 0.5})
      timeLine.to(this.$refs.card , {x: this.animationOrientationX, y: this.animationOrientationY, ease: "power1.out", rotation: '45', duration: 0.7})
        .then(() => {
          if(this.localCustomers.length > 1) {
            this.localCustomers.shift()
            timeLine.to(this.$refs.card , {x: 0, y: 0, rotation: '0', duration: 0})
            this.animationOrientationX = 0;
            this.animationOrientationY = 0;
          } else {
            this.$router.push({path: `/final`})
          }
          this.isHidden = !this.isHidden
        })
    },
    restart() {
      this.initiateCounter();
      this.localCustomers = [...this.getCustomersGlobal];
    }
  },
  beforeMount() {
    this.loadCustomersGlobal();
    this.localCustomers = [...this.getCustomersGlobal];
    this.initiateCounter();
    this.updateViewPort();
  }  
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 64em;
  overflow: hidden;
  font-weight: light;
  display: flex;
}
.bar {
  width: 30em;
  height: 100%;
  position: relative;
}
.bar::before {
  content: '';
  position: absolute;
  height: inherit;
  width: inherit;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.7;
}
.bar-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.nav {
  display: flex;
  align-items: flex-start;
  padding-top: 4.38em;
  padding-left: 3.13em;
  margin-bottom: 18.13em;
}
.nav a, .restart {
  width: 4.38em;
  height: 4.38em;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}
.restart {
  width: 5.25em;
  height: 5.25em;
  margin-left: 2.38em;
}
.counter-wrap {
  padding-left: 2.5em;
}
.counter-wrap div {
  display: flex;
}
.counter-wrap p:first-child {
  font-weight: bold;
  font-size: 2.25em;
  line-height: 1.23em;
  color: #FFFFFF;
  margin-bottom: 0.84em;
}
.counter-wrap .counter:last-child {
  margin: 0 auto;
}
.counter-wrap .counter:first-child {
  margin-right: 1.25em;
}
.reminded {
  text-align: center;
}
.counter {
  padding: 0.63em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 2.5em;
  width: 11.88em;
  height: 5em;
  margin-bottom: 2.5em;

  box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
}
.counter p {
  margin: 0 auto;
  font-weight: bold;
  font-size: 3em;
  line-height: 1.23em;
  display: flex;
  align-items: center;
  text-align: center;
  color: #424242;
}
.reminded {
  margin-top: auto;
  width: 13.3em;

  font-weight: light;
  font-size: 2.25em;
  line-height: 1.23em;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;

  display: flex;
  flex-direction: column;
  padding: 0.7em 0;

  background-color: rgba($color: white, $alpha: 0.15);
}
.reminded p:last-child {
  font-size: 1.25em;
  line-height: 1.23em;
}
.reminded p span {
  font-weight: bold;
}
.field {
  height: 100%;
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.card {
  width: 33.75em;
  height: 36.88em;
  overflow: hidden;
  border-radius: 2.5em;
  background-color: white;
  filter: drop-shadow(0px 0.25em 0.25em rgba(0, 0, 0, 0.25));
  box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  margin-top: 8.13em;

  position: relative;
}
.card img {
  width: 100%;
  height: auto;
}
.card-content {
  padding: 1.25em 3.75em 5em 3.75em;
}
.card-content h3 {
  font-weight: bold;
  font-size: 2em;
  line-height: 1.22em;
  color: #8E9AD5;
}
.card-content p {
  font-size: 1.5em;
  line-height: 1.2em;
  color: #424242;
}

.stamp {
  font-weight: bold;
  font-size: 3.25em;
  line-height: 1em;
  position: absolute;
  top: 6em;
  left: 2em;
  transform: rotate(-15deg);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2em solid black;
  width: 7em;
  height: 1.8em;
}

.purple {
  color: #8049C7;
  border-color: #8049C7;
}

.blue {
  color: #169AE4;
  border-color: #169AE4;

}
.yellow {
  color: #FFBF02;
  border-color: #FFBF02;
}

.hidden {
  display: none;
}
.bottom-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 4em;
}

.bottom-nav button {
  font-weight: bold;
  font-size: 1.75em;
  line-height: 1.22em;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;

  border: none;
  border-radius: 100px;
  background: linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%);

  padding: 1em 2.22em;
}
.bottom-nav button:first-child {
  background: linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%);
}
.bottom-nav button:last-child {
  background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
}
.svg-home {
  height: 2em;
  width: 2em;
}
.svg-reload {
  height: 2em;
  width: 2.63em;
}
.svg-sad, .svg-happy {
  height: 3.75em;
  width: 3.75em;
}
.svg-heart {
  height: 3.5em;
  width: 3em;
}

@media (min-width: 2048px) {
  .main {
    font-size: 1.5em;
  }

  .restart {
    font-size: 0.85em;
  }

  .field {
    width: 65%;
  }
}
</style>