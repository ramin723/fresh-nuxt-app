<template>
  <div class="homepage">
    <!-- Header -->
    <header class="header">
      <div class="logo">
        <img src="/images/logo.png" alt="Meem Bet Logo" class="logo-img" />
      </div>
      <div class="header-buttons">
        <button @click="connectWallet" class="wallet-btn">Connect Wallet</button>
        <button @click="openMenu" class="menu-btn">Menu</button>
      </div>
    </header>

    <!-- Main Logo (center image) -->
    <div class="main-logo">
      <img src="/images/crow-logo.png" alt="Crowned Crow" class="main-logo-img" />
    </div>

    <!-- Event Window -->
    <section class="event-window">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="event in events"
            :key="event.id"
            @click="goToEventPage(event.id)"
          >
            <div class="event-content">
              <h3 class="event-title">{{ event.title }}</h3>
              <div class="options">
                <img
                  v-for="option in event.options"
                  :key="option.id"
                  :src="option.image"
                  :alt="option.label"
                  class="option-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <!-- Navigation Bar -->
    <nav class="navigation-bar">
      <button class="nav-btn" @click="goToPage('events')">Events</button>
      <button class="nav-btn" @click="goToPage('wallet')">Wallet</button>
      <button class="nav-btn" @click="goToPage('referrals')">Referrals</button>
      <button class="nav-btn" @click="goToPage('settings')">Settings</button>
    </nav>
  </div>
</template>

<script>
import Swiper, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Event 1",
          options: [
            { id: "1A", label: "Option A", image: "/images/option1A.png" },
            { id: "1B", label: "Option B", image: "/images/option1B.png" },
          ],
        },
        {
          id: 2,
          title: "Event 2",
          options: [
            { id: "2A", label: "Option A", image: "/images/option2A.png" },
            { id: "2B", label: "Option B", image: "/images/option2B.png" },
          ],
        },
      ],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  methods: {
    connectWallet() {
      console.log("Connecting Wallet...");
    },
    openMenu() {
      console.log("Opening Menu...");
    },
    goToEventPage(eventId) {
      console.log(`Navigating to event ${eventId}`);
      // Navigate to the event page
      this.$router.push(`/event/${eventId}`);
    },
    goToPage(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>

<style scoped>
/* General Styling */
.homepage {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, #1e3a8a, #111827);
  color: white;
}

/* Header Styling */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.7);
}

.logo-img {
  height: 50px;
}

.header-buttons {
  display: flex;
  gap: 10px;
}

.wallet-btn,
.menu-btn {
  background: #2563eb;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

/* Main Logo Styling */
.main-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.main-logo-img {
  width: 150px;
  height: auto;
}

/* Event Window Styling */
.event-window {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-container {
  width: 90%;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
}

.event-content {
  text-align: center;
}

.event-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.option-image {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}

/* Navigation Bar Styling */
.navigation-bar {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: rgba(0, 0, 0, 0.9);
}

.nav-btn {
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
}
</style>
