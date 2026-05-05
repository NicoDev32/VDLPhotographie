<template>
  <transition name="cookie-slide">
    <div
      v-if="visible"
      class="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Bandeau cookies"
    >
      <div class="cookie-inner">
        <div class="cookie-text">
          <p>
            Ce site utilise des cookies pour améliorer votre expérience et intégrer une carte Google Maps.
            En acceptant, vous consentez à l'utilisation de ces cookies conformément au
            <router-link to="/formulaire" class="cookie-link" @click.native="accept">RGPD</router-link>.
          </p>
        </div>
        <div class="cookie-actions">
          <button class="btn-refuse" @click="refuse">Refuser</button>
          <button class="btn-accept" @click="accept">Accepter</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const STORAGE_KEY = "vdl_cookie_consent";

export default {
  name: "CookieBanner",
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      this.visible = true;
    }
  },
  methods: {
    accept() {
      localStorage.setItem(STORAGE_KEY, "accepted");
      this.visible = false;
      this.$emit("consent", "accepted");
    },
    refuse() {
      localStorage.setItem(STORAGE_KEY, "refused");
      this.visible = false;
      this.$emit("consent", "refused");
    },
  },
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #1a1a1a;
  color: #f5f5f5;
  padding: 16px 24px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.25);
}

.cookie-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.cookie-text {
  flex: 1;
  min-width: 240px;
}

.cookie-text p {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #d1d1d1;
}

.cookie-link {
  color: #C2A191;
  text-decoration: underline;
}

.cookie-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.btn-refuse {
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid #555;
  background: transparent;
  color: #d1d1d1;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}

.btn-refuse:hover {
  border-color: #C2A191;
  color: #C2A191;
}

.btn-accept {
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  background: #C2A191;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-accept:hover {
  background: #ad8e80;
}

/* Animation */
.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.cookie-slide-enter,
.cookie-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
