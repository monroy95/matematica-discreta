<template>
  <div class="hello container texto mt-4">
    <div class="row">
      <div class="col-md-12">
        <h2>Algoritmo de Euclides<span>&#160;</span></h2>
      </div>
      <div class="col-md-12 mt-4">
        <p class="texto justificar">
          <img
            class="me-2"
            alt="Ecuclides"
            src="../assets/img/Euclides.png"
          />Sean a y b enteros positivos, entonces el máximo divisor común, MCD,
          de a y b es el último residuo no cero de la aplicación sucesiva del
          algoritmo de Euclides.
        </p>
        <p class="texto justificar">
          Algoritmo de Euclides/Algoritmo de la División:
          <span class="fw-bolder resultado resu">a = qb + r</span>
        </p>
        <p class="texto justificar">
          Donde: <span class="fw-bolder resultado">a</span> es el dividendo,
          <span class="fw-bolder resultado">b</span> es el divisor,
          <span class="fw-bolder resultado">q</span> es el cociente,
          <span class="fw-bolder resultado">r</span> es el residuo
        </p>
      </div>
    </div>

    <form class="row g-3 mt-3" @submit.prevent="calculate">
      <div class="col-md-6">
        <label for="inputN1" class="form-label">Número 1</label>
        <input
          type="number"
          class="form-control"
          id="inputN1"
          required
          v-model.number="n1"
        />
      </div>

      <div class="col-md-6">
        <label for="inputN2" class="form-label">Número 2</label>
        <input
          type="number"
          class="form-control"
          id="inputN2"
          required
          v-model.number="n2"
        />
      </div>

      <div class="col-12" v-if="n1 && n2">
        <p class="text-center mt-2 fw-bolder resu">
          El MCD de {{ n1 }} y {{ n2 }} es <b class="resultado">{{ res }}</b>
        </p>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary mt-3">
          <span v-if="recalcular" @click="reiniciar"
            >VOLVER A CALCULAR EL MCD</span
          >
          <span v-else>CALCULAR EL MCD</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  name: "MCD",
  props: {
    msg: String,
  },
  data() {
    return {
      n1: null,
      n2: null,
      res: null,
      repetir: true,
      recalcular: false,
    };
  },
  setup() {
    // instanciamos
    const toast = useToast();
    // Retornamos para que sea reutilizable
    return { toast };
  },
  methods: {
    calculate() {
      console.log("Presiono calcular");
      // a = qb + r
      // a es el dividendo
      // b es el divisor
      // q es el cociente
      // r es el residuo
      let a = this.n1;
      let b = this.n2;

      if (this.n1 !== 0 && this.n2 !== 0) {
        let temporal; //Para no perder b que contendra los residuos hasta que sean cero

        while (b !== 0) {
          temporal = b; // Divisor
          b = a % b; // Guarda el residuo
          a = temporal; // Dividendo
        }
        this.res = a;
        this.recalcular = true; //

        this.toast.success(`EL MCD de ${this.n1} y ${this.n2} es ${this.res}`, {
          timeout: 6000,
        });
      } else {
        this.toast.error(
          "N1 y N2 deben ser enteros positivos y diferentes de 0",
          {
            timeout: 6000,
          }
        );

        this.n1 = null;
        this.n2 = null;
        this.res = null;
      }
    },
    reiniciar() {
      this.n1 = null;
      this.n2 = null;
      this.res = null;
      this.recalcular = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

.container {
  width: 50%;
}

img {
  object-fit: cover;
  width: auto;
  height: 150px;
  background-color: #fff;
  float: left;
}

.justificar {
  text-align: justify;
  text-justify: inter-word;
}

h2 {
  position: relative;
  float: left;
  background: tomato;
  color: #fff;
  font-size: 2.5em;
}

h2 span {
  position: absolute;
  right: 0;
  width: 0;
  background: tomato;
  border-left: 1px solid #000;
  /* animation: escribir 10s steps(30) infinite alternate;  DESCOMENTAR PARA EFECTO MAQUINA ESCRIBIR*/
}

/* @keyframes escribir {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
} */

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.resu {
  font-size: 20px;
}

.resultado {
  color: #42b983;
}
</style>
