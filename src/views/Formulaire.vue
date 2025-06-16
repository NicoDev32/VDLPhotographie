<template>
  <main>
    <Header />
    <div class="container">
      <h2>Formulaire de contact</h2>

      <form
        action="MAILTO:leonardi.nicolas@live.fr"
        method="post"
        enctype="text/plain"
      >
        Nom:<br />
        <input
          type="text"
          id="fname"
          name="Nom"
          placeholder="Votre nom"
        /><br />
        Prénom:<br />
        <input type="text" name="Prenom" placeholder="Votre prénom" /><br />
        E-mail:<br />
        <input type="text" name="E-mail" placeholder="Votre e-mail" /><br />

        <label for="subject">Votre projet en quelques mots</label>
        <textarea
          id="subject"
          name="Projet"
          placeholder="Votre projet"
          style="height: 200px"
        ></textarea>

        <input @click="reload" type="submit" value="Envoyer" />
        <!-- <input type="reset" value="Reset" /> -->
      </form>
    </div>
    <Footer />
  </main>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Login",
  components: { Footer, Header },
  data() {
    return {
      dataLogin: {
        email: null,
        password: null,
      },
      msg: "",
    };
  },

  methods: {
    reload() {
      setTimeout("location.reload(true);", 2000);
    },
  },
};
</script>

<style lang="scss">
main {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0px;
}

input[type="text"],
textarea,
input[type="email"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 0px;
  resize: vertical;
}
label {
  margin-right: 0px;
  margin-left: 0px;
  width: 100%;
}

input[type="submit"] {
  background-color: #1255a2;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #1872d9;
}

.container {
  /* Ajouter box-sizing */
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%;
  /* redéfinition 400 + 2*20 */
  max-width: 440px;
  margin: 20px auto;
}
h2 {
  color: rgb(203, 161, 144);
  width: 100%;
}
</style>
