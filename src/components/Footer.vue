<template>
  <div class="footer">
    <div id="contacts"></div>
    <!--création d'une ancre-->
    <p>
      <a href="/#/formulaire"><strong>Contact</strong></a>
    </p>
    <span class="tel"
      ><p><i class="fas fa-phone-alt"></i> 06 43 07 36 40</p></span
    >
    <div class="icone">
      <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
      <a href="instagramm.com"><i class="fab fa-instagram"></i></a>
      <a href="mailto:leonardi.nicolas@live.com"
        ><i class="far fa-envelope"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.tel p {
  /*texte téléphone partie contact*/
  color: black;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 25px;
}

.footer {
  /*background-color: burlywood;*/
  background-color: rgb(245, 245, 245);
  height: 170px;
  border-radius: 10px 10px 0 0;
  // box-shadow: 8px 5px 12px #555;
}

.footer p,
a {
  text-align: center;
  text-decoration: none;
  font-family: "Barlow Semi Condensed", sans-serif;
  color: black;
  letter-spacing: 1px;
  font-size: 25px;
}

.footer p,
a:hover {
  color: rgb(203, 161, 144);
}

.footer .icone i {
  color: black;
  font-size: 40px;
  padding: 20px;
  transition: transform 0.4s;
}

.footer .icone i:hover {
  color: rgb(203, 161, 144);
  transform: scale(1.08);
}

.footer .icone {
  display: flex;
  justify-content: center;
}
</style>
