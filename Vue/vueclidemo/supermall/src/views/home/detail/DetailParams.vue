<template>
  <div class="detail-params" v-if="Object.keys(goodsParams).length !== 0">
    <div class="params-title">{{ goodsParams.size.key }}</div>
    <table
      v-for="(table, index) in goodsParams.size.tables"
      :key="index"
      class="size-params"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <div class="params-title">{{ goodsParams.info.key }}</div>
    <table class="info-params">
      <tr v-for="(tr, index) in goodsParams.info.set" :key="index">
        <td class="info-params-key">{{ tr.key }}</td>
        <td class="info-params-value">{{ tr.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  components: {},
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.detail-params {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  .params-title {
    margin: 10px 0;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid rgba(100, 100, 100, 0.1);
      height: 42px;
      line-height: 42px;
    }
  }
}
.info-params-key {
  width: 100px;
}
.info-params-value {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: var(--color-high-text);
}
</style>
