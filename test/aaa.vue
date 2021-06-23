<script lang="tsx">
import Vue from 'vue';
import siderbar from './siderbar.vue';
// let a = null as any;
export default Vue.extend({
  name: 'Layout',
  components: { siderbar },
  render() {
    return (
      <div class="layout">
        <header class="layout-header" />
        <div class="container">
          <siderbar class="container-siderbar" />
          <router-view class="container-page" />
        </div>
      </div>
    );
  }
});
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  .layout-header {
    flex-shrink: 0;
    height: 60px;
  }

  .container {
    display: flex;
    flex: 1;
    height: 0;

    &-siderbar {
      flex-shrink: 0;
      width: 240px;
      height: 100%;
    }

    &-page {
      position: relative;
      flex: 1;
      height: 100%;
      padding: 0 20px;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
