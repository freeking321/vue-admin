<template>
  <section>
    <el-tabs type="border-card" @tab-click="tabChange">
      <el-tab-pane label="ECS" name="ecsTypeList"></el-tab-pane>
      <el-tab-pane label="Memcache" name="childTwo"></el-tab-pane>
      <div :is="currentView"></div>
    </el-tabs>
  </section>
</template>
<script>
    import ecsTypeList from '@/components/ecsTypeList.vue';
    import childTwo from '@/components/childTwo.vue';
    export default {
        data() {
            return {
                ecsTypeList: 'ecsTypeList',
                childTwo: 'childTwo',
                currentView: 'ecsTypeList'
            };
        },

        methods: {
            tabChange(tab) {
                console.log(tab.name);
                this.currentView = tab.name;
            }
        },

        components: {
            ecsTypeList,
            childTwo,
        }
    }
</script>

