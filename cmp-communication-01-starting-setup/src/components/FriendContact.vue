<template>
  <li>
    <h2>{{ name }} {{ isFavorite === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">{{ toggleFavorite ? 'Hide' : 'Show' }} Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false
    },
  },

  // emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': function (id) {
      if (id) {
        return true
      } else {
        return false
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    }
  }
};
</script>