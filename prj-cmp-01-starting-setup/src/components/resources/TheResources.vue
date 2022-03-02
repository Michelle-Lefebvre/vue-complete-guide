<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :btn="storedResButton">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :btn="addResButton">Add Resources</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    }
  },
  provide() {  // for all child comontnet
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    }
  },
  computed: {
    storedResButton() {
      return this.selectedTab === 'stored-resources' ? null : 'btn'
    },
    addResButton() {
      return this.selectedTab === 'add-resource' ? null : 'btn'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },

    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      }
      this.storedResources.unshift(newResource)
      this.selectedTab = 'stored-resources'
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId)
      this.storedResources.splice(resIndex, 1)
    }
  }
}
</script>