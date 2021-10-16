<template>
  <div class="hello container texto mt-4">
    
    <p class="texto justificar"><img class="me-2" alt="Ecuclides" src="../assets/img/Euclides.png" />Euclides (en griego Εὐκλείδης, Eukleidēs, latín Euclīdēs) fue un matemático y geómetra griego (ca. 325 a. C.-ca. 265 a. C.). Se le conoce como "el padre de la geometría". Fue un activo en Alejandría (antiguo Egipto) en tiempos de Ptolomeo I Sóter (323 – 283 a. C.), Fue el fundador de la escuela de matemáticas de la ciudad.</p>
    
    <form class="row g-3 mt-3">
      <div class="col-md-6">
        <label for="inputN1" class="form-label">Número 1</label>
        <input type="text" class="form-control" id="inputN1" />
      </div>

      <div class="col-md-6">
        <label for="inputN2" class="form-label">Número 2</label>
        <input type="text" class="form-control" id="inputN2" />
      </div>

      <div class="col-12">
        <label for="inputRes" class="form-label">Resultado</label>
        <input type="text" class="form-control" id="inputRes" />
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Calcular</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MCD",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
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

.justificar{
  text-align: justify;
  text-justify: inter-word;
}
</style>
