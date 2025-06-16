<template>
  <div class="card">
    <div class="card-container">
      <div class="front">
        <p class="titre">{{ titre }}</p>
        <i class="fas fa-camera"></i>
      </div>
      <div class="back">
        <p class="description">
          <!-- <i class="fas fa-camera"></i> -->
          {{ description }}
        </p>
        <p class="description">
          {{ description2 }}
        </p>
        <p class="description3">
          {{ description3 }}
        </p>
        <p class="description">
          {{ description4 }}
        </p>
        <p class="description">
          {{ description5 }}
        </p>
        <p class="description">
          {{ description6 }}
        </p>
        <p class="description">
          {{ description7 }}
        </p>
        <p class="prix">{{ prix }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: [
    "titre",
    "description",
    "description2",
    "description3",
    "description4",
    "description5",
    "description6",
    "description7",
    "prix",
  ],
};
</script>

<style lang="scss">
.card-container,
.front,
.back {
  //partie card
  width: 20rem;
  height: 20rem;
}

.card-container .front p {
  font-size: 25px;
  margin-top: 100px;
}

.card-container p {
  font-size: 16px;
}

.card-container .prix {
  font-size: 41px;
  margin: 0px;
}
.card-container {
  margin: 5rem;
}
.front,
.back {
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);

  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 2rem;
  font-weight: bolder;
  color: #3f3844; //#fff;
  text-transform: uppercase;
  text-align: center;
  padding: 0px;
}
/* front side bg is green gradient */
.front {
  background-image: linear-gradient(to right bottom, #ffffff, #faf0de, #eed1ad);
}
/* back side bg is orange gradient */
.back {
  background-image: linear-gradient(to right bottom, #ffffff, #faf0de, #eed1ad);
}

.card-container {
  position: relative;
}
.front,
.back {
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  overflow: hidden;
  transition: transform 0.8s ease;
}
.back {
  transform: rotateY(180deg);
}
.card-container:hover .front {
  transform: rotateY(-180deg);
}
.card-container:hover .back {
  transform: rotateY(0deg);
}

.card-container {
  perspective: 75rem;
  margin: auto;
  margin-top: 30px;
}

//fin card
</style>
