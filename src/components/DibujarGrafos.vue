<template>
  <div class="container">
    <!-- Matriz de adyacencia -->
    <p class="texto">Las celdas solo aceptan el valor de 0 o 1</p>
    <form class="row g-3" @submit.prevent="dibujar">
      <table class="table table-bordered texto">
        <!-- Cabeceras de tabla -->
        <thead>
          <tr>
            <th scope="col" class="grey">#</th>
            <th scope="col" class="grey">A</th>
            <th scope="col" class="grey">B</th>
            <th scope="col" class="grey">C</th>
            <th scope="col" class="grey">D</th>
            <th scope="col" class="grey">E</th>
          </tr>
        </thead>
        <!-- Cuerpo de tabla -->
        <tbody>
          <tr>
            <th scope="row" class="grey">A</th>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="AA"
                required
                min="0"
                max="1"
                v-model.number="AA"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="AB"
                required
                min="0"
                max="1"
                v-model.number="AB"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="AC"
                required
                min="0"
                max="1"
                v-model.number="AC"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="AD"
                required
                min="0"
                max="1"
                v-model.number="AD"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="AE"
                required
                min="0"
                max="1"
                v-model.number="AE"
              />
            </td>
          </tr>

          <tr>
            <th scope="row" class="grey">B</th>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="BA"
                required
                min="0"
                max="1"
                v-model.number="BA"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="BB"
                required
                min="0"
                max="1"
                v-model.number="BB"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="BC"
                required
                min="0"
                max="1"
                v-model.number="BC"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="BD"
                required
                min="0"
                max="1"
                v-model.number="BD"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="BE"
                required
                min="0"
                max="1"
                v-model.number="BE"
              />
            </td>
          </tr>

          <tr>
            <th scope="row" class="grey">C</th>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="CA"
                required
                min="0"
                max="1"
                v-model.number="CA"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="CB"
                required
                min="0"
                max="1"
                v-model.number="CB"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="CC"
                required
                min="0"
                max="1"
                v-model.number="CC"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="CD"
                required
                min="0"
                max="1"
                v-model.number="CD"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="CE"
                required
                min="0"
                max="1"
                v-model.number="CE"
              />
            </td>
          </tr>

          <tr>
            <th scope="row" class="grey">D</th>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="DA"
                required
                min="0"
                max="1"
                v-model.number="DA"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="DB"
                required
                min="0"
                max="1"
                v-model.number="DB"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="DC"
                required
                min="0"
                max="1"
                v-model.number="DC"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="DD"
                required
                min="0"
                max="1"
                v-model.number="DD"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="DE"
                required
                min="0"
                max="1"
                v-model.number="DE"
              />
            </td>
          </tr>

          <tr>
            <th scope="row" class="grey">E</th>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="EA"
                required
                min="0"
                max="1"
                v-model.number="EA"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="EB"
                required
                min="0"
                max="1"
                v-model.number="EB"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="EC"
                required
                min="0"
                max="1"
                v-model.number="EC"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="ED"
                required
                min="0"
                max="1"
                v-model.number="ED"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control texto"
                id="EE"
                required
                min="0"
                max="1"
                v-model.number="EE"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" class="btn btn-primary mt-3">Generar Grafo</button>
    </form>

    <!-- Componente Grafo -->
    <Grafo
      :datosOk="edges"
      :aristasConj="conjuntoAristas"
      :grados="grados"
      :distancia="distancia"
      :isConexo="isConexo"
    />
  </div>
</template>

<script >
import Grafo from "./Grafo.vue";
export default {
  data() {
    return {
      AA: 0,
      AB: 0,
      AC: 0,
      AD: 0,
      AE: 0,
      BA: 0,
      BB: 0,
      BC: 0,
      BD: 0,
      BE: 0,
      CA: 0,
      CB: 0,
      CC: 0,
      CD: 0,
      CE: 0,
      DA: 0,
      DB: 0,
      DC: 0,
      DD: 0,
      DE: 0,
      EA: 0,
      EB: 0,
      EC: 0,
      ED: 0,
      EE: 0,
      n: {
        A: "node1",
        B: "node2",
        C: "node3",
        D: "node4",
        E: "node5",
      },
      datos: [],
      edges: {},
      conjuntoAristas: "",
      grados: "",
      distancia: "",
      isConexo: "",
    };
  },
  components: { Grafo },
  methods: {
    dibujar() {
      // console.log("DIBUJAR");
      this.conjuntoAristas = "{ ";

      // Guarda los valores de cada posicion de la tabla puede ser 0 o 1
      this.datos = [
        { AA: this.AA, AB: this.AB, AC: this.AC, AD: this.AD, AE: this.AE },
        { BA: this.BA, BB: this.BB, BC: this.BC, BD: this.BD, BE: this.BE },
        { CA: this.CA, CB: this.CB, CC: this.CC, CD: this.CD, CE: this.CE },
        { DA: this.DA, DB: this.DB, DC: this.DC, DD: this.DD, DE: this.DE },
        { EA: this.EA, EB: this.EB, EC: this.EC, ED: this.ED, EE: this.EE },
      ];

      // Por cada posicion se ha la validacion para obtener la conexion entre vertices
      this.datos.forEach((element, index) => {
        for (const key in element) {
          if (element[key] == 1) {
            // Genera el conjunto del Aristas
            this.conjuntoAristas += `(${key[0]}, ${key[1]}), `;
            // Genera los nombres de los vertices
            this.edges[`edge${this.n[key[0]]}${this.n[key[1]]}`] = {
              source: this.n[key[0]],
              target: this.n[key[1]],
            };
          }
        }
      });

      this.conjuntoAristas += " }";
      // console.log(this.conjuntoAristas);

      // Calculo de grados de cada vertice
      let gradoA = [...this.conjuntoAristas]
        .map((i) => !!~i.indexOf("A"))
        .filter((i) => i).length;

      let gradoB = [...this.conjuntoAristas]
        .map((i) => !!~i.indexOf("B"))
        .filter((i) => i).length;

      let gradoC = [...this.conjuntoAristas]
        .map((i) => !!~i.indexOf("C"))
        .filter((i) => i).length;

      let gradoD = [...this.conjuntoAristas]
        .map((i) => !!~i.indexOf("D"))
        .filter((i) => i).length;

      let gradoE = [...this.conjuntoAristas]
        .map((i) => !!~i.indexOf("E"))
        .filter((i) => i).length;

      if (
        gradoA == 0 ||
        gradoA == 1 ||
        gradoB == 0 ||
        gradoB == 1 ||
        gradoC == 0 ||
        gradoC == 1 ||
        gradoD == 0 ||
        gradoD == 1 ||
        gradoE == 0 ||
        gradoE == 1
      ) {
        this.isConexo = "No es conexo";
      } else {
        this.isConexo = "Es conexo";
      }

      this.grados = `Grado Vértice A=${gradoA}. Grado Vértice B=${gradoB}. Grado Vértice C=${gradoC}. Grado Vértice D=${gradoD}. Grado Vértice E=${gradoE}.`;

      this.distancia = [...this.conjuntoAristas]
        .map((i) => !!~i.indexOf("("))
        .filter((i) => i).length;

      // Actualizamos datos
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.container {
  width: 50%;
}

input[type="number"] {
  background: transparent;
  border: none;
  outline-width: 0;
  color: #ecf0f1;
  text-align: center;
}

input[type="number"]:focus {
  background: transparent;
  border: none;
  outline-width: 0;
  color: #ecf0f1;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

table {
  table-layout: fixed;
  /* width: 10px; */
}

th,
td {
  width: 10px;
  overflow: hidden;
}

.grey {
  background-color: rgba(128, 128, 128, 0.25);
}
.red {
  background-color: rgba(255, 0, 0, 0.25);
}
.blue {
  background-color: rgba(0, 0, 255, 0.25);
}
</style>