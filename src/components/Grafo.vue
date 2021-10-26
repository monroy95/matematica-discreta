<template>
  <!-- test -->
  <p class="mt-4 texto">
    Con la rueda central del mouse puede acercar o alejar el Grafo, también
    puede cambiar las posiciones arrastrando cada vértice.
  </p>
  <p class="resultado">Conjunto Aristas: {{ aristasConj }}</p>
  <p class="resultado">
    Distancia entre primer y último vértice: {{ distancia }}
  </p>
  <p class="resultado">
    {{ grados }}
  </p>
  <p class="resultado">
    {{ isConexo }}
  </p>
  <!-- <code>{{ datosOk }}</code> -->
  <v-network-graph
    class="texto"
    :nodes="nodes"
    :edges="datosOk || edges"
    :layouts="layouts"
    :configs="configs"
    :zoom-level="3"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layouts } from "v-network-graph";
import { UserConfigs, NodeLabelDirection } from "v-network-graph";

// Para renderizar el grafo es necesario utilizar TypeScript
export default defineComponent({
  name: "Grafo",
  props: {
    datosOk: Object,
    aristasConj: String,
    grados: String,
    distancia: Number,
    isConexo: String,
  },
  setup(props) {
    const configs: UserConfigs = {
      node: {
        selectable: true,
        normal: {
          radius: 20,
          color: "#ff6954",
        },
        hover: {
          color: "#ff5362",
        },
        label: {
          fontSize: 12,
          color: "#ffffff",
          direction: NodeLabelDirection.CENTER,
        },
      },
      edge: {
        normal: {
          width: 3,
          color: "#ffca62",
        },
        hover: {
          color: "#ff6954",
        },
      },
    };

    // Nombre de cada vertice
    const nodes = {
      node1: { name: "A" },
      node2: { name: "B" },
      node3: { name: "C" },
      node4: { name: "D" },
      node5: { name: "E" },
    };

    // Posiciones para cada vertice
    const layouts: Layouts = {
      nodes: {
        node1: { x: 10, y: 140 },
        node2: { x: -20, y: 250 },
        node3: { x: 80, y: 350 },
        node4: { x: 200, y: 290 },
        node5: { x: 200, y: 150 },
      },
    };

    // Aristas iniciales
    const edges = {
      edge1: { source: "node1", target: "node4" },
      edge2: { source: "node2", target: "node3" },
      edge3: { source: "node3", target: "node4" },
      edge4: { source: "node4", target: "node5" },
      edge5: { source: "node4", target: "node3" },
      edge6: { source: "node3", target: "node1" },
    };

    return { nodes, configs, layouts, edges };
  },
});
</script>

<style scoped>
.container {
  width: 50%;
}

.resultado {
  color: #42b983;
  font-size: 20px;
  font-weight: bolder;
}
</style>